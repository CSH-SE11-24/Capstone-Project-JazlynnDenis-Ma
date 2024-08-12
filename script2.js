let button= document.querySelector("#text")
// a separate js file was made for the food.html file
let image1=document.querySelector("#image1")
let image2=document.querySelector("#image2")
let image3=document.querySelector("#image3")
// These allow the card sizing to adjust to the increase fontsize
let card= document.querySelector(".card-body")
let card2= document.querySelector("#card2")
let card3= document.querySelector("#card3")

let foods= ["Pork Dumpling", "Peking Duck", "Springrolls"]
// These addEventListeners allow readers enlarge the text for easier reading
while(button==true){
  console.log("The content of this page includes",foods[0],foods[1],"and",foods[2])
}
image1.addEventListener("mouseover",function(event){
  image1.style.fontSize="20px"
  card.style.height="250px"
})
image1.addEventListener("mouseout",function(event){
  image1.style.fontSize="15px"
  card.style.height="200px"
})


image2.addEventListener("mouseover",function(event){
  image2.style.fontSize="20px"
  card2.style.height="250px"
})
image2.addEventListener("mouseout",function(event){
  image2.style.fontSize="15px"
  card2.style.height="200px"
})



image3.addEventListener("mouseover",function(event){
  image3.style.fontSize="20px"
  card3.style.height="250px"
})
image3.addEventListener("mouseout",function(event){
  image3.style.fontSize="15px"
  card3.style.height="200px"
})
image3.addEventListener("mouseover",function(event){
  image3.style.fontSize="20px"
  card3.style.height="250px"
})


duck.addEventListener("mouseover",function(event){
  duck.src="duck.jpg"
})

duck.addEventListener("mouseout",function(event){
  duck.src="duck3.jpg"
})

duck.addEventListener("mouseover",function(event){
  duck.src="duck.jpg"
})

dumpling.addEventListener("mouseover",function(event){
  dumpling.src="download.jpg"
})
dumpling.addEventListener("mouseout",function(event){
  dumpling.src="images.jpg"
})

springroll.addEventListener("mouseover",function(event){
  springroll.src="spring.jpg"
})
springroll.addEventListener("mouseout",function(event){
  springroll.src="springrolls.jpeg"
})

