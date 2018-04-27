/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('DialogModal', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/dialog-modal/default-dialog-modal'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
