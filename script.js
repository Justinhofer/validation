var list=["Submit Note "]

function validate(){
  var messEle=document.body.querySelector(".valMess");
  var username= document.body.querySelector(".username").value;
  
  if(username==="coolStudent123"){
    messEle.innerHTML="Correct"
  }else{
    messEle.innerHTML="Wrong username Input"
  }
}

document.body.querySelector(".validate").addEventListener("click", function(){
validate();                                   })

document.body.querySelector(".validate").addEventListener("click",function(){
  validate();
})

function renderItems(){
  document.body.querySelector(".display").innerHTML="";
  for(var i=0; i<list.length; i++){
    var ele=document.createElement("div");
    ele.innerHTML=list[i];
    document.body.querySelector(".display").appendChild(ele);
    
  }
}

function submit(){
  var text=document.body.querySelector(".text").value;
  if(text.length!==0){
    list.push(text);
  }else{
    document.body.querySelector(".subMess").innerHTML="Need's more characters, try again"}

renderItems();
}
document.body.querySelector(".submit").addEventListener("click", function(){
  submit();
})

renderItems();