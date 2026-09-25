import json
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless=True)
    context = browser.new_context(viewport={'width': 1440, 'height': 1000}, device_scale_factor=1)
    page = context.new_page()
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto('http://127.0.0.1:4173', wait_until='networkidle')
    page.screenshot(animations="disabled", path=str(ROOT / 'desktop.png'), full_page=True)
    assert page.title() == 'Luna Zhu — AI Product Strategy & Growth'
    assert page.locator('h1').count() == 1
    for key in ['aws', 'vto', 'sizing']:
        button = page.locator(f'[data-case="{key}"]')
        button.click()
        assert page.locator('#case-dialog').evaluate('(d) => d.open')
        assert len(page.locator('#case-title').inner_text()) > 10
        if key == 'vto':
            page.locator('#case-dialog').screenshot(animations="disabled", path=str(ROOT / 'case-study.png'))
        page.keyboard.press('Escape')
        assert not page.locator('#case-dialog').evaluate('(d) => d.open')
        assert button.evaluate('(e) => e === document.activeElement')
    milestones = page.locator('[data-role]')
    assert milestones.count() == 4
    for key, company in [('rrd', 'R.R. Donnelley'), ('internet-brands', 'Internet Brands'), ('aws', 'Amazon Web Services'), ('amazon', 'Amazon Retail')]:
        button = page.locator(f'[data-role="{key}"]')
        button.click()
        assert page.locator('#case-dialog').evaluate('(d) => d.open')
        assert company in page.locator('.career-company').inner_text()
        assert page.locator('.role-achievements li').count() >= 2
        assert button.evaluate('(e) => e.classList.contains("is-active")')
        if key == 'amazon':
            page.locator('#case-dialog').screenshot(animations="disabled", path=str(ROOT / 'career-details.png'))
            page.locator('[data-related-case="vto"]').click()
            assert 'Less uncertainty' in page.locator('#case-title').inner_text()
            assert page.locator('.dialog-done').inner_text() == 'Back to role'
            page.locator('.dialog-done').click()
            assert 'Amazon Retail' in page.locator('.career-company').inner_text()
        page.keyboard.press('Escape')
        assert not page.locator('#case-dialog').evaluate('(d) => d.open')
        assert button.evaluate('(e) => e === document.activeElement')
    page.locator('[data-role="aws"]').focus()
    page.keyboard.press('Enter')
    assert 'Amazon Web Services' in page.locator('.career-company').inner_text()
    page.locator('[data-related-case="aws"]').click()
    assert 'growth engine' in page.locator('#case-title').inner_text()
    page.locator('.dialog-close').click()
    assert page.locator('[data-role="aws"]').evaluate('(e) => e === document.activeElement')
    page.wait_for_function('!document.body.classList.contains("modal-open")')
    page.goto('http://127.0.0.1:4173/#role-amazon', wait_until='networkidle')
    assert 'Amazon Retail' in page.locator('.career-company').inner_text()
    page.locator('.dialog-done').click()
    page.locator('#experience').screenshot(animations="disabled", path=str(ROOT / 'trajectory-desktop.png'))
    response = context.request.get('http://127.0.0.1:4173/assets/Luna-Zhu-Resume.pdf')
    assert response.status == 200 and response.body().startswith(b'%PDF')
    for anchor in page.locator('a[href^="#"]').all():
        target = anchor.get_attribute('href')
        assert page.locator(target).count() == 1, target
    context.grant_permissions(['clipboard-read', 'clipboard-write'])
    page.locator('#copy-email').click()
    page.wait_for_function('document.querySelector("#copy-status").textContent.includes("copied")')
    assert page.evaluate('navigator.clipboard.readText()') == 'luna.x.zhu@gmail.com'
    page.goto('http://127.0.0.1:4173/#case-vto')
    assert page.locator('#case-dialog').evaluate('(d) => d.open')
    page.locator('.dialog-close').click()
    for width in [320, 390, 768, 1024, 1440]:
        page.set_viewport_size({'width': width, 'height': 900})
        page.goto('http://127.0.0.1:4173', wait_until='networkidle')
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), f'Overflow at {width}'
        if width == 390:
            page.screenshot(animations="disabled", path=str(ROOT / 'mobile.png'), full_page=True)
            page.locator('#experience').screenshot(animations="disabled", path=str(ROOT / 'trajectory-mobile.png'))
            assert page.locator('.trajectory-prev').is_disabled()
            page.locator('.trajectory-next').click()
            page.wait_for_function('document.querySelector("#trajectory-scroll").scrollLeft > 100')
            assert not page.locator('.trajectory-prev').is_disabled()
            page.locator('[data-role="amazon"]').click()
            assert 'Amazon Retail' in page.locator('.career-company').inner_text()
            assert page.locator('#case-dialog').evaluate('(e) => e.scrollWidth <= e.clientWidth')
            page.locator('.dialog-done').click()
            menu = page.locator('.menu-toggle')
            menu.click()
            assert menu.get_attribute('aria-expanded') == 'true'
            page.locator('#navigation a[href="#work"]').click()
            assert menu.get_attribute('aria-expanded') == 'false'
            page.locator('[data-case="aws"]').click()
            page.locator('.dialog-done').click()
            assert not page.locator('#case-dialog').evaluate('(d) => d.open')
    assert not errors, errors
    print(json.dumps({'result': 'passed', 'viewports': [320,390,768,1024,1440], 'checks': ['case studies', 'Escape and focus restoration', 'direct case and role URLs', 'four career milestone dialogs', 'related case studies and return to role', 'keyboard activation', 'mobile timeline scrolling', 'PDF resume', 'anchor links', 'copy email', 'mobile navigation', 'no horizontal overflow', 'no JavaScript errors']}))
    browser.close()
