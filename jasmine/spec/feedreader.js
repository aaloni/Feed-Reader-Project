/* feedreader.js
*
* This is the spec file that Jasmine will read and contains
* all of the tests that will be run against your application.
*/

/* We're placing all of our tests within the $() function,
* since some of these tests may require DOM elements. We want
* to ensure they don't run until the DOM is ready.
*/
$(function() {
  /* This is our first test suite - a test suite just contains
  * a related set of tests. This suite is all about the RSS
  * feeds definitions, the allFeeds variable in our application.
  */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
    * allFeeds variable has been defined and that it is not
    * empty. Experiment with this before you get started on
    * the rest of this project. What happens when you change
    * allFeeds in app.js to be an empty array and refresh the
    * page?
    */
    it('allFeeds are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* TODO: Write a test that loops through each feed
    * in the allFeeds object and ensures it has a URL defined
    * and that the URL is not empty.
    */
    it('allFeeds have URLs', function () {
      /*Loop to go through each feed*/
      for (let i = 0; i < allFeeds.length; i++) {
        /*Go through each feed to check url*/
        expect(allFeeds[i].url).toBeDefined();
        /*Check feed url length is not zero*/
        expect(allFeeds[i].url.length).not.toBe(0);
      }
    });

    /* TODO: Write a test that loops through each feed
    * in the allFeeds object and ensures it has a name defined
    * and that the name is not empty.
    */
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


  /* TODO: Write a new test suite named "The menu" */

  /* TODO: Write a test that ensures the menu element is
  * hidden by default. You'll have to analyze the HTML and
  * the CSS to determine how we're performing the
  * hiding/showing of the menu element.
  */

  /* TODO: Write a test that ensures the menu changes
  * visibility when the menu icon is clicked. This test
  * should have two expectations: does the menu display when
  * clicked and does it hide when clicked again.
  */

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

  /* TODO: Write a new test suite named "Initial Entries" */

  /* TODO: Write a test that ensures when the loadFeed
  * function is called and completes its work, there is at least
  * a single .entry element within the .feed container.
  * Remember, loadFeed() is asynchronous so this test will require
  * the use of Jasmine's beforeEach and asynchronous done() function.
  */
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

  /* TODO: Write a new test suite named "New Feed Selection" */

  /* TODO: Write a test that ensures when a new feed is loaded
  * by the loadFeed function that the content actually changes.
  * Remember, loadFeed() is asynchronous.
  */
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
