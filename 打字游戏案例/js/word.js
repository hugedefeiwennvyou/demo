/*
* @Author: G50-70
* @Date:   2017-08-23 09:05:28
* @Last Modified by:   G50-70
* @Last Modified time: 2017-08-24 08:58:53
*/
/*开始：产生字符
  产生很多字符、产生一个字符
  将产生的元素保存下，定义一个属性是个空数组
*/
/*属性
  元素：共有多少个  产生多少个
 */

    function Game(){
    	/*定义属性*/
    	this.charsheets = [
    	        ['A','img/a.png'],
    	        ['B','img/b.png'],
    	        ['C','img/c.png'],
    	        ['D','img/d.png'],
    	        ['E','img/e.png'],
    	        ['F','img/f.png'],
    	        ['G','img/g.png'],
    	        ['H','img/h.png'],
    	        ['I','img/i.png'],
    	        ['J','img/j.png'],
    	        ['K','img/k.png'],
    	        ['L','img/l.png'],
    	        ['M','img/m.png'],
    	        ['N','img/n.png'],
    	        ['O','img/o.png'],
    	        ['P','img/p.png'],
    	        ['Q','img/q.png'],
    	        ['R','img/r.png'],
    	        ['S','img/s.png'],
    	        ['T','img/t.png'],
    	        ['U','img/u.png'],
    	        ['V','img/v.png'],
    	        ['W','img/w.png'],
    	        ['X','img/x.png'],
    	        ['Y','img/y.png'],
    	        ['Z','img/z.png']
    	                 ];
        this.length =4;
        this.element = [];
        this.speed = 10;
        this.score = 0;
        this.life= 10;
        this.position = [];
        this.gk = 1;
    }
    /*定义方法*/
    Game.prototype = {
    	start:function(){
    		/*调用创建多个元素方法和落下方法*/
    		this.getchars(this.length);
    		this.drop();
    		this.key();
    	},
    	getchars:function(length){
    		/*创建多个元素*/
    		for(let i=0;i<length;i++){
    			/*调用创建一个元素方法*/
    			this.getchar();
    		}
    	},
    	getchar:function(){
    		/*从this.charsheets里产生一个随机的下标*/
           let num = Math.floor(Math.random()*this.charsheets.length);
           /*第一种去重复*/
           /*while(this.repeat(this.element,this.charsheets[num])){
                num = Math.floor(Math.random()*this.charsheets.length);	   
           }*/
           /*第二种去重复*/
           while(this.repeat(num)){
           	 num = Math.floor(Math.random()*this.charsheets.length); 
           }

          // console.log(this.charsheets[num][0]) 
           /*创建随机位置*/
           let lefts = Math.random()*(innerWidth-400)+200;
           /*第一种去重叠*/
           /*while(this.reposition(this.position,lefts)){
              lefts = Math.random()*(innerWidth-400)+200;
	   
           }*/
           /*第二种去重叠*/
           while(this.reposition(lefts)){
              lefts = Math.random()*(innerWidth-400)+200;  
              // console.log(lefts)
           }
           let tops =Math.random()*100; 
           /*创建一个元素*/
           let divs = document.createElement('div');
           divs.classList.add('dstyle');
           /*将this.charsheets里的第num个元素给了创建的元素*/
           divs.innerText =this.charsheets[num][0];
           /*每一个随机位置*/
           divs.style.left = `${lefts}px`; 
           divs.style.top = `${tops}px`;
           divs.style.backgroundImage =`url(${this.charsheets[num][1]})` ;
           document.body.appendChild(divs);
           /*将创建的元素存在一个数组里*/
           this.element.push(divs);
           this.position.push(lefts);

    	},
    	/*第一种方式*/
    	/*repeat:function(arr,ele){
           for(let i=0;i<arr.length;i++){
           	if(arr[i].innerText==ele){
           		return true;
           	 }
           }
           return false;
    	},
    	reposition:function(arr,ele){
            for(let i=0;i<arr.length;i++){
            	if(Math.abs(arr[i]-ele)<100){
            		return true;
            	}
            }
            return false;
    	},*/
        /*第二种方法*/
        /*箭头函数方法*/

        repeat:function(num){
           return this.element.some(value=>(value.innerText==this.charsheets[num][0]))   
    	},
          reposition:function(lefts){
           return this.position.some(value=>(Math.abs(value-lefts)<100))

          },
    	/*构造函数方法*/
    	/*repeat:function(num){
    		let that = this;
    	 return that.element.some(function(value){
              return value.innerText == that.charsheets[num][0];
    	   })
    	},
    	reposition:function(lefts){
           return this.position.some(function(value){
              return Math.abs(value-lefts)<100;
             
            })
    	},*/


    	/*reposition:function(ele){
            for(let i=0;i<arr.length;i++){
            	if(Math.abs(arr[i]-ele)<100){
            		return true;
            	}
            }
            return false;
    	},*/

    	
    	/*落下方法*/
    	drop:function(){
    	 /* 回调函数里面的this指向document，所以赋值给that*/
    	  let that = this;
    	  this.t = setInterval(function(){
    	  	/*遍历数组元素*/
    	  	for(let i=0;i<that.element.length;i++){
    	  		/*获取每一个数组元素的top*/
    	  		let tops =that.element[i].offsetTop;
    	  		/*通过speed改变top值*/
    	  		that.element[i].style.top = `${tops+that.speed}px`;
    	  		/*判断top值，符合条件从页面中移除，从数组中删除*/
    	  		if(tops>=500){
    	  			document.body.removeChild(that.element[i]);
    	  			that.element.splice(i,1)
    	  			that.position.splice(i,1)
    	  			let life = document.querySelector('.life>span');
    	  			 that.life--;
    	  			 life.innerText = that.life;
    	  			 if(that.life<0){
    	  			 	let flag = confirm('GAME OVER 重新开始')
    	  			 	if(flag){
    	  			 		that.again();
    	  			 	}else{
    	  			 		close();
    	  			 	}
    	  			 }
    	  		}
    	  	}
    	  	if(that.element.length<that.length){
    	  			that.getchar();
    	  	}
    	  },200)
            
    	},
    	/*键盘按下消除*/
    	key:function(){
    		let that = this;
    		document.onkeydown = function(e){
    		  for(let i=0;i<that.element.length;i++){
    		  	/*获取数组里对应内容的字符编码*/
    		  	/*编码换成字母：fromCharCode 字母换成编码：charCodeAt*/
    			let key = that.element[i].innerText.charCodeAt('i');
                if(key==e.keyCode){
                	document.body.removeChild(that.element[i]);
    	  			that.element.splice(i,1);
    	  			that.position.splice(i,1)
    	  			let score = document.querySelector('.score>span');
    	  			console.log(score)
    	  			that.score++;
    	  			score.innerText=that.score;
    	  			if(that.score>10){
    	  				let flag = confirm('是否进入下一关');
    	  				if(flag){
    	  					that.next();
    	  				}
    	  			}
                }
    		 }
    		}
    	},
    	/*下一关*/
     next:function(){
         clearInterval(this.t);
         /*遍历数组，删除元素*/
         this.element.forEach(function(elements){
             document.body.removeChild(elements);
         })
         this.element = [];
         this.position = [];
         this.gk++;
    	 let score = document.querySelector('.score>span');
    	 this.score=0;
    	 score.innerText=this.score;
    	 let gk = document.querySelector('.gk>span');
    	 gk.innerText = this.gk;
    	 console.log(gk.innerText)
    	 if(gk.innerText>3){
    	 	this.length+=0;
    	 	this.speed+=3;
    	 }else{
            this.length++;
            this.speed++;
    	 }
         this.start();       
     },
     /*重新开始*/
     again:function(){
         clearInterval(this.t);
         this.element.forEach(function(elements){
             document.body.removeChild(elements);
         })
         this.element = [];
         this.position = [];
    	 let score = document.querySelector('.score>span');
    	 this.score=0;
    	 score.innerText=this.score;
    	 let life = document.querySelector('.life>span');
    	 this.life=10;
    	 life.innerText = this.life;
         this.start();       
     }

    }


