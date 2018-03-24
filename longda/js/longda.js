//�ֲ�
//function play(){
//
//    //var number=$('.banner ul li').size()-1;
//
//    var number=$('.banner ul li').size()-1;
//    var circle=$('.circle span').size()-1;
//    var cur=0;
//    var timer = setInterval(slideNext,3000);
//    $('.banner').mouseover(function(){
//        clearTimeout(timer)
//    }).mouseout(function(){
//        timer=setInterval(slideNext,3000)
//    });
//    $('.circle span').mouseover(function () {
//        var now=$(this).index();
//        if(now!=cur){
//            $('.banner ul li').eq(cur).stop().fadeOut();
//            $('.banner ul li').eq(now).stop().fadeIn();
//            $('.circle span').removeClass().eq(now).addClass('active');
//            cur=now;
//        }
//    });
//    function slideNext(){
//        if(cur<number){
//            $('.banner ul li').eq(cur).stop().fadeOut();
//            $('.banner ul li').eq(cur+1).stop().fadeIn()
//            $('.circle span').removeClass('active').eq(cur).addClass('active');
//            cur++;
//        }else{
//            $('.banner ul li').eq(cur).stop().fadeOut();
//            $('.banner ul li').eq(0).stop().fadeIn();
//            cur=0;
//        }
//        function slideCircle(){
//            if(cur<circle){
//                $('.circle span').removeClass('active').eq(cur).addClass('active');
//                cur++;
//            }
//        }
//
//    }
//};
//play();



$(function(){
    $('.addto').click(function(e){
        e.preventDefault();
        AddFavorite(window.location,document.title);
    })
    $('.collection').click(function(e){
        e.preventDefault();

        SetHome(window.location);
    })
})



//加入收藏

function AddFavorite(sURL, sTitle) {

    sURL = encodeURI(sURL);
    try{

        window.external.addFavorite(sURL, sTitle);

    }catch(e) {

        try{

            window.sidebar.addPanel(sTitle, sURL, "");

        }catch (e) {

            alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");

        }

    }

}

//设为首页

function SetHome(url) {

    if (document.all) {

        document.body.style.behavior = 'url(#default#homepage)';

        document.body.setHomePage(url);

    } else {

        alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");

    }
}


//手机显示导航
$(function(){
    $(function(){
        //品牌
        $(".addbtn").click(
            function(){
                //var H = $(".addnav ul").innerHeight();
                $(".addheader>div.addnav").css({display:"block"});

                $(".addheader .addnav").animate({right:"0%"},500);
            }
        );
        $(".addnav>div>div").click(function(){
            $(".addheader .addnav").animate({right:"-100%"},500);
			 $(".addheader>div.addnav").css({display:"none"});
            /*setInterval(function(){
                $(".addheader>div.addnav").css({display:"none"});
            },500)*/
        })
        //关闭弹出框
        //$(".select1 .tab").hover(
        //    function(){
        //        $(this).parents().animate({right:"-100%"},500);
        //        //$(".detail").stop();
        //    },function(){
        //
        //    }
        //
        //);
    });


});


//在线聊天
$(document).scroll(function(){
    var  scrollTop =  $(document).scrollTop(),bodyHeight = $(window).height();
    if(scrollTop > bodyHeight){
        $('.fixed-bar .gotop').css('display','block');
    }else{
        $('.fixed-bar .gotop').css('display','none');
    }
})
$(function() {

    $('#close_im').bind('click', function() {
        $('#main-im').css("height", "0");
        $('#im_main').hide();
        $('#open_im').show();
    });
    $('#open_im').bind('click', function(e) {
        $('#main-im').css("height", "272");
        $('#im_main').show();
        $(this).hide();
    });
    $('.go-top').bind('click', function() {
        $("body").animate({ scrollTop: "0" }, 1000);
    });
    $(".qq-container").bind('mouseenter', function() {
        $('#show1').show();
    })
    $(".qq-container").bind('mouseleave', function() {
        $('#show1').hide();
    })
    $("#weixin2").bind('mouseenter', function() {
        $('#show2').show();
    })
    $("#weixin2").bind('mouseleave', function() {
        $('#show2').hide();
    })
})














