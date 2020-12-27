/*
---
demo: http://markdowncss.github.io/air/
source: https://github.com/markdowncss/air/blob/master/css/air.css
---
*/

export default `@media print{*,:after,:before{background:0 0!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}html{font-size:12px}@media screen and (min-width:32rem) and (max-width:48rem){html{font-size:15px}}@media screen and (min-width:48rem){html{font-size:16px}}body{line-height:1.85}.air-p,p{font-size:1rem;margin-bottom:1.3rem}.air-h1,.air-h2,.air-h3,.air-h4,h1,h2,h3,h4{margin:1.414rem 0 .5rem;font-weight:inherit;line-height:1.42}.air-h1,h1{margin-top:0;font-size:3.998rem}.air-h2,h2{font-size:2.827rem}.air-h3,h3{font-size:1.999rem}.air-h4,h4{font-size:1.414rem}.air-h5,h5{font-size:1.121rem}.air-h6,h6{font-size:.88rem}.air-small,small{font-size:.707em}canvas,iframe,img,select,svg,textarea,video{max-width:100%}body{color:#444;font-family:'Open Sans',Helvetica,sans-serif;font-weight:300;margin:6rem auto 1rem;max-width:48rem;text-align:center}img{border-radius:50%;height:200px;margin:0 auto;width:200px}a,a:visited{color:#3498db}a:active,a:focus,a:hover{color:#2980b9}pre{background-color:#fafafa;padding:1rem;text-align:left}blockquote{margin:0;border-left:5px solid #7a7a7a;font-style:italic;padding:1.33em;text-align:left}li,ol,ul{text-align:left}p{color:#777}`;