$(function(){
    //banner轮播开始
    var flag=false;
    var items=$(".content .banner .inner li");
    var move = function(n,dir){
        flag=true;
        var active=$('.content .banner .inner .active');
        active.addClass(dir)
            .delay(600)
            .queue(function(){
                flag=false;
                $(this)
                    .removeClass('active')
                    .removeClass(dir)
                    .dequeue();
            })
        var op=(dir=='left')?'right':'left';
        $(n).addClass(op);
        $(n).get(0).offsetWidth;
        $(n).removeClass(op)
            .addClass('active');
        $('.content .banner .page li')
            .removeClass('active')
            .eq(items.index(n))
            .addClass('active');
    }
    var you=$('.leftbtn');
    var zuo=$('.rightbtn');
    you.on('click',function(){
        if(flag){
            return;
        }
        var active=$('.content .banner .inner .active');
        if(active.next().length){
            var n=active.next();
        }else {
            var n=items.eq(0)
        }
        move(n,'left');
    })
    zuo.on('click',function(){
        if(flag){
            return
        }
        var active=$('.content .banner .inner .active');
        if(active.prev().length){
            var n=active.prev();
        }else {
            var n=items.eq(-1)
        }
        move(n,'right');
    })
    $('.content .banner .page li').on('click',function(){
        if($(this).index()>items.index($('.content .banner .inner .active'))){
            var d='left';
        }else {
            var d='right';
        }
        var n=items.eq($(this).index());
        move(n,d);
    })
    var t=setInterval(function(){
        you.trigger('click');
    },2000);

    $(".banner").on("mouseover",function(){
        clearInterval(t)
    })
    $(".banner").on("mouseout",function(){
        t=setInterval(function(){
            you.trigger('click');
        },2000);
    })


    //banner下面的轮播开始
    var botitems=$(".content .banner-bottom .banner-bottom-right ul li");
    var botmove=function(num,direction){
        var active=$(".content .banner-bottom .banner-bottom-right ul .active");
        active
            .addClass(direction)
            .delay(1300)
            .queue(function(){
                $(this)
                    .removeClass("active")
                    .removeClass(direction)
                    .dequeue();
            })
        var op=(direction=="top")?"bottom":"top";
        $(num).addClass(op);
        $(num).get(0).offsetHeight;
        $(num)
            .removeClass(op)
            .addClass("active");
    }
    var top=$('.content .banner-bottom .banner-bottom-right .topbtn');
    top.on('click',function(){
        var active=$(".content .banner-bottom .banner-bottom-right ul .active");
        if(active.next().length){
            var num=active.next();
        }else {
            var num=botitems.eq(0)
        }
        botmove(num,"top");
    })
    var botT=setInterval(function(){
        top.trigger("click")
    },2000)

    //横图的banner动画；
//    $.fn.x=function(n){
//        $(this).css({
//            transform:"translate3d("+n+"px,0,0)"
//        });
//        return this;
//    }
//    $.fn.t=function(time){
//        var t=time/1000;
//        $(this).css({
//            transition:"all "+t+"s ease"
//        })
//        return this;
//    }
//    $.fn.clear=function(t){
//        $(this).delay(t)
//            .queue(function(){
//                $(this).css({
//                    transition:"none"
//                }).dequeue()
//            })
//        return this;
//    }
//    var dw=$(window).width();
//    var inner=$(".floor .lunbo-inner");
//    var index=0;
//    var o;
//    inner.width(inner.children().length * dw);
//    inner.children().width(dw);
//    inner.on("touchstart",function(ev){
//        $(this).css({
//            transition:"none"
//        })
//        o=ev.originalEvent.changedTouches[0].clientX;
//    })
//    inner.on("touchmove",function(ev){
//        var x=ev.originalEvent.changedTouches[0].clientX;
//        $(this).x(-dw * index + (x-o) );
//    })
//    inner.on("touchend",function(ev){
//        var x=ev.originalEvent.changedTouches[0].clientX;
//        if(Math.abs(x-0)>dw/5){
//            if(x<o){
//                index+=1;
//                if(index===inner.children().length){
//                    index-=1;
//                }
//            }else{
//                index-=1;
//                if(index===-1){
//                    index=0;
//                }
//            }
//            $(this).t(600).x(-dw*index).clear(600);
//        }else{
//            $(this).t(600).x(-dw*index).clear(600);
//        }
//    })
})