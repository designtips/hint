import * as appInsightsUtils from './app-insights';
import { asyncTry } from './async-wrapper';
import * as caniuseUtils from './caniuse';
import * as configStoreUtils from './config-store';
import * as contentTypeUtils from './content-type';
import { debug } from './debug';
import * as fsUtils from './fs';
import * as loggingUtils from './logging';
import * as miscUtils from './misc';
import * as networkUtils from './network';
import * as npmUtils from './npm';
import * as pkgs from './packages';
import * as testUtils from './test';
import * as domUtils from './dom';

export * from './types/http-header';
export * from './types/npm';
export * from './types/html';
export * from './types/problem-location';
export * from './dom/html';

export const packages = pkgs;
export const fs = fsUtils;
export const misc = miscUtils;
export const network = networkUtils;
export const logger = loggingUtils;
export const npm = npmUtils;
export const appInsights = appInsightsUtils;
export const caniuse = caniuseUtils;
export const configStore = configStoreUtils;
export const contentType = contentTypeUtils;
export const test = testUtils;
export const dom = domUtils;

export {
    asyncTry,
    debug
};
