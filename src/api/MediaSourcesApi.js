/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.19
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
    define(['ApiClient', 'model/MediaSource', 'model/MediaFiles', 'model/MediaSources', 'model/MediaFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/MediaSource'), require('../model/MediaFiles'), require('../model/MediaSources'), require('../model/MediaFile'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.MediaSourcesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.MediaSource, root.KinowJavascriptSdk.MediaFiles, root.KinowJavascriptSdk.MediaSources, root.KinowJavascriptSdk.MediaFile);
  }
}(this, function(ApiClient, MediaSource, MediaFiles, MediaSources, MediaFile) {
  'use strict';

  /**
   * MediaSources service.
   * @module api/MediaSourcesApi
   * @version 1.3.19
   */

  /**
   * Constructs a new MediaSourcesApi. 
   * @alias module:api/MediaSourcesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get media source
     * @param {Integer} sourceId Media source ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MediaSource} and HTTP response
     */
    this.getMediaSourceWithHttpInfo = function(sourceId) {
      var postBody = null;

      // verify the required parameter 'sourceId' is set
      if (sourceId === undefined || sourceId === null) {
        throw new Error("Missing the required parameter 'sourceId' when calling getMediaSource");
      }


      var pathParams = {
        'source_id': sourceId
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
      var returnType = MediaSource;

      return this.apiClient.callApi(
        '/media-sources/{source_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get media source
     * @param {Integer} sourceId Media source ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MediaSource}
     */
    this.getMediaSource = function(sourceId) {
      return this.getMediaSourceWithHttpInfo(sourceId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get media source files
     * @param {Integer} sourceId Media source ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters       &#x60;&#x60;&#x60;      name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt      _______________        {      \&quot;name\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      },      \&quot;date_add\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;lt\&quot;      }      } &#x60;&#x60;&#x60;Operator can be strict, contains, gt or lt.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MediaFiles} and HTTP response
     */
    this.getMediaSourceFilesWithHttpInfo = function(sourceId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sourceId' is set
      if (sourceId === undefined || sourceId === null) {
        throw new Error("Missing the required parameter 'sourceId' when calling getMediaSourceFiles");
      }


      var pathParams = {
        'source_id': sourceId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'filters': opts['filters'],
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
      var returnType = MediaFiles;

      return this.apiClient.callApi(
        '/media-sources/{source_id}/files', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get media source files
     * @param {Integer} sourceId Media source ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters       &#x60;&#x60;&#x60;      name[value]&#x3D;string&amp;name[operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt      _______________        {      \&quot;name\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      },      \&quot;date_add\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;lt\&quot;      }      } &#x60;&#x60;&#x60;Operator can be strict, contains, gt or lt.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MediaFiles}
     */
    this.getMediaSourceFiles = function(sourceId, opts) {
      return this.getMediaSourceFilesWithHttpInfo(sourceId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get media source list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MediaSources} and HTTP response
     */
    this.getMediaSourcesWithHttpInfo = function(opts) {
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
      var returnType = MediaSources;

      return this.apiClient.callApi(
        '/media-sources', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get media source list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MediaSources}
     */
    this.getMediaSources = function(opts) {
      return this.getMediaSourcesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Post media file
     * @param {Integer} sourceId Media source ID to fetch
     * @param {module:model/MediaFile} body Create MediaFile object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MediaFile} and HTTP response
     */
    this.postMediaSourceFilesWithHttpInfo = function(sourceId, body) {
      var postBody = body;

      // verify the required parameter 'sourceId' is set
      if (sourceId === undefined || sourceId === null) {
        throw new Error("Missing the required parameter 'sourceId' when calling postMediaSourceFiles");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postMediaSourceFiles");
      }


      var pathParams = {
        'source_id': sourceId
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
      var returnType = MediaFile;

      return this.apiClient.callApi(
        '/media-sources/{source_id}/files', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Post media file
     * @param {Integer} sourceId Media source ID to fetch
     * @param {module:model/MediaFile} body Create MediaFile object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MediaFile}
     */
    this.postMediaSourceFiles = function(sourceId, body) {
      return this.postMediaSourceFilesWithHttpInfo(sourceId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
