window.onload = function(){
	let lis = document.querySelectorAll('li');
	let num = 0;
   for(let i=0;i<lis.length;i++){
   	  lis[i].onclick = function(){
   	  	lis[num].style.border = '1px solid #dfdfdf';
   	  	lis[i].style.border = '1px solid #ff6700';
   	  	num=i;
   	  	if(this.id==pencil){
   	  		draws.drawp('pencil');
   	  	}else{
   	  		if(this.id=='five'){
   	  			draws.bian = prompt('请输入边数',6);
   	  		}
   	  		if(this.id=='fivestar'){
   	  			draws.jiao = prompt('请输入角数',6);
   	  		}
   	  		draws.drawp(this.id);
   	  	}
   	  	
   	  }
   }
   let era = document.querySelector('.era');
   let liss = document.querySelectorAll('.left>li');
   liss[1].onclick = function(){ 
   	   draws.clear(era);
   }
   
   
   /*描边，填充*/
  let style = document.querySelectorAll('.style');
//let right = document.querySelector('.right')
  style.forEach((element,index)=>{
  	 element.onclick = function(){
  	 let active = document.querySelector('.right [active = true]')
      active.setAttribute('active','false');
      this.setAttribute('active','true');
      draws.style = this.id;
  	 }
  })
  
  /*描边 填充*/
  let color = document.querySelectorAll('.color');
  console.log(color)
   color.forEach((value,index)=>{
   	 value.onchange = function(){
   	  if(index==0){
   	  	draws.fillStyle = this.value;
   	  }else if(index==1){
   	  	draws.strokeStyle= this.value;  	  	
   	  }
   }
  })
   
 /*文字*/
   let wenzi = document.querySelector('.wenzi');
	wenzi.addEventListener('click',function(){
		 	 draws.text();
		
	})
 /*保存*/
   let baocun = document.querySelector('.baocun');
    baocun.addEventListener('click',function(){
    	canvas.toDataURL();
    	baocun.href = canvas.toDataURL('images/png')
    	baocun.download = 'a.png';
    	
    })
    
 /*反向*/
   let reverse = document.querySelector('.reverse');
   reverse.addEventListener('click',function(){
     	draws.reverse();	
   })
 /*裁切*/
   let clip = document.querySelector('.clip');
   let cut = document.querySelector('.cut');
   clip.onclick = function(){
   	   draws.clip(cut);
   }
 /*撤销*/
   let chexiao = document.querySelector('#chexiao');
   chexiao.addEventListener('click',function(){
   	   draws.chexiao();
   })
   document.onkeydown = function(e){
   	if(e.keyCode==90&&e.ctrlKey){
   		draws.chexiao();
   	}
   }
}
