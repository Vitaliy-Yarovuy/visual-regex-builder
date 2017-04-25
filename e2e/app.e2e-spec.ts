import { VisualRegexBuilderPage } from './app.po';

describe('visual-regex-builder App', () => {
  let page: VisualRegexBuilderPage;

  beforeEach(() => {
    page = new VisualRegexBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
