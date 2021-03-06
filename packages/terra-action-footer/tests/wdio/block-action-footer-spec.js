const { viewports } = require('./common');

describe('BlockActionFooter', () => {
  describe('No Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/without-actions-block-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('With Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/with-actions-block-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
