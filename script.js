var iStatus= document.querySelector("h3");
var btn=document.querySelector("#in");
var flag=1;
btn.addEventListener("click",function(){
    if(flag==1){
        iStatus.innerHTML="Friends"
        iStatus.style.color="green"
        btn.innerHTML="Remove Friends"
        btn.style.backgroundColor="red"
        flag=0;
    }else{
        iStatus.innerHTML="Strenger"
        iStatus.style.color="red"
        btn.innerHTML="Add Friends"
        btn.style.backgroundColor="green"
        flag=1;
    }
})