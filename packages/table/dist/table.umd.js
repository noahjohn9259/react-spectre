!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("react"),require("prop-types"),require("classnames")):"function"==typeof define&&define.amd?define(["exports","react","prop-types","classnames"],r):r((e.ReactSpectre=e.ReactSpectre||{},e.ReactSpectre.Packages={}),e.React,e.PropTypes,e.classnames)}(this,function(e,r,a,t){"use strict";r=r&&r.hasOwnProperty("default")?r.default:r,a=a&&a.hasOwnProperty("default")?a.default:a,t=t&&t.hasOwnProperty("default")?t.default:t;var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},c=function(e,r){var a={};for(var t in e)r.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t]);return a},l=function(e){var a=e.children,l=c(e,["children"]),o=l.className,s=l.striped,i=l.hover,p=l.scroll,d=c(l,["className","striped","hover","scroll"]),u=t("table",o,{"table-striped":s,"table-hover":i,"table-scroll":p});return r.createElement("table",n({},d,{className:u}),a)};l.propTypes={children:a.any,className:a.any,striped:a.bool,hover:a.bool,scroll:a.bool};var o=function(e){var a=e.children,t=c(e,["children"]);return r.createElement("thead",t,a)};o.propTypes={children:a.any};var s=function(e){var a=e.children,t=c(e,["children"]);return r.createElement("tbody",t,a)};s.propTypes={children:a.any};var i=function(e){var a=e.children,t=c(e,["children"]),l=t.className,o=t.active,s=c(t,["className","active"]),i=i(l,{active:o});return r.createElement("tr",n({},s,{className:i}),a)};i.propTypes={children:a.any,className:a.any,active:a.bool};var p=function(e){var a=e.children,t=c(e,["children"]);return r.createElement("th",t,a)};p.propTypes={children:a.any};var d=function(e){var a=e.children,t=c(e,["children"]);return r.createElement("td",t,a)};d.propTypes={children:a.any},l.Header=o,l.Body=s,l.Row=i,l.Heading=p,l.Cell=d,e.Table=l,e.Header=o,e.Body=s,e.Row=i,e.Heading=p,e.Cell=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=table.umd.js.map