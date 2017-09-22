$(function(){
/*侧导航   获取   saide-box li whitebox*/
   let saide = $('.saide-box>li>a')
   saide.hover(function(){
     $('.whitebox').css('display','none')
   	 $(this).next('.whitebox').css('display','block')
   })
   $('.saide-box').hover(function(){},function(){
   	   $('.whitebox').css('display','none')
   })
/*轮播图*/
    let lis = $('.banner-right>.liimg');
    let num=0;
    let t=setInterval(function(dir){
    	fn('left');
    },3000)
    function fn(dir){
    	if(dir=='left'){
    		num++;
          if(num==lis.length){
       	    num=0;
        }
      }
        if(dir=='right'){
        	num--;
    	  if(num==-1){
    		num = lis.length-1;
    	}
      }	
     lis.css({'opacity':0,zIndex:0}).eq(num).css({'opacity':1,zIndex:1})
     $('.yuanquan').css({background:'#333'}).eq(num).css({background:'#7C7C81'})
    }
    
    /*左右按钮*/
    $('.key-left').click(function(){
    	$('liimg').finish();
    	fn('left');
    })
    $('.key-right').click(function(){
    	$('liimg').finish();
    	fn('right')
    })
    
    /*鼠标移入*/
    $('.banner-right').hover(function(){
       clearInterval(t)
    },function(){
       t=setInterval(function(dir){
    	fn('left');
    },3000)
    })
    /*点击*/
    $('.yuanquan').click(function(){ 
       let index = $(this).index('.yuanquan')
       num = index;
       fn()
    })
    
/*购物车效果  获取shop  frame*/
   $('.shop').hover(function(){
   	  $('.shop .frame').css('height',96).html('购物车中还没有商品，赶紧选购吧！')
   },function(){
   	  $('.shop .frame').css('height',0).html('')
   })
   
/*导航栏效果 获取nav na minote*/  
   let na = $('.na>a')
   na.hover(function(){
   	  $('.minote').css('display','none')
   	  $(this).next('.minote').css('display','block')
   })
   $('nav').hover(function(){},function(){
   	  $('.minote').css('display','none')
   })

/*搜索框效果*/
   $('input').click(function(){
   	   $('.left-mix').css({display:'none'})
   	   $('.right-mix').css('display','none')
   	   $(this).css('border-color','#ff6700')
   	   $('.nav-right').css('border-color','#ff6700')
   	   $('.soubox').css('display','block')
   })
   $('input').blur(function(){
   	   $('.left-mix').css({display:'block'})
   	   $('.right-mix').css('display','block')
   	   $(this).css('border-color','')
   	   $('.nav-right').css('border-color','')
   	   $('.soubox').css('display','none')
   })

/*小米明星单品*/
let p=setInterval(fn1,3000)
let flag = true;
function fn1(){
	if(flag){
        $('.star-bottom:eq(0)').css('margin-left','-1226px');
        $('.jiantou:eq(0)').css({
        	color:'#e0e0e0',cursor:'default'
        })
        $('.jiantou:eq(1)').css({'color':'#333','cursor':'pointer'})
        flag = !flag
	}else{ 
        $('.star-bottom:eq(0)').css('margin-left',0)
        $('.jiantou:eq(1)').css({'color':'#e0e0e0','cursor':'default'})
        $('.jiantou:eq(0)').css({'color':'#333','cursor':'pointer'})
        flag = !flag
	}
  }
    $('.top-right').hover(function(){
    	clearInterval(p)
    },function(){
    	p=setInterval(fn1,3000)
    })
    
    $('.jiantou:eq(1)').click(function(){
        $('.star-bottom:eq(0)').css('margin-left','-1226px')
        $('.jiantou:eq(1)').css({disabled:'true',color:'#e0e0e0'})
        $('.jiantou:eq(0)').css({'color':'#333','cursor':'pointer'})
    })
    
    $('.jiantou:eq(0)').click(function(){
        $('.star-bottom:eq(0)').css('margin-left',0)
        $('.jiantou:eq(0)').css({disabled:'true',color:'#e0e0e0'})
        $('.jiantou:eq(1)').css({'color':'#333','cursor':'default'})
    })


/*家电模块*/
    let remen = $('.zhitop-right>li>a')
    let zhiright = $('.zhi-right')
    let num1=0;
    remen.hover(function(){
    	remen.removeClass('remen')
    	$(this).addClass('remen')
    	let index = $(this).index('.zhitop-right>li>a')
    	zhiright.eq(num1).css('display','none')
    	zhiright.eq(index).css('display','block')
    	num1 = index
    },function(){})
    
/*智能开始*/
   let mijia = $('.mi-right>li>a')
   let mib = $('.mijia-bottom')
   mijia.hover(function(){
   	 $(this).parents('.mi-right').find('a').removeClass('hot')
   	 $(this).addClass('hot')
   	 let index = $(this).index('.mi-right>li>a')
   	 $(this).parents('.mijia-top').nextAll('.mijia-bottom').css('display','none')
   	 mib.eq(index).css('display','block')
   },function(){})
   
/*为你推荐*/

   let rightzuo = $('.rightzuo')
   let rightyou = $('.rightyou')
   let forb = $('.for-bottom')
   let bottom = $('.bottom')
   let num2=0;
   rightyou.click(function(){
   	  if(num2==forb.length-2){
         rightyou.css({color:'#a6a6a4',cursor:'default'})
         rightzuo.css({'color':'#333',cursor:'pointer'})
   	  }
   	  if(num2==forb.length-1){
   	  	return;
   	  }
   	  num2++;
   	  bottom.css({'margin-left':`${-num2*1226}px`})
   })
   rightzuo.click(function(){
   	  if(num2==1){
         rightzuo.css({color:'#a6a6a4',cursor:'default'})
         rightyou.css({'color':'#333',cursor:'pointer'})
   	  }
   	  if(num2==0){
   	  	return;
   	  }
   	  num2--;
   	  bottom.css({'margin-left':`${-num2*1226}px`})
   })

/*内容*/
   let nlis = $('.nbox1>li')
   let neileft = $('.enter-left')
   let neiright = $('.enter-right') 
   let bcircle = $('.neirong6>.book-circle')
   let num3 = 0;
   bcircle.click(function(){
   	 let index = $(this).index('.neirong6>.book-circle')
   	 bcircle.eq(num3).css({
   	 	border:'none',background:'#b0b0b0'
   	 })
   	 $('.nbox1').css('left',`${-296*index}px`)
   	 bcircle.eq(index).css({
   	 	border:'2px solid #ff6700',background:'#fff'
   	 })
   	 num3 = index;
   })

   neileft.eq(0).click(function(){
   	if(num3==nlis.length-1){
// 		num3=0
   		neileft.eq(0).css('cursor','default')
   		return
   	}
   	  num3++;
   	  
      bcircle.css({
   	 	border:'none',background:'#b0b0b0'
   	 })
   	 $('.nbox1').css('left',`${-296*num3}px`)
   	 bcircle.eq(num3).css({
   	 	border:'2px solid #ff6700',background:'#fff'
   	 })     
   })
    
     neiright.eq(0).click(function(){
   	  num3--;
   	  if(num3<0){
   	  	num3=nlis.length-1;
   	  }
      bcircle.css({
   	 	border:'none',background:'#b0b0b0'
   	 })
   	 $('.nbox1').css('left',`${-296*num3}px`)
   	 bcircle.eq(num3).css({
   	 	border:'2px solid #ff6700',background:'#fff'
   	 })     
   })
   
})







