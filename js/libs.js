/*
 * smoothscroll polyfill - v0.3.4
 * https://iamdustan.github.io/smoothscroll
 * 2016 (c) Dustan Kasten, Jeremias Menichelli - MIT License
 */
!function(o,t,l){"use strict";function e(){function e(o,t){this.scrollLeft=o,this.scrollTop=t}function r(o){return.5*(1-Math.cos(Math.PI*o))}function n(o){if("object"!=typeof o||null===o||o.behavior===l||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior not valid")}function c(l){var e,r,n;do l=l.parentNode,e=l===t.body,r=l.clientHeight<l.scrollHeight||l.clientWidth<l.scrollWidth,n="visible"===o.getComputedStyle(l,null).overflow;while(!e&&(!r||n));return e=r=n=null,l}function i(t){t.frame=o.requestAnimationFrame(i.bind(o,t));var l,e,n,c=u(),s=(c-t.startTime)/f;if(s=s>1?1:s,l=r(s),e=t.startX+(t.x-t.startX)*l,n=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,n),e===t.x&&n===t.y)return void o.cancelAnimationFrame(t.frame)}function s(l,r,n){var c,s,a,f,d,h=u();l===t.body?(c=o,s=o.scrollX||o.pageXOffset,a=o.scrollY||o.pageYOffset,f=p.scroll):(c=l,s=l.scrollLeft,a=l.scrollTop,f=e),d&&o.cancelAnimationFrame(d),i({scrollable:c,method:f,startTime:h,startX:s,startY:a,x:r,y:n,frame:d})}if(!("scrollBehavior"in t.documentElement.style)){var a=o.HTMLElement||o.Element,f=468,p={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,scrollIntoView:a.prototype.scrollIntoView},u=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now;o.scroll=o.scrollTo=function(){return n(arguments[0])?void p.scroll.call(o,arguments[0].left||arguments[0],arguments[0].top||arguments[1]):void s.call(o,t.body,~~arguments[0].left,~~arguments[0].top)},o.scrollBy=function(){return n(arguments[0])?void p.scrollBy.call(o,arguments[0].left||arguments[0],arguments[0].top||arguments[1]):void s.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset))},a.prototype.scrollIntoView=function(){if(n(arguments[0]))return void p.scrollIntoView.call(this,arguments[0]||!0);var l=c(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(s.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}}}"object"==typeof exports?module.exports={polyfill:e}:e()}(window,document);

/**
 * Number.isNaN polyfill
 */
if (!('isNaN' in Number)) {
  Number.isNaN = function(value) {
    return typeof value === "number" && isNaN(value);
  }
}
