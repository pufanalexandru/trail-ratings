import { TrailRatingsPage } from './app.po';

describe('trail-ratings App', function() {
  let page: TrailRatingsPage;

  beforeEach(() => {
    page = new TrailRatingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
