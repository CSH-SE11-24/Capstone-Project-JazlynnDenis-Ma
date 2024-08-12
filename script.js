let button= document.querySelector("#text")
let para= document.querySelector("#access")
let para2=document.querySelector("#change")
let foods= ["Pork Dumpling", "Peking Duck", "Springrolls"]

button.addEventListener("click",function(event){
  para.style.fontFamily="openSans"
  para.style.fontSize="20px";
  para2.textContent="I hope this helps!"
})

for(i=0;i<2; i++){
 para2.textContent= "The content of this page includes",foods[0],foods[1],"and",foods[2]
}