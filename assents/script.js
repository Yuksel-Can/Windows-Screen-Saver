var active = document.getElementById("active");

active.style.width="200px";
active.style.height="200px";
active.style.position="fixed";
active.style.top="1px";
active.style.left="1px";
    
var isReverseTop=false;
var isReverseLeft=false;
function animate(element, top, left){
    var topOfElement = parseInt(element.style.top.split("px")[0]);    
    if(topOfElement >= ( window.innerHeight - parseInt(element.style.height.split("px")))){
        isReverseTop=true;
    }else if(topOfElement <=0){
        isReverseTop=false;
    }
    element.style.top =(top + topOfElement).toString()+"px";
    
    var leftOfElement = parseInt(element.style.left.split("px")[0]);   
    if(leftOfElement >= ( window.innerWidth - parseInt(element.style.width.split("px")))){
        isReverseLeft=true;
    }else if(leftOfElement <=0){
        isReverseLeft=false;
    }
    element.style.left =(left + leftOfElement).toString()+"px";
}
var timer = setInterval(function(){
    if(isReverseTop==true && isReverseLeft==true){
        animate(active,-1,-2);
    }else if(isReverseTop==false && isReverseLeft==true){
        animate(active,1,-2);
    }else if(isReverseTop==true && isReverseLeft==false){
        animate(active,-1,2);
    }else if(isReverseTop==false && isReverseLeft==false){
        animate(active,1,2);
    }
},8);


