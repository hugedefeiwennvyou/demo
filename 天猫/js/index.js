/*
* @Author: G50-70
* @Date:   2017-08-13 10:24:58
* @Last Modified by:   G50-70
* @Last Modified time: 2017-08-15 10:11:38
*/

'use strict';


window.onload = function(){
	//下拉框效果
	let sections =document.querySelectorAll('section');
	//获取浏览器高度
	let lh = window.innerHeight;
	let newarr = [];
	let snum = 0;
	sections.forEach(element=>{
		newarr.push(element.offsetTop);
	})
	console.log(newarr);
	let mosttop  =document.getElementsByClassName('mosttop')[0];
	let flagt = true;
	let leftding  =document.getElementsByClassName('leftding')[0];
	let flagd = true;
	// 获取leftding下面的li
	let lid = leftding.querySelectorAll('li');
	console.log(lid)
	let bgcolors = ['#FF0036','#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#FF0036','#']
	window.onscroll = function(){
		let sh = document.body.scrollTop;
        if(sh>1300){
        	if(flagt){
        	  flagt = false;
        	  animate(mosttop,{top:0})
        	}
        }else{
        	if(!flagt){
        	  flagt = true;
        	  animate(mosttop,{top:-50})
        	}
        	
        }      
        //左边定位效果
        if(sh>1000){
        	if(flagd){
        	  flagd = false;
        	  animate(leftding,{top:50,left:2})
        	}
        }else{
        	if(!flagd){
        	  flagd = true;
        	  animate(leftding,{top:332,left:-36})
        	}
        	
        }
       
     //左边定位变化效果
     newarr.forEach(function(value,index){
     	if(lh+sh>=value+100){
     	  lid[snum].classList.remove('bgcolor');
     	  lid[index].classList.add('bgcolor');
     	  snum = index;
     	}
     })
     
     //点击
     lid.forEach(function(element,index,obj){
       element.onclick = function(){
       	 animate(document.body,{scrollTop:newarr[index]},200)
       }
     })
    
	}
	

	

    // 头部效果
     let li1s =  document.getElementsByClassName('li1');
     let more =  document.getElementsByClassName('more');
      li1s[0].onmouseenter = function(){
        more[0].style.display = 'block';
      }
      li1s[0].onmouseleave = function(){
        more[0].style.display = 'none';
      }
      li1s[1].onmouseenter = function(){
        more[1].style.display = 'block';
      }
      li1s[1].onmouseleave = function(){
        more[1].style.display = 'none';
      }
    //二维码  获取head2-last angel1 ewmbox
      let head = document.getElementsByClassName('head2-last')[0];
      let angel1 = document.getElementsByClassName('angel1')[0];
      let ewm = document.getElementsByClassName('ewmbox')[0];
      head.onmouseenter = function(){
      	 angel1.style.display = 'block';
      	 ewm.style.display = "block";
      }
      head.onmouseleave= function(){
      	 angel1.style.display = 'none';
      	 ewm.style.display = "none";
      }
    //商家入驻  获取 shang smore
      let shang = document.getElementsByClassName('shang')[0];
      let smore = document.getElementsByClassName('smore')[0];
      shang.onmouseenter = function(){
      	smore.style.display = 'block';
      }
      shang.onmouseleave = function(){
      	smore.style.display = 'none';
      }
      
    //网站导航效果 获取 zhan navmore
    let zhan = document.getElementsByClassName('zhan')[0];
    let navmore = document.getElementsByClassName('navmore')[0];
    zhan.onmouseenter = function(){
    	navmore.style.display = 'block';
    }
    zhan.onmouseleave = function(){
    	navmore.style.display = 'none';
    }
	// 侧导航效果
    // 获取aside-box li white-box  
  let asidebox = document.getElementsByClassName('aside-box')[0];
  let lis = asidebox.querySelectorAll('.aside-box>li');
  let whitebox =document.getElementsByClassName('white-box');
        console.log(lis);
        console.log(whitebox);
     for(let i=0;i<lis.length;i++){
        lis[i].onmouseenter = function(){
        	whitebox[i].style.display = 'block';
        }
        lis[i].onmouseleave = function(){
        	whitebox[i].style.display = 'none';
        }

     }

    /* // 轮播效果
     // 获取imgimg-box   circle
     let imgs = document.getElementsByClassName('imgimg-box');
     let circles = document.getElementsByClassName('circle');
     let num=0;
     // console.log(imgs)
     // console.log(circles)
     for(let i=0;i<imgs.length;i++){
     	circles[i].onmouseenter = function(){
     		imgs[num].style.display = 'none';
     		imgs[i].style.display = 'block';
     		circles[num].style.background='#e2e2e2';
     		circles[num].style.border='none';
     		circles[i].style.background='#F1F1F1';
     		circles[i].style.border='1px solid #333';
     	    num=i;

     	}
     	
     }
     // 自动轮播
     let t =setInterval(fn,4000);
     function fn(){
     	num++;
     	for(let j =0;j<imgs.length;j++){
            imgs[j].style.display = 'none';
     		circles[j].style.border='none';
            circles[j].style.background = '#e2e2e2';
     	}
     	if(num===imgs.length){
     		num=0;
     	}
     	imgs[num].style.display = 'block';
     	circles[num].style.background='#F1F1F1';
        circles[num].style.border='1px solid #333';
     }*/
    

    /*当前窗口 now  下一个窗口next
       now (0,0)->(-widhs,0)
       next(widths,0)->(0,0)
       now = next ;下标更新
       获取 lunbo imgimg-box
    */
   
    let lunbo1 = document.getElementsByClassName('lunbo1')[0];
//  let main = lunbo1.getElementsByTagName('main')[0];
    let imgs = lunbo1.getElementsByClassName('imgimg-box');
    let widths = lunbo1.offsetWidth;
    let btn = document.getElementsByClassName('lunbo-circle')[0];
    let btns = btn.getElementsByClassName('circle');
    // console.log(btns)
    let now=0;
    let next=0;
       console.log(lunbo1);
    // console.log(imgs);
    console.log(widths);
    let t=setInterval(move,3000);
    function move(){
        next++;
        if(next==imgs.length){
            next=0;
        }
    imgs[next].style.left=widths+'px';
    animate(imgs[now],{left:-widths});
    btns[now].classList.remove('hot');
    animate(imgs[next],{left:0});
    btns[next].classList.add('hot');
     now=next;
    }
    // 鼠标移入停止
    lunbo1.onmouseenter = function(){
        clearInterval(t);
    }
    lunbo1.onmouseleave = function(){
        t=setInterval(move,3000);
    }

    // 点击按钮
     for(let i=0;i<imgs.length;i++){
         btns[i].onclick = function(){
           if(now==i){
            return;
           }
           if(now<i){
             imgs[i].style.left=widths+'px';
             animate(imgs[now],{left:-widths});
             btns[now].classList.remove('hot');
             animate(imgs[i],{left:0});
             btns[i].classList.add('hot');
           }else if(now>i){
             imgs[i].style.left=-widths+'px';
             animate(imgs[now],{left:widths});
             btns[now].classList.remove('hot');
             animate(imgs[i],{left:0});
             btns[i].classList.add('hot');            
           }
           now=next=i;           
        }
     }
        
    
}