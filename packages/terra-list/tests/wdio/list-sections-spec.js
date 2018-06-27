/* global browser, Terra */

describe('List with Sections', () => {
  describe('Single Selectable List with Sections', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-list/list/single-select-list/single-select-sections'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-list-section-header-padding-end': '100px',
        '--terra-list-section-header-padding-start': '100px',
        '--terra-list-section-header-background': 'blue',
        '--terra-list-section-header-border-bottom': '10px dashed blue',
        '--terra-list-section-header-border-left': '10px dashed blue',
        '--terra-list-section-header-border-right': '10px dashed blue',
        '--terra-list-section-header-border-top': '10px dashed blue',
        '--terra-list-section-header-box-shadow': 'inset 5px 5px 5px blue',
        '--terra-list-section-header-color': 'blue',
        '--terra-list-section-header-line-height': '50px',
        '--terra-list-section-header-padding-bottom': '100px',
        '--terra-list-section-header-padding-top': '100px',
        '--terra-list-section-header-font-weight': '700',
        '--terra-list-section-header-text-transform': 'uppercase',
        '--terra-list-section-header-font-size': '10rem',
      },
    });
  });

  describe('Single Selectable List Click Header', () => {
    browser.url('/#/raw/tests/terra-list/list/single-select-list/single-select-sections');
    it('Collapses the first Header on button click', () => {
      browser.click('#Header1');
    });
    Terra.should.matchScreenshot('first section collapsed');

    it('Expands the first Header on button click', () => {
      browser.click('#Header1');
      Terra.should.matchScreenshot('first section expanded');
      Terra.should.beAccessible();
    });
  });

  describe('Single Selectable List Keyboard Enter Key', () => {
    browser.url('/#/raw/tests/terra-list/list/single-select-list/single-select-sections');
    it('collapses the first section', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('first section collapsed');
    it('expand the first section', () => {
      browser.keys(['Enter']);
    });
    Terra.should.matchScreenshot('first section expanded');
  });

  describe('Single Selectable List Keyboard Space Key', () => {
    browser.url('/#/raw/tests/terra-list/list/single-select-list/single-select-sections');
    it('collapses the first section', () => {
      browser.keys(['Tab', 'Space']);
    });
    Terra.should.matchScreenshot('first section collapsed');
    it('expand the first section', () => {
      browser.keys(['Space']);
    });
    Terra.should.matchScreenshot('first section expanded');
  });

  describe('Multi Selectable List with Sections', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/multi-select-sections'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-list-section-header-padding-end': '100px',
        '--terra-list-section-header-padding-start': '100px',
        '--terra-list-section-header-background': 'blue',
        '--terra-list-section-header-border-bottom': '10px dashed blue',
        '--terra-list-section-header-border-left': '10px dashed blue',
        '--terra-list-section-header-border-right': '10px dashed blue',
        '--terra-list-section-header-border-top': '10px dashed blue',
        '--terra-list-section-header-box-shadow': 'inset 5px 5px 5px blue',
        '--terra-list-section-header-color': 'blue',
        '--terra-list-section-header-line-height': '50px',
        '--terra-list-section-header-padding-bottom': '100px',
        '--terra-list-section-header-padding-top': '100px',
        '--terra-list-section-header-font-weight': '700',
        '--terra-list-section-header-text-transform': 'uppercase',
        '--terra-list-section-header-font-size': '10rem',
      },
    });
  });

  describe('Multi Selectable List Click Header', () => {
    browser.url('/#/raw/tests/terra-list/list/single-select-list/multi-select-sections');
    it('Collapses the first Header', () => {
      browser.click('#Header1');
    });
    Terra.should.matchScreenshot('first section collapsed on button click');

    it('Expands the first Header', () => {
      browser.click('#Header1');
    });
    Terra.should.matchScreenshot('first section collapsed on button click');
    Terra.should.beAccessible();
  });

  describe('Multi Selectable List Keyboard Enter Key', () => {
    browser.url('/#/raw/tests/terra-list/list/multi-select-list/multi-select-sections');
    it('collapses the first section', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('first section collapsed');
    it('expand the first section', () => {
      browser.keys(['Enter']);
    });
    Terra.should.matchScreenshot('first section expanded');
  });

  describe('Multi Selectable List Keyboard Space Key', () => {
    browser.url('/#/raw/tests/terra-list/list/multi-select-list/multi-select-sections');
    it('collapses the first section', () => {
      browser.keys(['Tab', 'Space']);
    });
    Terra.should.matchScreenshot('first section collapsed');
    it('expand the first section', () => {
      browser.keys(['Space']);
    });
    Terra.should.matchScreenshot('first section expanded');
  });
});
