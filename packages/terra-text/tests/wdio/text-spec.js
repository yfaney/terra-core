const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('medium');

viewports.forEach((viewport) => {
  describe('Text', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('Default', () => {
      before(() => browser.url('/#/raw/tests/terra-text/text/default-text'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Color', () => {
      before(() => browser.url('/#/raw/tests/terra-text/text/text-color'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Italics', () => {
      before(() => browser.url('/#/raw/tests/terra-text/text/text-italics'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Font Size', () => {
      before(() => browser.url('/#/raw/tests/terra-text/text/text-font-size'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Visually Hidden', () => {
      before(() => browser.url('/#/raw/tests/terra-text/text/text-visually-hidden'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Visual Props', () => {
      before(() => browser.url('/#/raw/tests/terra-text/text/text-visual-props'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Weight', () => {
      before(() => browser.url('/#/raw/tests/terra-text/text/text-weight'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Line-height calculated on text font size when parent has a different font size.', () => {
      before(() => browser.url('/#/raw/tests/terra-text/text/text-line-height'));
      Terra.should.matchScreenshot();
    });
  });
});
