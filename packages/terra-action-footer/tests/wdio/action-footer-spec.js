const {
  withActionsThemeables,
  withoutActionsThemeables,
} = require('./common');

const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('small', 'medium');

viewports.forEach((viewport) => {
  describe('ActionFooter', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('Empty', () => {
      beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/empty-action-footer'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty(withoutActionsThemeables);
    });

    describe('Multiple End Actions', () => {
      before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-end-action-footer'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Multiple Start Actions', () => {
      before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-start-action-footer'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Multiple Start and End Actions', () => {
      beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-start-end-action-footer'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty(withActionsThemeables);
    });

    describe('Single End Action', () => {
      before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/single-end-action-footer'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Single Start Action', () => {
      before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/single-start-action-footer'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Single Start and End Action', () => {
      before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/single-start-end-action-footer'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });
  });
});
