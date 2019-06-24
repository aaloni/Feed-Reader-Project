
$(function() {
  describe('RSS Feeds', function() {  
    it('allFeeds are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
    it('allFeeds have URLs', function () {
      /*Loop to go through each feed*/
      for (let i = 0; i < allFeeds.length; i++) {
        /*Go through each feed to check url*/
        expect(allFeeds[i].url).toBeDefined();
        /*Check feed url length is not zero*/
        expect(allFeeds[i].url.length).not.toBe(0);
      }
    });
    it('allFeeds have names', function () {
      /*Loop to go through each feed*/
      for (let i = 0; i < allFeeds.length; i++) {
        /*Go through each feed to check name*/
        expect(allFeeds[i].name).toBeDefined();
        /*Check feed name length is not zero*/
        expect(allFeeds[i].name.length).not.toBe(0);
      }
    });
  });
  /*Test suite named "The menu" */
  describe('The Menu', function () {

    /*Check if hidden menu by default*/
    it('The menu is hidden', function () {
      /*The body should have "menu-hidden" class*/
      expect($('body').hasClass('menu-hidden')).toEqual(true);
    });

    it('Toggle on click', function () {
      /*If click on "menu-icon-link" show menu*/
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);
      /*If click on "menu-icon-link" hide menu*/
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });
  describe('Initial Entries', function () {

    beforeEach(function (done) {
      loadFeed(0, function () {
        done();
      });
    });

    it('loadFeed is called at least a single', function () {
      expect($('.feed .entry').length).toBeGreaterThan(0);
    });
  });
  describe('New Feed Selection', function() {
    /*variables to keep the 1st and 2nd feeds*/
    let feed1, feed2;
    beforeEach(function(done) {
      /*1st Load feed*/
      loadFeed(1, function() {
        feed1 = $('.feed').html();
        /*2nd Load feed*/
        loadFeed(2, function() {
          done();
        });
      });
    });
    afterEach(function() {
      loadFeed(0);
    });
    /*Check for changes*/
    it('New feed is loaded', function() {
      feed2 = $('.feed').html();
      expect(feed1).not.toEqual(feed2);
    });
  });

}());
