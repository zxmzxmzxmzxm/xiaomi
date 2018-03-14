
//banner
{
    let imgs = document.querySelectorAll(".imgbox li");
    let pagers = document.querySelectorAll(".pagerbox li");
    let banner = document.querySelector("#banner");
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    // console.log(imgs);
    // console.log(next);
    pagers.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n = index;
        }
    });
    let n = 0;
    let l = imgs.length;
    let t = setInterval(move, 3000);

    function move() {
        n++;
        // n=n%5;
        if (n === l) {
            n = 0;
        }
        if (n < 0) {
            n = l - 1;
        }
        for (let i = 0; i < l; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }
        banner.onmouseenter = function () {
            clearInterval(t);
        };
        banner.onmouseleave = function () {
            t = setInterval(move, 3000);
        };
        let flag=true;
        next.onclick = function () {
            if (flag){
                flag=false;
                move();
            }
            // move();
        };
        prev.onclick = function () {
            if (flag){
                flag=false;
                n -= 2;
                move();
            }
            // n -= 2;
            // move();
        }

        imgs.forEach(function (ele,index) {
            ele.addEventListener("transitionend",function () {
                flag=true;
            });
        });
}


//  闪购效果
{
    const prev=document.querySelector(".buy_prev");
    const next=document.querySelector(".buy_next");
    const inner=document.querySelector(".buy_inner");
    let n=0; //n表示移动几屏
    next.onclick=function () {
        n++;
        prev.classList.remove("disable");
        if(n===2){
            this.classList.add("disable");
        }
        if(n===3){
            n=2;
            return;//终止执行
        }
        inner.style.marginLeft=-1226*n+"px";
    }
    prev.onclick=function () {
        n--;
        next.classList.remove("disable");
        if (n===0){
            prev.classList.add("disable");
        }
        if(n===-1){
            n=0;
            return;
        }
        inner.style.marginLeft=-1226*n+"px";
    }
}

//为你推荐
{
    const prev=document.querySelector(".wntj_prev");
    const next=document.querySelector(".wntj_next");
    const inner=document.querySelector(".wntj_inner");
    let n=0; //n表示移动几屏
    next.onclick=function () {
        n++;
        prev.classList.remove("disable");
        if(n===2){
            this.classList.add("disable");
        }
        if(n===3){
            n=2;
            return;//终止执行
        }
        inner.style.marginLeft=-1226*n+"px";
    }
    prev.onclick=function () {
        n--;
        next.classList.remove("disable");
        if (n===0){
            prev.classList.add("disable");
        }
        if(n===-1){
            n=0;
            return;
        }
        inner.style.marginLeft=-1226*n+"px";
    }
}


//内容
{
   function content(parent) {
    const types=parent.querySelectorAll(".type");
    const goods=parent.querySelectorAll(".goodslist");
    types.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            for(let i=0;i<types.length;i++){
                types[i].classList.remove("active");
                goods[i].classList.remove("active");
            }
            this.classList.add("active");
            goods[index].classList.add("active");
        }
    })
   }
   const contentlist=document.querySelectorAll(".content");
   contentlist.forEach(function (ele) {
       content(ele);
   })
}

//下方内容
{
    function wheel(parent){
        let prev=parent.querySelector(".neirong_left_tan");
        let next=parent.querySelector(".neirong_right_tan");
        let contents=parent.querySelectorAll(".neirong_foot");
        let inner=parent.querySelector(".neirong_inner");
        let pagers=parent.querySelectorAll(".dian2");
        let n=0;
        next.onclick=function(){
            n++;
            if(n===contents.length){
                n=contents.length-1;
                return;
            }
            inner.style.marginLeft=n*-296+"px";
            pagers[n].classList.add("active");
            pagers[n-1].classList.remove("active");
            obj=pagers[n];
        }
        prev.onclick=function(){
            n--;
            if(n<0){
                n=0;
                return;
            }
            inner.style.marginLeft=n*-296+"px";
            pagers[n].classList.add("active");
            pagers[n+1].classList.remove("active");
            obj=pagers[n];
        }
        let obj=pagers[0];
        pagers.forEach(function(ele,index){
            ele.onclick=function(){
                obj.classList.remove("active");
                ele.classList.add("active");
                obj=ele;
                inner.style.marginLeft=index*-296+"px";
                n=index;
            }
        })
    }
    const desclist=document.querySelectorAll(".neirong_item");
    desclist.forEach(function(ele){
        wheel(ele);
    })
}

//banner选项卡
{
    let labels=document.querySelectorAll(".label");
    let menus=document.querySelectorAll(".menu");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        }
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })
}

//导航选项卡
{
    let tops=document.querySelector(".nav_wenzi");
    let wenzis=document.querySelectorAll(".nav_wenzi span");
    let items=document.querySelectorAll(".menulist");
    let bottoms=document.querySelector(".nav_bottom");
    let nav=document.querySelector(".nav");
    tops.onmouseenter=function(){
        bottoms.style.display="block";
        bottoms.style.height="230px";
        // bottoms.style.opacity="1";
    };
    nav.onmouseleave=function(){
        bottoms.style.display="none"
        bottoms.style.height="0";
        // bottoms.style.opacity="0";
    };
    let obj=items[0];
    wenzis.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            items[index].style.display="block";
            obj=items[index];
        };
    })
    // let obj=items[0];
    // wenzis.forEach(function(ele,index){
    //     ele.onmouseenter=function(){
    //         obj.style.display="none";
    //         items[index].style.display="block";
    //         obj=items[index];
    //     };
    //     // ele.onmouseleave=function(){
    //     //     items[index].style.display="none";
    //     // }
    // })
}