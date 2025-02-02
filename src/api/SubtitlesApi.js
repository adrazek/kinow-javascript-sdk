/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.0.79
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/VideoSubtitlesResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VideoSubtitlesResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.SubtitlesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.VideoSubtitlesResponse);
  }
}(this, function(ApiClient, VideoSubtitlesResponse) {
  'use strict';

  /**
   * Subtitles service.
   * @module api/SubtitlesApi
   * @version 1.0.79
   */

  /**
   * Constructs a new SubtitlesApi. 
   * @alias module:api/SubtitlesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get subtitles of a video
     * @param {Integer} videoId Video ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VideoSubtitlesResponse} and HTTP response
     */
    this.getVideoSubtitlesWithHttpInfo = function(videoId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling getVideoSubtitles");
      }


      var pathParams = {
        'video_id': videoId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = VideoSubtitlesResponse;

      return this.apiClient.callApi(
        '/videos/{video_id}/subtitles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get subtitles of a video
     * @param {Integer} videoId Video ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VideoSubtitlesResponse}
     */
    this.getVideoSubtitles = function(videoId, opts) {
      return this.getVideoSubtitlesWithHttpInfo(videoId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
