"use strict";
// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeServer = void 0;
const autoguard = require("@joelek/ts-autoguard/dist/lib-server");
const shared = require("./index");
const makeServer = (routes, options) => {
    let endpoints = new Array();
    endpoints.push((raw, auxillary) => {
        let method = "GET";
        let matchers = new Array();
        matchers.push(new autoguard.api.DynamicRouteMatcher(0, Infinity, true, autoguard.guards.String));
        return {
            acceptsComponents: () => autoguard.api.acceptsComponents(raw.components, matchers),
            acceptsMethod: () => autoguard.api.acceptsMethod(raw.method, method),
            validateRequest: () => __awaiter(void 0, void 0, void 0, function* () {
                var _a, _b;
                let options = {};
                options["filename"] = matchers[0].getValue();
                options = Object.assign(Object.assign({}, options), autoguard.api.decodeUndeclaredParameters((_a = raw.parameters) !== null && _a !== void 0 ? _a : {}, Object.keys(options)));
                let headers = {};
                headers = Object.assign(Object.assign({}, headers), autoguard.api.decodeUndeclaredHeaders((_b = raw.headers) !== null && _b !== void 0 ? _b : {}, Object.keys(headers)));
                let payload = raw.payload;
                let guard = shared.Autoguard.Requests["getStaticContent"];
                let request = guard.as({ options, headers, payload }, "request");
                return {
                    handleRequest: () => __awaiter(void 0, void 0, void 0, function* () {
                        let response = yield routes["getStaticContent"](new autoguard.api.ClientRequest(request, true, auxillary));
                        return {
                            validateResponse: () => __awaiter(void 0, void 0, void 0, function* () {
                                var _c, _d, _e;
                                let guard = shared.Autoguard.Responses["getStaticContent"];
                                guard.as(response, "response");
                                let status = (_c = response.status) !== null && _c !== void 0 ? _c : 200;
                                let headers = new Array();
                                headers.push(...autoguard.api.encodeUndeclaredHeaderPairs((_d = response.headers) !== null && _d !== void 0 ? _d : {}, headers.map((header) => header[0])));
                                let payload = (_e = response.payload) !== null && _e !== void 0 ? _e : [];
                                return autoguard.api.finalizeResponse({ status, headers, payload }, "application/octet-stream");
                            })
                        };
                    })
                };
            })
        };
    });
    endpoints.push((raw, auxillary) => {
        let method = "HEAD";
        let matchers = new Array();
        matchers.push(new autoguard.api.DynamicRouteMatcher(0, Infinity, true, autoguard.guards.String));
        return {
            acceptsComponents: () => autoguard.api.acceptsComponents(raw.components, matchers),
            acceptsMethod: () => autoguard.api.acceptsMethod(raw.method, method),
            validateRequest: () => __awaiter(void 0, void 0, void 0, function* () {
                var _a, _b;
                let options = {};
                options["filename"] = matchers[0].getValue();
                options = Object.assign(Object.assign({}, options), autoguard.api.decodeUndeclaredParameters((_a = raw.parameters) !== null && _a !== void 0 ? _a : {}, Object.keys(options)));
                let headers = {};
                headers = Object.assign(Object.assign({}, headers), autoguard.api.decodeUndeclaredHeaders((_b = raw.headers) !== null && _b !== void 0 ? _b : {}, Object.keys(headers)));
                let payload = raw.payload;
                let guard = shared.Autoguard.Requests["headStaticContent"];
                let request = guard.as({ options, headers, payload }, "request");
                return {
                    handleRequest: () => __awaiter(void 0, void 0, void 0, function* () {
                        let response = yield routes["headStaticContent"](new autoguard.api.ClientRequest(request, true, auxillary));
                        return {
                            validateResponse: () => __awaiter(void 0, void 0, void 0, function* () {
                                var _c, _d, _e;
                                let guard = shared.Autoguard.Responses["headStaticContent"];
                                guard.as(response, "response");
                                let status = (_c = response.status) !== null && _c !== void 0 ? _c : 200;
                                let headers = new Array();
                                headers.push(...autoguard.api.encodeUndeclaredHeaderPairs((_d = response.headers) !== null && _d !== void 0 ? _d : {}, headers.map((header) => header[0])));
                                let payload = (_e = response.payload) !== null && _e !== void 0 ? _e : [];
                                return autoguard.api.finalizeResponse({ status, headers, payload }, "application/octet-stream");
                            })
                        };
                    })
                };
            })
        };
    });
    return (request, response) => autoguard.api.route(endpoints, request, response, options === null || options === void 0 ? void 0 : options.urlPrefix);
};
exports.makeServer = makeServer;
