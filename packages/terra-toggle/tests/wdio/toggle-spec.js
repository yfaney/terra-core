const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('medium');

viewports.forEach((viewport) => {
  describe('Toggle', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('Default', () => {
      before(() => browser.url('/#/raw/tests/terra-toggle/toggle/default-toggle'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('closed');

      it('expands', () => {
        browser.click('#trigger-toggle'); // Open toggle
      });

      Terra.should.matchScreenshot('opened');
    });

    describe('Opened', () => {
      before(() => browser.url('/#/raw/tests/terra-toggle/toggle/open-toggle'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Animated', () => {
      before(() => browser.url('/#/raw/tests/terra-toggle/toggle/animated-toggle'));

      it('disables focusable elements when closed', () => {
        expect(browser.getCssProperty('#toggle', 'visibility').value).to.equal('hidden');
      });

      it('enables focusable elements when opened', () => {
        browser.click('#trigger-toggle'); // Open toggle
        browser.waitForVisible('#toggle', 1000);
        expect(browser.getCssProperty('#toggle', 'visibility').value).to.equal('visible');
      });
    });
  });
});
