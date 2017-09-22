/*
* @Author: G50-70
* @Date:   2017-08-10 22:45:32
* @Last Modified by:   G50-70
* @Last Modified time: 2017-08-18 10:52:59
*/

'use strict';
// 第一种方法：获取saide-box  li     whitebox

/*window.onload = function(){
	let saide = document.getElementsByClassName('saide-box');
	let lis = saide[0].getElementsByClassName('iii');
	let whitebox = document.getElementsByClassName('whitebox');
	// console.log(saide);
	// console.log(lis);
	// console.log(whitebox);
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter = function(){
            whitebox[i].style.display = 'block';
		}
		lis[i].onmouseleave = function(){
            whitebox[i].style.display = 'none';
		}
	}
}*/

// 第二种方法：遍历到谁获取谁   this

window.onload = function(){
	let saide = document.getElementsByClassName('saide-box')[0];
	let lis = document.getElementsByClassName('iii');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter = function(){
			let whitebox = this.getElementsByClassName('whitebox')[0];
			whitebox.style.display = 'block';
		}
		lis[i].onmouseleave = function(){
			let whitebox = this.getElementsByClassName('whitebox')[0];
			whitebox.style.display = 'none';
		}
	}
	
    //jquery方法
    //获取saide-box li    whitebox
/*    $('.saide-box li').mouseenter(function(){
    	 $($('.whitebox').get($(this).index())).css({display:'block'})
    }).mouseleave(function(){
    	 $($('.whitebox').get($(this).index())).css({display:'none'})
    })*/
   


 
	// 第三种方法：用classList属性里面的方法 add  remove
	/*for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter = function(){
			let whitebox = this.getElementsByClassName('whitebox')[0];
             whitebox.classList.add('block');
             whitebox.classList.remove('none');
		}
		lis[i].onmouseleave = function(){
			let whitebox = this.getElementsByClassName('whitebox')[0];
             whitebox.classList.add('none');
             whitebox.classList.remove('block');
		}
	}*/

	// 第四种方法 ：用classList属性里面的方法 toggle
	
/*	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter = function(){
			let whitebox = this.getElementsByClassName('whitebox')[0];
             whitebox.classList.toggle('block');
		}
		lis[i].onmouseleave = function(){
			let whitebox = this.getElementsByClassName('whitebox')[0];
            whitebox.classList.toggle('block'); 
		}
	}*/

	// 第五种方法 ：自定义属性
	// 第六种方法 ：闭包


	/*// 轮播图 按钮
	         // 获取图片盒子、图片、按钮盒子、按钮
	   let banner =document. getElementsByClassName('banner-right')[0];
	   let liimgs = banner.getElementsByClassName('liimg');
	   let lunyuan = document.getElementsByClassName('lunyuan')[0];
	   let yuanquans = lunyuan.getElementsByClassName('yuanquan');
	   // console.log(liimgs)
	   // console.log(yuanquans)
	   
	   //第一种方法 
	   let num = 0;
	    for(let i=0;i<liimgs.length;i++){
	    	yuanquans[i].onclick=function(){
	    		liimgs[num].style.display='none';
	    		yuanquans[num].style.background='#15171B';
	    		yuanquans[i].style.background='#7C7C81';
	    		liimgs[i].style.display='block';
	    		num=i;
	    	}
	    }
       // 第二种方法开始
          
       // 第二种方法结束
       

       // 自动轮播开始
	    let t =setInterval(fn,2000);
	    function fn(){
	    	num++;
	    	if(num==liimgs.length){
	    		num=0;
	    	}
	    	for(let j=0;j<liimgs.length;j++){
	    		liimgs[j].style.display='none';
	    		yuanquans[j].style.background='#15171B';
	    	}
	    	liimgs[num].style.display = 'block';
	    	yuanquans[num].style.background = '#7C7C81';
	    }
       // 自动轮播结束
       // 鼠标移入暂停开始
        banner.onmouseenter = function(){
        	clearInterval(t);
        }
        banner.onmouseleave = function(){
        	 t =setInterval(fn,2000);
        }
       // 鼠标移入暂停结束
       // 右边按钮
         let keyleft = document.getElementsByClassName('key-left')[0];
         keyleft.onclick = fn;
        // 左边按钮
         let keyright = document.getElementsByClassName('key-right')[0];
        *6+3// console.log(keyleft)
        function fn1(){
	    	num--;
	    	if(num==-1){
	    		num=liimgs.length - 1;
	    	}
	    	for(let j=0;j<liimgs.length;j++){
	    		liimgs[j].style.display='none';
	    		yuanquans[j].style.background='#15171B';
	    	}
	    	liimgs[num].style.display = 'block';
	    	yuanquans[num].style.background = '#7C7C81';
	    }
         
         keyright.onclick = fn1;*/
     /*轮播   获取 banner-right liimg */
        let banner = document.getElementsByClassName('banner-right')[0];
        let liimgs = banner.getElementsByClassName('liimg');
        let yuan  = document.getElementsByClassName('yuanquan');
        let now=0;
        let next =0;
        let widths =banner.offsetWidth;
        let flag1 = true;
        let t=setInterval(move,3000);
        function move(){
          next++;
          if(next==liimgs.length){
            next=0;
          }
          liimgs[next].style.left=widths+'px';
          animate(liimgs[now],{left:-widths});
          animate(liimgs[next],{left:0},function(){
                   flag1=true;
          });
          yuan[now].classList.remove('hot1');
          yuan[next].classList.add('hot1');
          now=next;
        }

        banner.onmouseenter = function(){
           clearInterval(t)
        }
        banner.onmouseleave = function(){
            t=setInterval(move,3000);
        }

        for(let i=0;i<liimgs.length;i++){

          yuan[i].onclick = function(){
            if(now==i){
              return;
            }
            if(now<i){
              liimgs[i].style.left=widths+'px';
              animate(liimgs[now],{left:-widths});
              yuan[now].classList.remove('hot1');
              animate(liimgs[i],{left:0});
              yuan[i].classList.add('hot1');
            }else if(now>i){
              liimgs[i].style.left=-widths+'px';
              animate(liimgs[now],{left:widths});
              yuan[now].classList.remove('hot1');
              animate(liimgs[i],{left:0});
              yuan[i].classList.add('hot1');              
            }
          
              now=next=i;
          }
        }

        let keyleft = document.getElementsByClassName('key-left')[0];
        let keyright = document.getElementsByClassName('key-right')[0];
        keyleft.onclick = function(){
          if(flag1){
            flag1=false;
            move();
          }
        }
 
        function moveR(){
          next--;
          if(next<0){
            next=liimgs.length-1;
          }
          liimgs[next].style.left=-widths+'px';
          animate(liimgs[now],{left:widths});
          yuan[now].classList.remove('hot1');
          animate(liimgs[next],{left:0},function(){
             flag1=true;
          });
          yuan[next].classList.add('hot1');
          now=next;
        }
        keyright.onclick =function(){
          if(flag1){
            flag1=false;
            moveR();
          }
        } 
        //购物车效果   获取shop  frame
        let shop = document.querySelector('.shop');
        let frame = document.querySelector('.frame');
        shop.onmouseenter = function(){
        	frame.style.height = '96px';
        	frame.innerHTML = '购物车中还没有商品，赶紧选购吧！';
        }
        shop.onmouseleave = function(){
        	frame.style.height = 0;
        	frame.innerHTML ='';
        }
        
       // 导航栏效果
       // 获取 nav、li、minote
        let nav = document.getElementsByTagName('nav')[0];
        let navlis = nav.getElementsByClassName('na');
        let minote = document.getElementsByClassName('minote');
        // console.log(nav);
        // console.log(navlis);
        // console.log(minote);
        for(let i=0;i<navlis.length-2;i++){
        	navlis[i].onmouseenter = function(){
                  minote[i].style.display='block'; 
        	}
            navlis[i].onmouseleave = function(){
                  minote[i].style.display='none'; 
        	}
        }
       //搜索框效果
       let navright = document.getElementsByClassName('nav-right')[0];
       let sousuo = document.getElementsByTagName('input');
       let leftmix = navright.getElementsByClassName('left-mix')[0];
       let rightmix = navright.getElementsByClassName('right-mix')[0];
       let soubox = document.getElementsByClassName('soubox')[0];
//     console.log(sousuo);
//     console.log(leftmix);
//     console.log(rightmix);
       sousuo[0].onclick = function(){
       	  leftmix.style.display = 'none';
       	  rightmix.style.display = 'none';
       	  sousuo[0].style.borderColor= '#ff6700';
       	  navright.style.borderColor= '#ff6700';
       	  soubox.style.display = 'block';
       }
       sousuo[0].onblur = function(){
       	  soubox.style.display = 'none';
       	  navright.style.borderColor = ''
       	  sousuo[0].style.borderRightColor='';
       	  leftmix.style.display = 'block';
       	  rightmix.style.display = 'block';
       }

       // 小米明星单品效果
       // 获取star-bottom  
       
       let starbottom = document.getElementsByClassName('star-bottom');
       let flag=true;
        // 获取箭头
      let topright = document.querySelector('.top-right')
       let jiantou = document.querySelectorAll('.jiantou');
       let lbtn = jiantou[0];
       let rbtn = jiantou[1];
       let p = setInterval(fn2,4000);
       function fn2(){
       	 	  if(flag){
                  starbottom[0].style.marginLeft='-1226px';
                  lbtn.style.color = '#e0e0e0';
                  lbtn.style.cursor = 'default';
                  rbtn.style.color = '#333'; 
                  flag = !flag;
       	 	  }else{
                 starbottom[0].style.marginLeft='0';
                  flag = !flag;
                  rbtn.style.color = '#e0e0e0';  
                  lbtn.style.color = '#333'; 
       	 	  }
       	 	}
       topright.onmouseenter = function(){
           clearInterval(p)
       }
       topright.onmouseleave = function(){
           p = setInterval(fn2,4000);
       }
       rbtn.onclick = function(){
           starbottom[0].style.marginLeft='-1226px';         
           rbtn.style.disabled = 'true';
           rbtn.style.color = '#e0e0e0';
           lbtn.style.color = '#333'; 
      }
      lbtn.onclick = function(){
           starbottom[0].style.marginLeft='0';          
           lbtn.style.disabled = 'true';
           lbtn.style.color = '#e0e0e0'; 
           rbtn.style.color = '#333'; 
      }
      //家电模块  获取zhi-right  zhitop-right li
       let zhiR = document.getElementsByClassName('zhi-right');
       let topR = document.getElementsByClassName('zhitop-right')[0];
       let remens =topR.getElementsByTagName('a');
       let numz = 0;
      //鼠标移入li 让对应的zhi-right显示
//     remens[numz].classList.add('remen');
       for(let i=0;i<remens.length;i++){
       	 remens[i].onmouseenter = function(){
       	 	remens[numz].classList.remove('remen');
       	 	zhiR[numz].style.display = 'none';
       	 	remens[i].classList.add('remen');
       	 	zhiR[i].style.display = 'block';
       	 	numz=i;
       	 }
       }
      
      
      
      
   	 // 为你推荐
        let rightzuo = document.getElementsByClassName('rightzuo')[0];
        let rightyou = document.getElementsByClassName('rightyou')[0];
        let bottom = document.getElementsByClassName('bottom')[0];
        let forbottom = document.getElementsByClassName('for-bottom');
        let numf=0;
        rightyou.onclick = function(){
          if(numf==forbottom.length-2){
            rightyou.style.color="#a6a6a4";
            rightzuo.style.color="#333";
            rightyou.style.cursor = 'default'
          }
          if(numf==forbottom.length-1){           
            return;
          }
             numf++;
             bottom.style.left = `${-1226*numf}px`; 
        }

         rightzuo.onclick = function(){
          if(numf==1){
            rightzuo.style.color="#a6a6a4";
            rightyou.style.color="#333";
            rightzuo.style.cursor = 'default'
          }
          if(numf==0){
            rightzuo.style.color="#a6a6a4";
            rightyou.style.color="#333";
            return;
          }
             numf--;
             bottom.style.left = `${-1226*numf}px`; 

        }
     //智能开始 获取 mi-right li  mijia-box mijia-bottom
     let miR = document.getElementsByClassName('mi-right');
     let milis = miR[0].getElementsByTagName('a');
     let mibox = document.getElementsByClassName('mijia-box')
     let miB = mibox[0].getElementsByClassName('mijia-bottom');
     let numb = 0;
     for(let i=0;i<milis.length;i++){
     	milis[i].onmouseenter = function(){
     		miB[numb].style.display = 'none';
     		milis[numb].classList.remove('hot')
     		miB[i].style.display = 'block';
     		milis[i].classList.add('hot')
     		numb = i;
     	}
     }
     //搭配开始
     let miR1 = document.getElementsByClassName('mi-right');
     let milis1 = miR1[1].getElementsByTagName('a');
     let mibox1 = document.getElementsByClassName('mijia-box')
     let miB1 = mibox1[1].getElementsByClassName('mijia-bottom'); 
//    console.log(milis1)  
//    console.log(miB1)
      let minum = 0;
		 for(let i=0;i<milis1.length;i++){
		     	milis1[i].onmouseenter = function(){
		     		miB1[minum].style.display = 'none';
		     		milis1[minum].classList.remove('hot');
		     		miB1[i].style.display = 'block';
		     		milis1[i].classList.add('hot');
		     		
		     		minum = i;
		     	}
		     }
	  //配件开始
      let milis2 = miR1[2].getElementsByTagName('a');
      let miB2 = mibox1[2].getElementsByClassName('mijia-bottom'); 
//    console.log(milis2)  
//    console.log(miB2)
      let peinum = 0;
		 for(let i=0;i<milis2.length;i++){
		     	milis2[i].onmouseenter = function(){
		     		miB2[peinum].style.display = 'none';
		     		milis2[peinum].classList.remove('hot')
		     		miB2[i].style.display = 'block';
		     		milis2[i].classList.add('hot')
		     		
		     		peinum = i;
		     	}
		     }
	  //周边开始
	  let milis3 = miR1[3].getElementsByTagName('a');
      let miB3 = mibox1[3].getElementsByClassName('mijia-bottom'); 
//    console.log(milis2)  
//    console.log(miB2)
      let zhounum = 0;
		 for(let i=0;i<milis3.length;i++){
		     	milis3[i].onmouseenter = function(){
		     		miB3[zhounum].style.display = 'none';
		     		milis3[zhounum].classList.remove('hot')
		     		miB3[i].style.display = 'block';
		     		milis3[i].classList.add('hot')
		     		
		     		zhounum = i;
		     	}
		     }
	  
     // 内容效果
       // 获取neibox   nbox1  li   book-circle  第一块
       let neibox = document.getElementsByClassName('neibox');
       let nbox = document.getElementsByClassName('nbox1')[0];
       let nlis = nbox.getElementsByTagName('li');
       let bcircle = document.querySelectorAll('.book-circle');
       let numc=0
       let enterL1 = neibox[0].getElementsByClassName('enter-left')[0];
       let enterR1 = neibox[0].getElementsByClassName('enter-right')[0];
       for(let i=0;i<nlis.length;i++){
         bcircle[i].onclick = function(){
            nbox.style.left = -296*i+'px';
            bcircle[numc].style.border = 'none';
            bcircle[numc].style.background = '#B0B0B0';
            bcircle[i].style.border = '2px solid #ff6700';
            bcircle[i].style.background = '#fff';
            numc=i;
         }

       }
       enterL1.onclick = function(){
          if(numc==nlis.length-1){
            enterL1.style.disabled = 'true';
            return;
          }
           bcircle[numc].style.border = 'none';
           bcircle[numc].style.background = '#B0B0B0';
           numc++;
           nbox.style.left=`${-296*numc}px`
           bcircle[numc].style.border = '2px solid #ff6700';
           bcircle[numc].style.background = '#fff';
        }

         enterR1.onclick = function(){
          if(numc==0){
            enterR1.style.disabled = 'true';
            return;
          }
           bcircle[numc].style.border = 'none';
           bcircle[numc].style.background = '#B0B0B0';
           numc--;
           nbox.style.left=`${-296*numc}px`
           bcircle[numc].style.border = '2px solid #ff6700';
           bcircle[numc].style.background = '#fff';
        }
       
       // 第二块
       let nbox1 = document.getElementsByClassName('nbox2')[0];
       let nlis1 = nbox1.getElementsByTagName('li');
       let neirong = document.getElementsByClassName('neirong61')[0];
       let bcircle1 = neirong.getElementsByClassName('book-circle');
       let enterL2 = neibox[1].getElementsByClassName('enter-left')[0];
       let enterR2 = neibox[1].getElementsByClassName('enter-right')[0];
       // console.log(enterL2)
       // console.log(enterR2)
       // console.log(nlis1)
       // console.log(bcircle1)
       let numn = 0;
       for(let i=0;i<nlis1.length;i++){
         bcircle1[i].onclick = function(){
            nbox1.style.left = -296*i+'px';
            bcircle1[numn].style.border = 'none';
            bcircle1[numn].style.background = '#B0B0B0';
            bcircle1[i].style.border = '2px solid #ff6700';
            bcircle1[i].style.background = '#fff';
            numn=i;
         }

       }

       enterL2.onclick = function(){
          if(numc==nlis1.length-1){
            enterL2.style.disabled = 'true';
            return;
          }
           bcircle1[numc].style.border = 'none';
           bcircle1[numc].style.background = '#B0B0B0';
           numc++;
           nbox1.style.left=`${-296*numc}px`
           bcircle1[numc].style.border = '2px solid #ff6700';
           bcircle1[numc].style.background = '#fff';
        }

         enterR2.onclick = function(){
          if(numc==0){
            enterR2.style.disabled = 'true';
            return;
          }
           bcircle1[numc].style.border = 'none';
           bcircle1[numc].style.background = '#B0B0B0';
           numc--;
           nbox1.style.left=`${-296*numc}px`
           bcircle1[numc].style.border = '2px solid #ff6700';
           bcircle1[numc].style.background = '#fff';
        }

       // 第三块
       let neibox1 = document.getElementsByClassName('neibox2')[0];
       let nbox2 = document.getElementsByClassName('nbox3')[0];
       let nnlis = nbox2.getElementsByTagName('li');
       let neirong1 = document.getElementsByClassName('neirong7')[0];
       let bcircle2 = neirong1.getElementsByClassName('book-circle');
       let enterL3 = neibox[2].getElementsByClassName('enter-left')[0];
       let enterR3 = neibox[2].getElementsByClassName('enter-right')[0];
       // console.log(nnlis)
       // console.log(bcircle2)
       let numd=0
       // console.log(bcircle)
       // console.log(nlis)
       for(let i=0;i<nnlis.length;i++){
         bcircle2[i].onclick = function(){
            nbox2.style.left = -296*i+'px';
            bcircle2[numd].style.border = 'none';
            bcircle2[numd].style.background = '#B0B0B0';
            bcircle2[i].style.border = '2px solid #ff6700';
            bcircle2[i].style.background = '#fff';
            numd=i;
         }

       }

       enterL3.onclick = function(){
          if(numd==nnlis.length-1){
            enterL3.style.disabled = 'true';
            return;
          }
           bcircle2[numd].style.border = 'none';
           bcircle2[numd].style.background = '#B0B0B0';
           numd++;
           nbox2.style.left=`${-296*numd}px`
           bcircle2[numd].style.border = '2px solid #ff6700';
           bcircle2[numd].style.background = '#fff';
        }

         enterR3.onclick = function(){
          if(numd==0){
            enterR3.style.disabled = 'true';
            return;
          }
           bcircle2[numd].style.border = 'none';
           bcircle2[numd].style.background = '#B0B0B0';
           numd--;
           nbox2.style.left=`${-296*numd}px`
           bcircle2[numd].style.border = '2px solid #ff6700';
           bcircle2[numd].style.background = '#fff';
        }

       // 第四块
       let nbox3 = document.getElementsByClassName('nbox4')[0];
       let nlis2 = nbox3.getElementsByTagName('li');
       let neirong2 = document.getElementsByClassName('neirong8')[0];
       let bcircle3 = neirong2.getElementsByClassName('book-circle');
       let enterL4 = neibox[3].getElementsByClassName('enter-left')[0];
       let enterR4 = neibox[3].getElementsByClassName('enter-right')[0];
       // console.log(nlis1)
       // console.log(bcircle1)
       let nume = 0;
       for(let i=0;i<nlis2.length;i++){
         bcircle3[i].onclick = function(){
            nbox3.style.left = -296*i+'px';
            bcircle3[nume].style.border = 'none';
            bcircle3[nume].style.background = '#B0B0B0';
            bcircle3[i].style.border = '2px solid #ff6700';
            bcircle3[i].style.background = '#fff';
            nume=i;
         }

       }

       enterL4.onclick = function(){
          if(nume==nlis2.length-1){
            enterL4.style.disabled = 'true';
            return;
          }
           bcircle3[nume].style.border = 'none';
           bcircle3[nume].style.background = '#B0B0B0';
           nume++;
           nbox3.style.left=`${-296*nume}px`
           bcircle3[nume].style.border = '2px solid #ff6700';
           bcircle3[nume].style.background = '#fff';
        }

         enterR4.onclick = function(){
          if(nume==0){
            enterR4.style.disabled = 'true';
            return;
          }
           bcircle3[nume].style.border = 'none';
           bcircle3[nume].style.background = '#B0B0B0';
           nume--;
           nbox3.style.left=`${-296*nume}px`
           bcircle3[nume].style.border = '2px solid #ff6700';
           bcircle3[nume].style.background = '#fff';
        }

      
     }

  

 

