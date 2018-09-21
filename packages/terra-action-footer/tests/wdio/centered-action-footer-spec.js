const {
  withActionsThemeables,
  withoutActionsThemeables,
} = require('./common');

const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('small', 'medium');

viewports.forEach((viewport) => {
  describe('CenteredActionFooter', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);
 
    describe('Empty', () => {
      beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/empty-centered-action-footer'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty(withoutActionsThemeables);
    });

    describe('Multiple Actions', () => {
      beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-action-centered-action-footer'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty(withActionsThemeables);
    });

    describe('Single Action', () => {
      before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/single-action-centered-action-footer'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });
  });
});
