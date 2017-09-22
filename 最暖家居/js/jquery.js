$(function(){
/*导航栏效果*/
// console.log($(window))
$(window).scroll(function(){
   let sh = document.body.scrollTop;
   if(sh>=102){
     $('nav').css({position:"fixed",left:0,top:0,'z-index':999})
   }else if(sh<102){
     $('nav').css({position:''})   
   }
});
/*轮播  bimg img circle-box li*/
let t = setInterval(fn,3000)
let imgs = $('.bimg>a')
let now = 0,next = 0;
   function fn(){
   	  next++;
   	  if(next==imgs.length){
   	  	next=0;
   	  }
   	  imgs.eq(next).css({left:'1200px'});
   	  imgs.eq(now).animate({left:'-1200px'});
   	  imgs.eq(next).animate({left:'0'});
   	  $('.circle-box>li').css('background','#fff').eq(next).css('background','#F13F4B')
   	  now = next;
   }
   /*鼠标移入*/
    $('.banner-box').hover(function(){
    	clearInterval(t)
    },function(){
    	t=setInterval(fn,3000)
    })
    /*按钮点击*/
   $('.circle-box>li').click(function(){
   	  let index = $(this).index('.circle-box>li')
//    imgs.eq(index).animate({left:'0'})
      next = index-1;
      fn();
   })
   /*左右点击*/
   $('.btnl').click(function(){
        fn();
   })
   $('.btnr').click(function(){
        next--;
      if(next<0){
        next=imgs.length-1;
      }
      imgs.eq(next).css({left:'-1200px'});
      imgs.eq(now).animate({left:'1200px'});
      imgs.eq(next).animate({left:'0'});
      $('.circle-box>li').css('background','#fff').eq(next).css('background','#F13F4B')
      now = next;
   })

/*案例展示页面效果*/
   let yizi = $('.yizi');
   yizi.click(function(){
   	  let  index = $(this).index('.yizi')
   	  $('.fright').css('display','none').eq(index).css('display','block')
   	  $('.yizi').removeClass('color').eq(index).addClass('color')
   })
})
