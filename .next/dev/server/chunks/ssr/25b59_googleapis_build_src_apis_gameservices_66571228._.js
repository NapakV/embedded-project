module.exports = [
"[project]/embed/project/embeddedproj/node_modules/googleapis/build/src/apis/gameservices/v1.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.gameservices_v1 = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable @typescript-eslint/no-empty-interface */ /* eslint-disable @typescript-eslint/no-namespace */ /* eslint-disable no-irregular-whitespace */ const googleapis_common_1 = __turbopack_context__.r("[project]/embed/project/embeddedproj/node_modules/googleapis-common/build/src/index.js [app-ssr] (ecmascript)");
var gameservices_v1;
(function(gameservices_v1) {
    /**
     * Game Services API
     *
     * Deploy and manage infrastructure for global multiplayer gaming experiences.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1');
     * ```
     */ class Gameservices {
        constructor(options, google){
            this.context = {
                _options: options || {},
                google
            };
            this.projects = new Resource$Projects(this.context);
        }
    }
    gameservices_v1.Gameservices = Gameservices;
    class Resource$Projects {
        constructor(context){
            this.context = context;
            this.locations = new Resource$Projects$Locations(this.context);
        }
    }
    gameservices_v1.Resource$Projects = Resource$Projects;
    class Resource$Projects$Locations {
        constructor(context){
            this.context = context;
            this.gameServerDeployments = new Resource$Projects$Locations$Gameserverdeployments(this.context);
            this.operations = new Resource$Projects$Locations$Operations(this.context);
            this.realms = new Resource$Projects$Locations$Realms(this.context);
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}/locations').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    gameservices_v1.Resource$Projects$Locations = Resource$Projects$Locations;
    class Resource$Projects$Locations$Gameserverdeployments {
        constructor(context){
            this.context = context;
            this.configs = new Resource$Projects$Locations$Gameserverdeployments$Configs(this.context);
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+parent}/gameServerDeployments').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        fetchDeploymentState(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}:fetchDeploymentState').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        getIamPolicy(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'resource'
                ],
                pathParams: [
                    'resource'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        getRollout(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}/rollout').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+parent}/gameServerDeployments').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        previewRollout(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}/rollout:preview').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        setIamPolicy(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'resource'
                ],
                pathParams: [
                    'resource'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        testIamPermissions(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'resource'
                ],
                pathParams: [
                    'resource'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        updateRollout(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}/rollout').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    gameservices_v1.Resource$Projects$Locations$Gameserverdeployments = Resource$Projects$Locations$Gameserverdeployments;
    class Resource$Projects$Locations$Gameserverdeployments$Configs {
        constructor(context){
            this.context = context;
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+parent}/configs').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+parent}/configs').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    gameservices_v1.Resource$Projects$Locations$Gameserverdeployments$Configs = Resource$Projects$Locations$Gameserverdeployments$Configs;
    class Resource$Projects$Locations$Operations {
        constructor(context){
            this.context = context;
        }
        cancel(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}/operations').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    gameservices_v1.Resource$Projects$Locations$Operations = Resource$Projects$Locations$Operations;
    class Resource$Projects$Locations$Realms {
        constructor(context){
            this.context = context;
            this.gameServerClusters = new Resource$Projects$Locations$Realms$Gameserverclusters(this.context);
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+parent}/realms').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+parent}/realms').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        previewUpdate(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}:previewUpdate').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    gameservices_v1.Resource$Projects$Locations$Realms = Resource$Projects$Locations$Realms;
    class Resource$Projects$Locations$Realms$Gameserverclusters {
        constructor(context){
            this.context = context;
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+parent}/gameServerClusters').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+parent}/gameServerClusters').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        previewCreate(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+parent}/gameServerClusters:previewCreate').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        previewDelete(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}:previewDelete').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        previewUpdate(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}:previewUpdate').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    gameservices_v1.Resource$Projects$Locations$Realms$Gameserverclusters = Resource$Projects$Locations$Realms$Gameserverclusters;
})(gameservices_v1 = exports.gameservices_v1 || (exports.gameservices_v1 = {}));
}),
"[project]/embed/project/embeddedproj/node_modules/googleapis/build/src/apis/gameservices/v1beta.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.gameservices_v1beta = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable @typescript-eslint/no-empty-interface */ /* eslint-disable @typescript-eslint/no-namespace */ /* eslint-disable no-irregular-whitespace */ const googleapis_common_1 = __turbopack_context__.r("[project]/embed/project/embeddedproj/node_modules/googleapis-common/build/src/index.js [app-ssr] (ecmascript)");
var gameservices_v1beta;
(function(gameservices_v1beta) {
    /**
     * Game Services API
     *
     * Deploy and manage infrastructure for global multiplayer gaming experiences.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const gameservices = google.gameservices('v1beta');
     * ```
     */ class Gameservices {
        constructor(options, google){
            this.context = {
                _options: options || {},
                google
            };
            this.projects = new Resource$Projects(this.context);
        }
    }
    gameservices_v1beta.Gameservices = Gameservices;
    class Resource$Projects {
        constructor(context){
            this.context = context;
            this.locations = new Resource$Projects$Locations(this.context);
        }
    }
    gameservices_v1beta.Resource$Projects = Resource$Projects;
    class Resource$Projects$Locations {
        constructor(context){
            this.context = context;
            this.gameServerDeployments = new Resource$Projects$Locations$Gameserverdeployments(this.context);
            this.operations = new Resource$Projects$Locations$Operations(this.context);
            this.realms = new Resource$Projects$Locations$Realms(this.context);
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}/locations').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    gameservices_v1beta.Resource$Projects$Locations = Resource$Projects$Locations;
    class Resource$Projects$Locations$Gameserverdeployments {
        constructor(context){
            this.context = context;
            this.configs = new Resource$Projects$Locations$Gameserverdeployments$Configs(this.context);
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+parent}/gameServerDeployments').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        fetchDeploymentState(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}:fetchDeploymentState').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        getIamPolicy(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'resource'
                ],
                pathParams: [
                    'resource'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        getRollout(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}/rollout').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+parent}/gameServerDeployments').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        previewRollout(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}/rollout:preview').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        setIamPolicy(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'resource'
                ],
                pathParams: [
                    'resource'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        testIamPermissions(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'resource'
                ],
                pathParams: [
                    'resource'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        updateRollout(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}/rollout').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    gameservices_v1beta.Resource$Projects$Locations$Gameserverdeployments = Resource$Projects$Locations$Gameserverdeployments;
    class Resource$Projects$Locations$Gameserverdeployments$Configs {
        constructor(context){
            this.context = context;
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+parent}/configs').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+parent}/configs').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    gameservices_v1beta.Resource$Projects$Locations$Gameserverdeployments$Configs = Resource$Projects$Locations$Gameserverdeployments$Configs;
    class Resource$Projects$Locations$Operations {
        constructor(context){
            this.context = context;
        }
        cancel(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}/operations').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    gameservices_v1beta.Resource$Projects$Locations$Operations = Resource$Projects$Locations$Operations;
    class Resource$Projects$Locations$Realms {
        constructor(context){
            this.context = context;
            this.gameServerClusters = new Resource$Projects$Locations$Realms$Gameserverclusters(this.context);
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+parent}/realms').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+parent}/realms').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        previewUpdate(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}:previewUpdate').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    gameservices_v1beta.Resource$Projects$Locations$Realms = Resource$Projects$Locations$Realms;
    class Resource$Projects$Locations$Realms$Gameserverclusters {
        constructor(context){
            this.context = context;
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+parent}/gameServerClusters').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+parent}/gameServerClusters').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        previewCreate(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+parent}/gameServerClusters:previewCreate').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [
                    'parent'
                ],
                pathParams: [
                    'parent'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        previewDelete(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}:previewDelete').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        previewUpdate(paramsOrCallback, optionsOrCallback, callback) {
            let params = paramsOrCallback || {};
            let options = optionsOrCallback || {};
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{+name}:previewUpdate').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params,
                requiredParams: [
                    'name'
                ],
                pathParams: [
                    'name'
                ],
                context: this.context
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            } else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    gameservices_v1beta.Resource$Projects$Locations$Realms$Gameserverclusters = Resource$Projects$Locations$Realms$Gameserverclusters;
})(gameservices_v1beta = exports.gameservices_v1beta || (exports.gameservices_v1beta = {}));
}),
"[project]/embed/project/embeddedproj/node_modules/googleapis/build/src/apis/gameservices/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthPlus = exports.gameservices_v1beta = exports.gameservices_v1 = exports.auth = exports.gameservices = exports.VERSIONS = void 0;
/*! THIS FILE IS AUTO-GENERATED */ const googleapis_common_1 = __turbopack_context__.r("[project]/embed/project/embeddedproj/node_modules/googleapis-common/build/src/index.js [app-ssr] (ecmascript)");
const v1_1 = __turbopack_context__.r("[project]/embed/project/embeddedproj/node_modules/googleapis/build/src/apis/gameservices/v1.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "gameservices_v1", {
    enumerable: true,
    get: function() {
        return v1_1.gameservices_v1;
    }
});
const v1beta_1 = __turbopack_context__.r("[project]/embed/project/embeddedproj/node_modules/googleapis/build/src/apis/gameservices/v1beta.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "gameservices_v1beta", {
    enumerable: true,
    get: function() {
        return v1beta_1.gameservices_v1beta;
    }
});
exports.VERSIONS = {
    v1: v1_1.gameservices_v1.Gameservices,
    v1beta: v1beta_1.gameservices_v1beta.Gameservices
};
function gameservices(versionOrOptions) {
    return (0, googleapis_common_1.getAPI)('gameservices', versionOrOptions, exports.VERSIONS, this);
}
exports.gameservices = gameservices;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
var googleapis_common_2 = __turbopack_context__.r("[project]/embed/project/embeddedproj/node_modules/googleapis-common/build/src/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "AuthPlus", {
    enumerable: true,
    get: function() {
        return googleapis_common_2.AuthPlus;
    }
});
}),
];

//# sourceMappingURL=25b59_googleapis_build_src_apis_gameservices_66571228._.js.map