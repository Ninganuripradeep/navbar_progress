const container=document.getElementById('js-container');
const heighlight=document.getElementById('js-highlight');
var containerHeight;
var containerPos;
window.onscroll=function(){
    containerHeight=container.offsetHeight-window.innerHeight;
    containerPos=container.getBoundingClientRect();//we get the position where the actual container is present
    diff=containerHeight+containerPos.top;
    progressPercentage=diff/containerHeight*100;
    cssWidth=Math.floor(100-progressPercentage);
    heighlight.style.width=cssWidth+"%";

}