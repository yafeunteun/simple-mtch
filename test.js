var assert = require('assert');
var userMatching = require('./user-matching');

describe('Returns the interests given a user id', function() {
  it('Returns the correct set of interests for id=3', function(){
    assert.deepEqual(userMatching.interests_by_user_id(3), ["statistics", "regression", "probability"])
  });
});



