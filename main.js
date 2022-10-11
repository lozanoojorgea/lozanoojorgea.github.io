var beforePrint = function() { $("details").attr('open', ''); };
var afterPrint = function() { $("details").removeAttr('open'); };
if (window.matchMedia) { var mediaQueryList = window.matchMedia('print'); mediaQueryList.addListener(function(mql) { if (mql.matches) { beforePrint(); } else { afterPrint(); } }); }
window.onbeforeprint = beforePrint;
window.onafterprint = afterPrint;
var encEmail = "bG96YW5vLm8uam9yZ2UuYUBnbWFpbC5jb20=";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));