
import { linkRefresher } from './src.js';

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat([
  (hook, vm) => hook.doneEach(linkRefresher)
]);
