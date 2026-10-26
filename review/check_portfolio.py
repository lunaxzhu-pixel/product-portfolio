import json
import os
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent
BASE_URL = os.environ.get('PORTFOLIO_BASE_URL', 'http://127.0.0.1:4173').rstrip('/')
CASE_KEYS = ['vto', 'sizing', 'aws', 'xray', 'internal-platform']
CASE_NAMES = ['GenAI Virtual Try-On', 'Global Size Intelligence', 'CloudWatch Application Signals', 'AWS X-Ray Repricing', 'AWS Internal Usage Platform']
HEADINGS = ['Problem', 'Ownership', 'Insights', 'Product Decisions', 'Execution', 'Outcomes', 'Lessons & Tradeoffs']
LIFECYCLE_PHASES = {
    'vto': ['Discover', 'Define', 'Design', 'Build', 'Launch', 'Measure'],
    'sizing': ['Discover', 'Diagnose', 'Define', 'Build', 'Pilot', 'Measure'],
    'aws': ['Discover', 'Define', 'Prioritize', 'Build', 'Launch', 'Iterate'],
    'xray': ['Diagnose', 'Evaluate', 'Define', 'Align', 'Implement', 'Measure'],
    'internal-platform': ['Discover', 'Size Opportunity', 'Secure Buy-in', 'Build', 'Launch', 'Scale'],
}
VIEWPORTS = [320, 390, 600, 601, 700, 768, 800, 1024, 1440]
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless=True)
    context = browser.new_context(viewport={'width': 1440, 'height': 1000}, device_scale_factor=1)
    page = context.new_page()
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda message: errors.append(message.text) if message.type == 'error' else None)
    page.on('response', lambda response: errors.append(f'{response.status}: {response.url}') if response.status >= 400 and BASE_URL in response.url else None)
    page.on('requestfailed', lambda request: errors.append(f'{request.failure}: {request.url}'))
    page.goto(BASE_URL, wait_until='networkidle')
    page.screenshot(animations="disabled", path=str(ROOT / 'desktop.png'), full_page=True)
    page.locator('#home').screenshot(animations="disabled", path=str(ROOT / 'hero-desktop.png'))
    page.locator('#writing').screenshot(animations="disabled", path=str(ROOT / 'writing-desktop.png'))
    assert page.title() == 'Luna Zhu — AI/ML Products, Cloud Platforms & Monetization'
    assert page.locator('h1').count() == 1
    assert page.locator('.hero-intro').inner_text().startswith('Senior Product Manager at Amazon, ex-AWS, with 11+ years')
    assert '11+ years' in page.locator('.hero-intro').inner_text()
    for key in CASE_KEYS:
        button = page.locator(f'[data-case="{key}"]')
        button.click()
        assert page.locator('#case-dialog').evaluate('(d) => d.open')
        assert len(page.locator('#case-title').inner_text()) > 10
        assert page.locator('.case-section h3').all_text_contents() == HEADINGS
        assert page.locator('#case-content').get_attribute('data-active-case') == key
        assert page.locator('.case-lifecycle h3').inner_text() == 'Product Development Lifecycle'
        assert page.locator('.lifecycle-phase').all_text_contents() == LIFECYCLE_PHASES[key]
        for stage in page.locator('.lifecycle-stage').all():
            assert stage.locator('.lifecycle-points > li').count() >= 2
        labels = [label.rstrip(': ') for label in page.locator('.lifecycle-points strong').all_text_contents()]
        assert not any(label in labels for label in ['My contribution', 'Methods & evidence', 'Decision & tradeoff', 'Result / next step'])
        assert page.locator('.lifecycle-stage.is-pivotal').count() == 1
        assert page.locator('#work .case-lifecycle').count() == 0
        page.locator('.lifecycle-jump').focus()
        page.keyboard.press('Enter')
        assert page.locator('.case-lifecycle h3').evaluate('(e) => e === document.activeElement')
        page.locator('.lifecycle-back').click()
        assert page.locator('#case-title').evaluate('(e) => e === document.activeElement')
        page.locator('.case-framework summary').click()
        assert page.locator('.case-framework').get_attribute('open') is not None
        assert page.locator('.case-framework figure').is_visible()
        assert page.locator('.case-framework figure').evaluate('(e) => e.scrollWidth <= e.clientWidth')
        preview = page.locator(f'#project-{key} .decision-preview')
        assert preview.locator('.preview-choices dt').count() == 2
        assert len(preview.inner_text()) < len(page.locator('.case-framework figure').inner_text())
        assert page.locator('.case-key-decision h3').inner_text() == 'Product Decisions'
        assert page.locator('.case-key-tradeoff h3').inner_text() == 'Lessons & Tradeoffs'
        page.locator('.case-framework summary').click()
        assert page.evaluate('new Set([...document.querySelectorAll("[id]")].map(e => e.id)).size === document.querySelectorAll("[id]").length')
        page.locator('.dialog-close').focus()
        page.keyboard.press('Shift+Tab')
        assert page.locator('#case-dialog').evaluate('(d) => d.contains(document.activeElement)')
        if key == 'vto':
            page.locator('#case-dialog').screenshot(animations="disabled", path=str(ROOT / 'case-study.png'))
        page.keyboard.press('Escape')
        assert not page.locator('#case-dialog').evaluate('(d) => d.open')
        assert button.evaluate('(e) => e === document.activeElement')
    assert page.locator('#work .project').count() == 5
    assert page.locator('#work [data-project]').evaluate_all('(items) => items.map(item => item.dataset.project)') == CASE_KEYS
    assert page.locator('#work .project-label').all_text_contents() == CASE_NAMES
    assert page.locator('#work-index a').count() == 5
    assert page.locator('#work .project-metrics > div').count() == 15
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
            for related in ['aws', 'xray', 'internal-platform']:
                page.locator(f'[data-related-case="{related}"]').click()
                assert page.locator('.case-section h3').count() == 7
                page.locator('.dialog-done').click()
                assert 'Amazon Web Services' in page.locator('.career-company').inner_text()
        if key == 'amazon':
            page.locator('#case-dialog').screenshot(animations="disabled", path=str(ROOT / 'career-details.png'))
            page.locator('[data-related-case="vto"]').click()
            assert 'Building shopping confidence' in page.locator('#case-title').inner_text()
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
    assert 'scalable observability business' in page.locator('#case-title').inner_text()
    page.locator('.dialog-close').click()
    assert page.locator('[data-role="aws"]').evaluate('(e) => e === document.activeElement')
    page.wait_for_function('!document.body.classList.contains("modal-open")')
    page.goto(BASE_URL + '/#role-amazon', wait_until='networkidle')
    assert 'Amazon Retail' in page.locator('.career-company').inner_text()
    page.locator('.dialog-done').click()
    page.locator('#experience').screenshot(animations="disabled", path=str(ROOT / 'trajectory-desktop.png'))
    assert page.locator('a[href*=".pdf"], a[download]').count() == 0
    assert page.locator('a, button').evaluate_all('(items) => items.every(e => !/resume/i.test(e.textContent + (e.getAttribute("href") || "")))')
    for old_path in ['/assets/Luna-Zhu-Resume.pdf', '/assets/Luna-Zhu-Resume.pdf?v=20261024', '/resume.pdf', '/assets/resume.pdf', '/Luna_Zhu_Product_Resume.pdf', '/assets/Luna_Zhu_Product_Resume.pdf', '/assets/luna-zhu-resume.pdf']:
        assert context.request.get(BASE_URL + old_path).status == 404, old_path
    assert not list((ROOT.parent / 'assets').rglob('*.pdf'))
    for anchor in page.locator('a[href^="#"]').all():
        target = anchor.get_attribute('href')
        assert page.locator(target).count() == 1, target
    context.grant_permissions(['clipboard-read', 'clipboard-write'])
    page.locator('#copy-email').click()
    page.wait_for_function('document.querySelector("#copy-status").textContent.includes("copied")')
    assert page.evaluate('navigator.clipboard.readText()') == 'luna.x.zhu@gmail.com'
    for key in CASE_KEYS:
        page.goto(f'{BASE_URL}/#case-{key}', wait_until='networkidle')
        assert page.locator('#case-dialog').evaluate('(d) => d.open')
        assert page.locator('.case-section h3').count() == 7
        page.locator('.dialog-close').click()
        page.wait_for_function('!document.body.classList.contains("modal-open")')
    # Legacy links must continue to open the corresponding renamed case.
    for alias, canonical in [('timber', 'internal-platform'), ('application-signals', 'aws')]:
        page.goto(f'{BASE_URL}/#case-{alias}', wait_until='networkidle')
        assert page.locator('#case-content').get_attribute('data-active-case') == canonical
        page.keyboard.press('Escape')
        page.wait_for_function('!document.body.classList.contains("modal-open")')
    page.locator('[data-case="vto"]').click()
    assert page.locator('.case-pagination button').first.is_disabled()
    for key in CASE_KEYS[1:]:
        page.locator('.case-pagination button').last.click()
        assert page.locator('#case-content').get_attribute('data-active-case') == key
    assert page.locator('.case-pagination button').last.is_disabled()
    for key in reversed(CASE_KEYS[:-1]):
        page.locator('.case-pagination button').first.click()
        assert page.locator('#case-content').get_attribute('data-active-case') == key
    page.locator('.dialog-done').click()
    page.wait_for_function('!document.body.classList.contains("modal-open")')
    assert page.url.endswith('#work')
    assert page.locator('[data-case="vto"]').evaluate('(e) => e === document.activeElement')
    for width in VIEWPORTS:
        page.set_viewport_size({'width': width, 'height': 900})
        page.goto(BASE_URL, wait_until='networkidle')
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), f'Overflow at {width}'
        for card in page.locator('#work .project').all():
            summary = card.locator('.project-copy').bounding_box()
            diagram = card.locator('.decision-visual').bounding_box()
            if width <= 700:
                assert summary['y'] + summary['height'] <= diagram['y'] + 1, f'Mobile summary order at {width}'
            else:
                assert diagram['x'] + diagram['width'] <= summary['x'] + 1, f'Desktop diagram placement at {width}'
        for diagram in page.locator('.decision-visual').all():
            assert diagram.evaluate('(e) => e.scrollWidth <= e.clientWidth && e.scrollHeight <= e.clientHeight + 1'), f'Clipped diagram at {width}'
        heights = page.locator('.milestone-card').evaluate_all('(cards) => cards.map(card => card.getBoundingClientRect().height)')
        assert max(heights) - min(heights) <= 1, f'Uneven career cards at {width}'
        expected_roles = ['amazon', 'aws', 'internet-brands', 'rrd'] if width <= 600 else ['rrd', 'internet-brands', 'aws', 'amazon']
        assert page.locator('.trajectory-track [data-role]').evaluate_all('(buttons) => buttons.map(button => button.dataset.role)') == expected_roles
        for key in CASE_KEYS:
            page.locator(f'[data-case="{key}"]').click()
            assert page.locator('#case-dialog').evaluate('(e) => e.scrollWidth <= e.clientWidth'), f'{key} dialog overflow at {width}'
            for stage in page.locator('.lifecycle-stage').all():
                assert stage.evaluate('(e) => e.scrollWidth <= e.clientWidth + 1'), f'{key} lifecycle overflow at {width}'
            if width == 390:
                for point in page.locator('.lifecycle-points > li').all():
                    assert point.evaluate('(e) => parseFloat(getComputedStyle(e).fontSize) >= 14')
                page.locator('.lifecycle-jump').click()
                page.wait_for_function('document.querySelector("#case-dialog").scrollTop > 100')
                page.wait_for_function('''() => {
                    const heading = document.querySelector('.case-lifecycle h3').getBoundingClientRect();
                    const top = document.querySelector('.dialog-top').getBoundingClientRect();
                    return heading.top >= top.bottom && heading.bottom <= document.querySelector('#case-dialog').getBoundingClientRect().bottom;
                }''')
                page.locator('.lifecycle-back').click()
            page.locator('.case-framework summary').click()
            if width == 390:
                for label in page.locator('.case-framework .framework-node p, .case-framework .tryon-flow p, .case-framework .framework-lane li, .case-framework .framework-stages p').all():
                    assert label.evaluate('(e) => parseFloat(getComputedStyle(e).fontSize) >= 14')
                    assert label.evaluate('(e) => e.scrollWidth <= e.clientWidth + 1')
                if key == 'aws':
                    assert page.locator('.framework-lane').count() == 2
                    assert page.locator('.case-milestones strong').all_text_contents() == ['Nov 30, 2023', 'Jun 10, 2024', 'After GA']
            assert page.locator('.case-framework figure').evaluate('(e) => e.scrollWidth <= e.clientWidth'), f'{key} expanded framework overflow at {width}'
            page.locator('.case-framework summary').click()
            if width in [390, 1440]:
                page.locator('#case-dialog').screenshot(animations="disabled", path=str(ROOT / f'{key}-details-{width}.png'))
            page.locator('.dialog-close').click()
            page.wait_for_function('!document.body.classList.contains("modal-open")')
        if width == 390:
            page.screenshot(animations="disabled", path=str(ROOT / 'mobile.png'), full_page=True)
            page.locator('#home').screenshot(animations="disabled", path=str(ROOT / 'hero-mobile.png'))
            page.locator('#project-xray').screenshot(animations="disabled", path=str(ROOT / 'xray-mobile.png'))
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
    page.goto(BASE_URL, wait_until='networkidle')
    page.locator('#project-internal-platform').screenshot(animations="disabled", path=str(ROOT / 'platform-desktop.png'))
    page.emulate_media(reduced_motion='reduce')
    page.locator('[data-case="internal-platform"]').focus()
    page.keyboard.press('Enter')
    assert page.locator('#case-dialog').evaluate('(d) => d.open')
    page.locator('.lifecycle-jump').click()
    assert page.locator('.case-lifecycle h3').evaluate('(e) => e === document.activeElement')
    assert page.locator('#case-dialog').evaluate('(d) => d.scrollTop > 100')
    page.locator('.lifecycle-back').click()
    assert page.locator('#case-dialog').evaluate('(d) => d.scrollTop === 0')
    page.keyboard.press('Escape')
    page.wait_for_function('!document.body.classList.contains("modal-open")')
    assert page.locator('[data-case="internal-platform"]').evaluate('(e) => e === document.activeElement')
    page.evaluate("Object.defineProperty(navigator, 'clipboard', {value: {writeText: () => Promise.reject(new Error('denied'))}, configurable: true})")
    page.locator('#copy-email').click()
    page.wait_for_function("document.querySelector('#copy-status').textContent.includes('Copy the address')")
    # Sensitive values must not be embedded in the public case data or rendered copy.
    data_response = context.request.get(BASE_URL + '/case-studies.js')
    assert data_response.status == 200
    for withheld in ['$10M', '$30M', '$100M', '97%', '1,000 customers', '30 percentage points', 'SVP', '40+', 'Timber']:
        assert withheld not in data_response.text(), withheld
    for asset in ['assets/favicon.svg', 'assets/luna-zhu.png', 'styles.css', 'script.js']:
        assert context.request.get(BASE_URL + '/' + asset).status == 200, asset
    assert not errors, errors
    print(json.dumps({'result': 'passed', 'viewports': VIEWPORTS, 'checks': ['30 lifecycle stages', 'lifecycle jump and return focus', 'lifecycle mobile readability', 'lifecycle reduced-motion scrolling', 'five ordered case studies', 'tailored expandable diagrams', 'previous/next case navigation', 'disclosure-safe case data', 'focus containment', 'Escape and focus restoration', 'direct case and role URLs', 'four career milestone dialogs', 'related case studies and return to role', 'keyboard activation', 'mobile timeline scrolling', 'resume CTA removed and previous paths return 404', 'anchor links', 'copy email', 'mobile navigation', 'no horizontal overflow', 'unclipped diagrams', 'aligned career cards', 'no JavaScript errors']}))
    browser.close()
