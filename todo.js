"use strict";
let plus=document.getElementById("plus");
let text1=document.getElementById("text1");
let task=document.getElementById("task");
let done=document.getElementById("done");
let minus=document.getElementById("minus");
class taskManager{
	constructor(value,count){
		event.preventDefault();
		this.count=count;
          this.value=value;
          this.fix();
         }

    fix(){
      event.preventDefault();
      this.check = document.createElement("INPUT");
      this.check.setAttribute("type", "checkbox");
      let box=document.createElement("div");
      box.id=this.count;
      //let news=document.createAttribute("id");
      //news.value=this.count;
      //this.box.setAttributeNode(news);
      box.append(this.check);
      box.append(this.value);
      task.append(box);
    }
   /*this.check.addEventListener("click",function(){
console.log("hey");
   });*/

}
let array=new Array();
let count=0;
plus.addEventListener("click",function(){
//event.preventDefault();
const obj=new taskManager(text1.value,count);
array[count]=obj;
++count;
});
 
 minus.addEventListener("click",function(){
 	event.preventDefault();
 	for (let i=0;i<=count;++i){
 	if (array[i].check.checked==true){
 		//console.log("true");
 		let edit=document.getElementById(array[i].count);
 		task.removeChild(edit);
 		done.append(edit);
 	}
 }
 });
/*for (let i=0;i<=count;++i){
//console.log(array[i].check);
 	if (array[i].check.checked==true){
 		console.log("true");
 		task.removeChild(array[i].count);
 		done.append(array[i].box);
 	}
 }*/