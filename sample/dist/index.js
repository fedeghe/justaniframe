'use strict';
/*

justaniframe
v. 0.0.0

*/
var justaniframe=function(){function t(t,e,r,u){u=u||{};var o=document.createElement("iframe");return o.setAttribute("width",t),o.setAttribute("height",e),o.setAttribute("frameBorder",0),"allowFullscreen"in u&&(o.setAttribute("allowfullscreen","true"),o.setAttribute("webkitallowfullscreen","true"),o.setAttribute("mozallowfullscreen","true")),"onload"in u&&(o.onload=u.onload),o.setAttribute("src",r),o}return window.MsgHub=window.MsgHub||{},{iframe0:t}}();"object"==typeof exports&&(module.exports=justaniframe);