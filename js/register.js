$(function(){
    $(".Henglan").on("touchstart",function(){
        $(this).next(".ying1").css("display","block");
        $(this).next(".ying1").siblings(".ying1").css("display","none");
        $(this).css("color","#ff8a00").siblings().css("color","#111");
    })
})
 
