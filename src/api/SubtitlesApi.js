/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.0.72
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
    define(['ApiClient', 'model/Subtitle', 'model/Subtitles'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Subtitle'), require('../model/Subtitles'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.SubtitlesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Subtitle, root.KinowJavascriptSdk.Subtitles);
  }
}(this, function(ApiClient, Subtitle, Subtitles) {
  'use strict';

  /**
   * Subtitles service.
   * @module api/SubtitlesApi
   * @version 1.0.72
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
     * Get Subtitle
     * @param {Integer} subtitleId ID of the product to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Subtitle} and HTTP response
     */
    this.getSubtitleWithHttpInfo = function(subtitleId) {
      var postBody = null;

      // verify the required parameter 'subtitleId' is set
      if (subtitleId === undefined || subtitleId === null) {
        throw new Error("Missing the required parameter 'subtitleId' when calling getSubtitle");
      }


      var pathParams = {
        'subtitle_id': subtitleId
      };
      var queryParams = {
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
      var returnType = Subtitle;

      return this.apiClient.callApi(
        '/subtitles/{subtitle_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Subtitle
     * @param {Integer} subtitleId ID of the product to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Subtitle}
     */
    this.getSubtitle = function(subtitleId) {
      return this.getSubtitleWithHttpInfo(subtitleId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Subtitles list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Subtitles} and HTTP response
     */
    this.getSubtitlesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = Subtitles;

      return this.apiClient.callApi(
        '/subtitles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Subtitles list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Subtitles}
     */
    this.getSubtitles = function(opts) {
      return this.getSubtitlesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get video subtitles
     * @param {Integer} videoId ID of the video to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Subtitles} and HTTP response
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
      var returnType = Subtitles;

      return this.apiClient.callApi(
        '/videos/{video_id}/subtitles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get video subtitles
     * @param {Integer} videoId ID of the video to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Subtitles}
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
