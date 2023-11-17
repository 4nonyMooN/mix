imgpre = new Image();
imgpre.scr = "https://cdn.prinsh.com/NathanPrinsley-effect/images/star_pink.gif";
imgpre.scr = "https://cdn.prinsh.com/NathanPrinsley-effect/images/star01.gif";

var bcx=0;
var bcy=0;
var naa=26;
var bex = 500;
var bey = 200;

bdx=new Array();
bdy=new Array();
ixa=new Array();
lya=new Array();
dotaa=new Array();
hosi=new Array();
var kaa;
var paa=0;
var bax,bay;


var jaa=0;
hosi[0]="https://cdn.prinsh.com/NathanPrinsley-effect/images/star_pink.gif";
for (maa=1;maa<(naa+1);maa++){
if (jaa == (hosi.length-1)) { jaa = 0; } else { jaa += 1; }
document.write("<div id=\"dotaa"+maa+"\" style=\"position:absolute; z-index:"+ maa +" ;filter:alpha;visibility:hidden; top:0px; left:0px;\"><img src=\"" + hosi[jaa] + "\" border=\"0\"></div>");
}
document.write("<div id=\"tama\" style=\"position:absolute; visibility:hidden; top:0px; left:0px;\"><img src=\"https://cdn.prinsh.com/NathanPrinsley-effect/images/star01.gif\"></div>");


var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();

setTimeout("HABABI3()",100);

function HABABI3() { 
clearTimeout(aa_timerID);
for (maa=1;maa<(naa+1);maa++){
      document.getElementById('dotaa'+maa).style.visibility='hidden';
}
      document.getElementById('tama').style.visibility='visible';
dbcH = document.body.clientHeight;
if(dbcH>1200){
wpy = document.documentElement.clientHeight;
wpx = document.documentElement.clientWidth-200;
}else{
wpy = document.body.clientHeight;
wpx = document.body.clientWidth-200;
}

dmbsT = document.body.scrollTop;
dmdEsT = document.documentElement.scrollTop;
if(dmbsT>=dmdEsT){
scy = document.body.scrollTop;
scx = document.body.scrollLeft;
}else{
scy = document.documentElement.scrollTop;
scx = document.documentElement.scrollLeft;
}
bby = scy+100+100*Math.random();
bbx = scx+50+wpx*Math.random();
bcy = wpy+scy-50;
bcx = bbx;
xco=0;
xyu=0;
HABABI4();
}
aa_timerID=0;

function HABABI4() { 
        document.getElementById('tama').style.visibility='visible';
if(bcy>bby){
        document.getElementById('tama').style.top  = bcy-10+"px";
        document.getElementById('tama').style.left = bcx+20+"px";
if(xco==0){xyu=xyu+1};
if(xco==1){xyu=xyu-1};
if(xyu>=3){xco=1};
if(xyu<=-3){xco=0};
bcx=bcx-xyu;
bcy=bcy-15;
aa_timerID=setTimeout("HABABI4()",50);
}else{
clearTimeout(aa_timerID);
HABABI2();
}
}

function HABABI2() { 
      document.getElementById('tama').style.visibility='hidden';
for (maa=1;maa<(naa+1);maa++){
if(maa<=(naa*12/26)){
bdx[maa]=bcx+1*Math.cos((maa-1)*2*3.14/12);
bdy[maa]=bcy-1*Math.sin((maa-1)*2*3.14/12);
ixa[maa]=bdx[maa]-bcx;
lya[maa]=bdy[maa]-bcy;
}else if(maa<=(naa*20/26)){
bdx[maa]=bcx+0.6*Math.cos((maa-1)*2*3.14/8);
bdy[maa]=bcy-0.6*Math.sin((maa-1)*2*3.14/8);
ixa[maa]=bdx[maa]-bcx;
lya[maa]=bdy[maa]-bcy;
}else{
bdx[maa]=bcx+0.3*Math.cos((maa-1)*2*3.14/6);
bdy[maa]=bcy-0.3*Math.sin((maa-1)*2*3.14/6);
ixa[maa]=bdx[maa]-bcx;
lya[maa]=bdy[maa]-bcy;
}
}
kaa=20;
paa=0;
HABABI();
}

function HABABI() {
paa=paa+1;
for (maa=1;maa<(naa+1);maa++){
        document.getElementById('dotaa'+maa).style.visibility='visible';
        document.getElementById('dotaa'+maa).style.top  = bdy[maa]+"px";
        document.getElementById('dotaa'+maa).style.left = bdx[maa]+"px";
if (appVersion.indexOf("msie") > -1) {
if(paa<40){
        document.getElementById('dotaa'+maa).filters.alpha.opacity=100;
}else if(paa<80){
        document.getElementById('dotaa'+maa).filters.alpha.opacity=100-50*Math.random();
}else{
dea=paa-80;
        document.getElementById('dotaa'+maa).filters.alpha.opacity=100-50*Math.random()-2.5*dea;
}
}
if(userAgent.indexOf("firefox") > -1){
if(paa<40){
        document.getElementById('dotaa'+maa).style.MozOpacity=1;
}else if(paa<80){
        document.getElementById('dotaa'+maa).style.MozOpacity=1-0.5*Math.random();
}else{
dea=paa-80;
        document.getElementById('dotaa'+maa).style.MozOpacity=1-0.5*Math.random()-0.025*dea;
}
}
bdx[maa]=bdx[maa]+kaa*ixa[maa];
bdy[maa]=bdy[maa]+kaa*lya[maa]+1+1*Math.random();
kaa=kaa*0.994;
}
aa_timerID=setTimeout("HABABI()",50);
if (paa>=120) {
paa=120;
for (maa=1;maa<(naa+1);maa++){
      document.getElementById('dotaa'+maa).style.visibility='hidden';
}
clearTimeout(aa_timerID);
HABABI3();
}
}