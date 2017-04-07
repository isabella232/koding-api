/**
 * Koding API
 * Koding API for integrating your application with Koding services
 *
 * OpenAPI spec version: 0.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KodingApi);
  }
}(this, function(expect, KodingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KodingApi.SocialChannelApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SocialChannelApi', function() {
    describe('acceptInvite', function() {
      it('should call acceptInvite successfully', function(done) {
        //uncomment below and update the code to test acceptInvite
        //instance.acceptInvite(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addParticipants', function() {
      it('should call addParticipants successfully', function(done) {
        //uncomment below and update the code to test addParticipants
        //instance.addParticipants(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('byId', function() {
      it('should call byId successfully', function(done) {
        //uncomment below and update the code to test byId
        //instance.byId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('byName', function() {
      it('should call byName successfully', function(done) {
        //uncomment below and update the code to test byName
        //instance.byName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('callDelete', function() {
      it('should call callDelete successfully', function(done) {
        //uncomment below and update the code to test callDelete
        //instance.callDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('create', function() {
      it('should call create successfully', function(done) {
        //uncomment below and update the code to test create
        //instance.create(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createChannelWithParticipants', function() {
      it('should call createChannelWithParticipants successfully', function(done) {
        //uncomment below and update the code to test createChannelWithParticipants
        //instance.createChannelWithParticipants(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchActivities', function() {
      it('should call fetchActivities successfully', function(done) {
        //uncomment below and update the code to test fetchActivities
        //instance.fetchActivities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchActivityCount', function() {
      it('should call fetchActivityCount successfully', function(done) {
        //uncomment below and update the code to test fetchActivityCount
        //instance.fetchActivityCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchChannels', function() {
      it('should call fetchChannels successfully', function(done) {
        //uncomment below and update the code to test fetchChannels
        //instance.fetchChannels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchFollowedChannelCount', function() {
      it('should call fetchFollowedChannelCount successfully', function(done) {
        //uncomment below and update the code to test fetchFollowedChannelCount
        //instance.fetchFollowedChannelCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchFollowedChannels', function() {
      it('should call fetchFollowedChannels successfully', function(done) {
        //uncomment below and update the code to test fetchFollowedChannels
        //instance.fetchFollowedChannels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchParticipants', function() {
      it('should call fetchParticipants successfully', function(done) {
        //uncomment below and update the code to test fetchParticipants
        //instance.fetchParticipants(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchPinnedMessages', function() {
      it('should call fetchPinnedMessages successfully', function(done) {
        //uncomment below and update the code to test fetchPinnedMessages
        //instance.fetchPinnedMessages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchPopularPosts', function() {
      it('should call fetchPopularPosts successfully', function(done) {
        //uncomment below and update the code to test fetchPopularPosts
        //instance.fetchPopularPosts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchPopularTopics', function() {
      it('should call fetchPopularTopics successfully', function(done) {
        //uncomment below and update the code to test fetchPopularTopics
        //instance.fetchPopularTopics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchProfileFeed', function() {
      it('should call fetchProfileFeed successfully', function(done) {
        //uncomment below and update the code to test fetchProfileFeed
        //instance.fetchProfileFeed(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchProfileFeedCount', function() {
      it('should call fetchProfileFeedCount successfully', function(done) {
        //uncomment below and update the code to test fetchProfileFeedCount
        //instance.fetchProfileFeedCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('glancePinnedPost', function() {
      it('should call glancePinnedPost successfully', function(done) {
        //uncomment below and update the code to test glancePinnedPost
        //instance.glancePinnedPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('leave', function() {
      it('should call leave successfully', function(done) {
        //uncomment below and update the code to test leave
        //instance.leave(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listParticipants', function() {
      it('should call listParticipants successfully', function(done) {
        //uncomment below and update the code to test listParticipants
        //instance.listParticipants(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pinMessage', function() {
      it('should call pinMessage successfully', function(done) {
        //uncomment below and update the code to test pinMessage
        //instance.pinMessage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rejectInvite', function() {
      it('should call rejectInvite successfully', function(done) {
        //uncomment below and update the code to test rejectInvite
        //instance.rejectInvite(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeParticipants', function() {
      it('should call removeParticipants successfully', function(done) {
        //uncomment below and update the code to test removeParticipants
        //instance.removeParticipants(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchTopics', function() {
      it('should call searchTopics successfully', function(done) {
        //uncomment below and update the code to test searchTopics
        //instance.searchTopics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unpinMessage', function() {
      it('should call unpinMessage successfully', function(done) {
        //uncomment below and update the code to test unpinMessage
        //instance.unpinMessage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update', function() {
      it('should call update successfully', function(done) {
        //uncomment below and update the code to test update
        //instance.update(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLastSeenTime', function() {
      it('should call updateLastSeenTime successfully', function(done) {
        //uncomment below and update the code to test updateLastSeenTime
        //instance.updateLastSeenTime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
