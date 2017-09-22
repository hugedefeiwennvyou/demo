$(function(){
	
/*头部效果*/
   $('.li1').hover(function(){
   	  $(this).find('.more').css('display','block')
   },function(){
   	  $(this).find('.more').css('display','none')
   })
/*二维码效果*/ 
   $('.head2-last').hover(function(){
   	  $('.angel1').css('display','block')
   	  $('.ewmbox').css('display','block')
   },function(){
   	  $('.angel1').css('display','none')
   	  $('.ewmbox').css('display','none')
   })
/*商家入驻*/
   $('.shang').hover(function(){
   	  $('.smore').css('display','flex')
   },function(){
   	  $('.smore').css('display','none')
   })
/*网站导航*/
   $('.zhan').hover(function(){
   	  $('.navmore').css('display','block')
   },function(){
   	  $('.navmore').css('display','none')
   })
/*侧导航*/
   $('.aside-box>li').hover(function(){
   	  $('.white-box').css('display','none')
   	  $(this).find('.white-box').css('display','block')
   })
   $('.aside-box').hover(function(){},function(){
   	  $('.white-box').css('display','none')
   })
/*轮播    获取imgimg-box lunbo-circle circle*/
   let imgs = $('.imgimg-box')
   let cirs = $('.lunbo-circle>a>.circle')
   let num=0;
   let t = setInterval(fn,3000)
   function fn(){
   	  num++;
   	  if(num==imgs.length){
   	  	num=0;
   	  }
   	    imgs.css('opacity','0').eq(num).css({'opacity':'1'})
   	    cirs.css('background','#a2a2a2').eq(num).css('background','#f1f1f1')    
   }
   
    /*鼠标移入  移出*/
   $('.lunbo1').hover(function(){
   	 clearInterval(t)
   },function(){
   	 t = setInterval(fn,3000)
   })
    
    /*点击*/
   cirs.click(function(){
   	 let index = $(this).index('.circle')
     imgs.css('opacity',0).eq(index).css('opacity',1)
     cirs.css('background','#a2a2a2').eq(index).css('background','#f1f1f1')
   	 num = index;
   })
   
/*下拉框效果*/
   let top = $('.mosttop')
   let flag = true;
   let flag1 = true;
   let section = $('section')
   let lh = window.innerHeight;
   let sh = $('body').scrollTop(); 
   let arr = [];
   let lis = $('.leftding>li')
   let snum=0
   let bg = ['#FF0036','#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#FF0036','#adadad']   
    section.each(function(){
    	arr.push($(this).offset().top)
    })
   window.onscroll = function(){
		let sh = $('body').scrollTop();
        if(sh>1300){
        	if(flag){
        	  flag = false;
              top.css('top',0)
        	}
        }else{
        	if(!flag){
        	  flag = true;
        	  top.css('top',-50)
        	}
        	
        }
        if(sh>1000){
        	if(flag1){
        	  flag1 = false;
        	  $('.leftding').css({top:50,left:2})
        	}        	
        }else{
        	if(!flag1){
        	  flag1 = true;
        	  $('.leftding').css({top:332,left:-36})
        	}       	
        }
  
        arr.forEach(function(value,index){
         	if(lh+sh>=value+200){
         	  lis.css({background:''}).eq(index).css({background:bg[index]},);
         	  lis.eq(0).css({background:'#FF0036'})
         	}
        })   
   }
    lis.not(lis.last()).click(function(){
    	$('body').animate({scrollTop:`${arr[$(this).index('.leftding>li')]-50}`})    	
    })

    lis.hover(function(){
    	let index = $(this).index('.leftding>li')
    	console.log(index)
    	lis.css({background:''}).eq(index).css({background:bg[index]},)
        lis.eq(0).css({background:'#FF0036'})
    },function(){
    	lis.css({background:''})
        lis.eq(0).css({background:'#FF0036'})  	
    })
    lis.last().click(function(){
       $('body').animate({'scrollTop':0},300)
    })
   
})
