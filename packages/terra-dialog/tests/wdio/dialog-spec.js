/* global browser, before, Terra */
const viewports = Terra.viewports('tiny', 'large');

viewports.forEach((viewport) => {
  describe('Dialog', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Default', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-dialog/dialog/default-dialog');
      });
      beforeEach(() => browser.refresh());

      Terra.should.matchScreenshot({ selector: '#dialog' });
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#dialog',
        properties: {
          // Header themeable variables
          '--terra-dialog-header-background-color': 'purple',
          '--terra-dialog-header-bottom-border': '5px dotted pink',
          '--terra-dialog-header-foreground-color': 'blue',
          '--terra-dialog-header-font-size': '20px',
          '--terra-dialog-header-padding': '15px',
        },
      });
    });

    describe('props - isFooterStyled', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-dialog/dialog/styled-footer-dialog');
      });
      beforeEach(() => browser.refresh());

      Terra.should.matchScreenshot({ selector: '#dialog' });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed-footer',
        selector: '#dialog',
        properties: {
          // Footer themeable variables
          '--terra-dialog-footer-background-color': 'green',
          '--terra-dialog-footer-top-border': '3px dashed aqua',
          '--terra-dialog-footer-padding': '10px',
        },
      });
    });
  });
});
