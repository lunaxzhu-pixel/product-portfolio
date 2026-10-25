import json
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent
VIEWPORTS = [320, 390, 600, 601, 700, 768, 800, 1024, 1440]
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless=True)
    context = browser.new_context(viewport={'width': 1440, 'height': 1000}, device_scale_factor=1)
    page = context.new_page()
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto('http://127.0.0.1:4173', wait_until='networkidle')
    page.screenshot(animations="disabled", path=str(ROOT / 'desktop.png'), full_page=True)
    page.locator('#home').screenshot(animations="disabled", path=str(ROOT / 'hero-desktop.png'))
    page.locator('#writing').screenshot(animations="disabled", path=str(ROOT / 'writing-desktop.png'))
    assert page.title() == 'Luna Zhu — AI Products & Cloud Platforms'
    assert page.locator('h1').count() == 1
    assert page.locator('.hero-intro').inner_text().startswith('Senior Product Manager at Amazon, ex-AWS, with 11+ years')
    assert '11+ years' in page.locator('.hero-intro').inner_text()
    for key in ['aws', 'vto', 'sizing', 'xray', 'timber']:
        button = page.locator(f'[data-case="{key}"]')
        button.click()
        assert page.locator('#case-dialog').evaluate('(d) => d.open')
        assert len(page.locator('#case-title').inner_text()) > 10
        assert page.locator('.case-section h3').all_text_contents() == ['Problem', 'Ownership', 'Decisions', 'Tradeoffs', 'Execution', 'Outcomes', 'Lessons']
        if key == 'vto':
            page.locator('#case-dialog').screenshot(animations="disabled", path=str(ROOT / 'case-study.png'))
        page.keyboard.press('Escape')
        assert not page.locator('#case-dialog').evaluate('(d) => d.open')
        assert button.evaluate('(e) => e === document.activeElement')
    assert page.locator('#work .project').count() == 3
    assert page.locator('.additional-project').count() == 2
    milestones = page.locator('[data-role]')
    assert milestones.count() == 4
    for key, company in [('rrd', 'R.R. Donnelley'), ('internet-brands', 'Internet Brands'), ('aws', 'Amazon Web Services'), ('amazon', 'Amazon Retail')]:
        button = page.locator(f'[data-role="{key}"]')
        button.click()
        assert page.locator('#case-dialog').evaluate('(d) => d.open')
        assert company in page.locator('.career-company').inner_text()
        assert page.locator('.role-achievements li').count() >= 2
        assert button.evaluate('(e) => e.classList.contains("is-active")')
        if key == 'aws':
            for related in ['aws', 'xray', 'timber']:
                page.locator(f'[data-related-case="{related}"]').click()
                assert page.locator('.case-section h3').count() == 7
                page.locator('.dialog-done').click()
                assert 'Amazon Web Services' in page.locator('.career-company').inner_text()
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
    assert 'knowing where to act' in page.locator('#case-title').inner_text()
    page.locator('.dialog-close').click()
    assert page.locator('[data-role="aws"]').evaluate('(e) => e === document.activeElement')
    page.wait_for_function('!document.body.classList.contains("modal-open")')
    page.goto('http://127.0.0.1:4173/#role-amazon', wait_until='networkidle')
    assert 'Amazon Retail' in page.locator('.career-company').inner_text()
    page.locator('.dialog-done').click()
    page.locator('#experience').screenshot(animations="disabled", path=str(ROOT / 'trajectory-desktop.png'))
    resume_link = page.locator('a:has-text("View resume")').get_attribute('href')
    response = context.request.get('http://127.0.0.1:4173/' + resume_link)
    assert response.status == 200 and response.body().startswith(b'%PDF')
    assert response.body() == (ROOT.parent / 'assets' / 'Luna-Zhu-Resume.pdf').read_bytes(), 'Preview serves an outdated resume'
    for anchor in page.locator('a[href^="#"]').all():
        target = anchor.get_attribute('href')
        assert page.locator(target).count() == 1, target
    context.grant_permissions(['clipboard-read', 'clipboard-write'])
    page.locator('#copy-email').click()
    page.wait_for_function('document.querySelector("#copy-status").textContent.includes("copied")')
    assert page.evaluate('navigator.clipboard.readText()') == 'luna.x.zhu@gmail.com'
    for key in ['aws', 'vto', 'sizing', 'xray', 'timber']:
        page.goto(f'http://127.0.0.1:4173/#case-{key}', wait_until='networkidle')
        assert page.locator('#case-dialog').evaluate('(d) => d.open')
        assert page.locator('.case-section h3').count() == 7
        page.locator('.dialog-close').click()
        page.wait_for_function('!document.body.classList.contains("modal-open")')
    for width in VIEWPORTS:
        page.set_viewport_size({'width': width, 'height': 900})
        page.goto('http://127.0.0.1:4173', wait_until='networkidle')
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), f'Overflow at {width}'
        for card in page.locator('#work .project').all():
            summary = card.locator('.project-copy').bounding_box()
            diagram = card.locator('.decision-visual').bounding_box()
            if width <= 700:
                assert summary['y'] + summary['height'] <= diagram['y'] + 1, f'Mobile summary order at {width}'
            else:
                assert diagram['x'] + diagram['width'] <= summary['x'] + 1, f'Desktop diagram placement at {width}'
        for card in page.locator('.additional-project').all():
            assert card.evaluate('(e) => e.scrollWidth <= e.clientWidth'), f'Additional project overflow at {width}'
        for diagram in page.locator('.decision-visual').all():
            assert diagram.evaluate('(e) => e.scrollWidth <= e.clientWidth && e.scrollHeight <= e.clientHeight + 1'), f'Clipped diagram at {width}'
        heights = page.locator('.milestone-card').evaluate_all('(cards) => cards.map(card => card.getBoundingClientRect().height)')
        assert max(heights) - min(heights) <= 1, f'Uneven career cards at {width}'
        expected_roles = ['amazon', 'aws', 'internet-brands', 'rrd'] if width <= 600 else ['rrd', 'internet-brands', 'aws', 'amazon']
        assert page.locator('.trajectory-track [data-role]').evaluate_all('(buttons) => buttons.map(button => button.dataset.role)') == expected_roles
        for key in ['aws', 'vto', 'sizing', 'xray', 'timber']:
            page.locator(f'[data-case="{key}"]').click()
            assert page.locator('#case-dialog').evaluate('(e) => e.scrollWidth <= e.clientWidth'), f'{key} dialog overflow at {width}'
            if width in [390, 1440]:
                page.locator('#case-dialog').screenshot(animations="disabled", path=str(ROOT / f'{key}-details-{width}.png'))
            page.locator('.dialog-close').click()
            page.wait_for_function('!document.body.classList.contains("modal-open")')
        if width == 390:
            page.screenshot(animations="disabled", path=str(ROOT / 'mobile.png'), full_page=True)
            page.locator('#home').screenshot(animations="disabled", path=str(ROOT / 'hero-mobile.png'))
            page.locator('.additional-work').screenshot(animations="disabled", path=str(ROOT / 'additional-mobile.png'))
            page.locator('#writing').screenshot(animations="disabled", path=str(ROOT / 'writing-mobile.png'))
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
            menu.click()
            page.locator('#navigation a[href="#work"]').focus()
            page.keyboard.press('Escape')
            assert menu.get_attribute('aria-expanded') == 'false'
            assert menu.evaluate('(e) => e === document.activeElement')
            page.locator('[data-case="aws"]').click()
            page.locator('.dialog-done').click()
            assert not page.locator('#case-dialog').evaluate('(d) => d.open')
    page.set_viewport_size({'width': 1440, 'height': 1000})
    page.goto('http://127.0.0.1:4173', wait_until='networkidle')
    page.locator('.additional-work').screenshot(animations="disabled", path=str(ROOT / 'additional-desktop.png'))
    page.emulate_media(reduced_motion='reduce')
    page.locator('[data-case="timber"]').focus()
    page.keyboard.press('Enter')
    assert page.locator('#case-dialog').evaluate('(d) => d.open')
    page.keyboard.press('Escape')
    page.wait_for_function('!document.body.classList.contains("modal-open")')
    assert page.locator('[data-case="timber"]').evaluate('(e) => e === document.activeElement')
    page.evaluate("Object.defineProperty(navigator, 'clipboard', {value: {writeText: () => Promise.reject(new Error('denied'))}, configurable: true})")
    page.locator('#copy-email').click()
    page.wait_for_function("document.querySelector('#copy-status').textContent.includes('Copy the address')")
    assert not errors, errors
    print(json.dumps({'result': 'passed', 'viewports': VIEWPORTS, 'checks': ['case studies', 'Escape and focus restoration', 'direct case and role URLs', 'four career milestone dialogs', 'related case studies and return to role', 'keyboard activation', 'mobile timeline scrolling', 'PDF resume', 'anchor links', 'copy email', 'mobile navigation', 'no horizontal overflow', 'unclipped diagrams', 'aligned career cards', 'no JavaScript errors']}))
    browser.close()
