(function(){
  var fine=window.matchMedia("(pointer:fine)").matches;
  if(!fine)return;
  var cur=document.querySelector(".cur"),ring=document.querySelector(".ring");
  var x=0,y=0,rx=0,ry=0;
  document.body.classList.add("js");
  document.addEventListener("mousemove",function(e){x=e.clientX;y=e.clientY;cur.style.transform="translate("+x+"px,"+y+"px)"});
  (function loop(){rx+=(x-rx)*.18;ry+=(y-ry)*.18;ring.style.transform="translate("+rx+"px,"+ry+"px)";requestAnimationFrame(loop)})();
  document.querySelectorAll("a,button").forEach(function(el){
    el.addEventListener("mouseenter",function(){ring.classList.add("hov")});
    el.addEventListener("mouseleave",function(){ring.classList.remove("hov")});
  });
})();
