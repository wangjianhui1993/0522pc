var tab_list=document.getElementById("tab_list");
var tab_list_li=tab_list.getElementsByTagName("li");
var tab_dd=document.getElementById("tab_dd");
var tab_div=tab_dd.getElementsByTagName("div");

function qh(xx){
    for(i=0;i<tab_list_li.length;i++){
        tab_list_li[i].className="";
        tab_div[i].className="";
    }
    tab_list_li[xx].className="active";
    tab_div[xx].className="active2";
}
for(i=0;i<tab_list_li.length;i++){
    tab_list_li[i].jh=i;
    tab_list_li[i].onmouseover=function(){
        qh(this.jh);
    }
}
function gw(){
    var show1=document.getElementById("topbar-cart");
    var show2=document.getElementById("shopDetail");
    show1.onmouseover=function(){
        show2.style.display="block";
    }
    show1.onmouseleave = function () {
        show2.style.display="none";
    };}gw();


    function gw2(){
    var show1=document.getElementById("site_shop");
    var show2=document.getElementById("nav_show1");
    show1.onmouseover=function(){
        show2.style.display="block";
    }
    show1.onmouseleave = function () {
        show2.style.display="none";
    };
        var show3=document.getElementById("site_shop2");
        var show4=document.getElementById("nav_show2");
        show3.onmouseover=function(){
            show4.style.display="block";
        }
        show3.onmouseleave = function () {
            show4.style.display="none";
        };

        var show5=document.getElementById("site_shop3");
        var show6=document.getElementById("nav_show3");
        show5.onmouseover=function(){
            show6.style.display="block";
        }
        show5.onmouseleave = function () {
            show6.style.display="none";
        };



    }gw2();

function zyqh(){
    var left=document.getElementById("left");
    var right=document.getElementById("right");
    var show=document.getElementById("show");
    var pl=10;
    var setp=300;
    var dqj=show.style.left;
    var num=0;
    right.onclick=function(){
        var x2=parseInt(show.style.left);
        var cont=1;
        var zjl=-1220;
        if(x2<0)
            return;
        x2=x2+cont*zjl;
        show.style.left=x2+"px";
        cont++;
    }
    left.onclick=function(){
        var x2=parseInt(show.style.left);
        var zjl=1220;
        var cont1=1;
        x2=x2+cont1*zjl;
        if (x2>0){
            return;
        }
        show.style.left=x2+"px";
        cont1++;
    }
}
zyqh();


    var sc1=document.getElementById("sc1");
    var sc2=document.getElementById("sc2");
    var sc3=document.getElementById("sc3");
    var sc4=document.getElementById("sc4");

    sc1.onfocus=function(){
        sc3.style.display="block";
        sc1.className="sbsect";
        sc2.className="search-btn2";
    }
sc1.onblur=function(){
    sc3.style.display="none";
    sc1.className="search-text";
    sc2.className="search-btn iconfont";
}



