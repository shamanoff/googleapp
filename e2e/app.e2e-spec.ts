import { GoogleappPage } from './app.po';

describe('googleapp App', () => {
  let page: GoogleappPage;

  beforeEach(() => {
    page = new GoogleappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
