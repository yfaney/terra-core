const {
  withActionsThemeables,
  withoutActionsThemeables,
} = require('./common');

const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('small', 'medium');

viewports.forEach((viewport) => {
  describe('BlockActionFooter', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('No Actions', () => {
      beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/without-actions-action-footer-container'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty(withoutActionsThemeables);
    });

    describe('With Actions', () => {
      beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/with-actions-action-footer-container'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty(withActionsThemeables);
    });
  });
});
