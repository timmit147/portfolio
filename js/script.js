
// Filter
var list = document.querySelectorAll("section");

function selectall(){
document.querySelector("#filter-all").classList.add("bold");
document.querySelector("#filter-vormgeving").classList.remove("bold");
document.querySelector("#filter-progameren").classList.remove("bold");

	for (var i = 0; i < list.length; ++i) {
			list[i].classList.remove('hide');
	   
	}

}


function vormgeving(){

document.querySelector("#filter-vormgeving").classList.add("bold");
artAnimation();
document.querySelector("#filter-all").classList.remove("bold");
document.querySelector("#filter-progameren").classList.remove("bold");

	for (var i = 0; i < list.length; ++i) {
			if(list[i].classList.contains("vormgeving")){
				list[i].classList.remove('hide');
			}
			else{
				list[i].classList.add('hide');
			}
				   
	}

}

function progameren(){

document.querySelector("#filter-progameren").classList.add("bold");

codeAnimation()

document.querySelector("#filter-all").classList.remove("bold");
document.querySelector("#filter-vormgeving").classList.remove("bold");

	for (var i = 0; i < list.length; ++i) {
			if(list[i].classList.contains("progameren")){
				list[i].classList.remove('hide');
			}
			else{
				list[i].classList.add('hide');
			}
				   
	}
}



window.onscroll = function(e) {
	if(this.scrollY > 200){
		document.querySelector("nav").classList.add("scrollMenu");
	}
	else{
		document.querySelector("nav").classList.remove("scrollMenu");
	}
  }


var codeAnimationActive = false;
async  function codeAnimation(){
	if(codeAnimationActive != false){
		return;
	}
	codeAnimationActive = true;
	const text = document.querySelector("main .progameren h2").textContent;
	const random = "*&^%$#@?{!/.><=";
	
	for (let i = 0; i < text.length; i++) {
		await new Promise(resolve => setTimeout(resolve, 100));
		const str = document.querySelector("main .progameren h2").textContent;
		const replace = str.replace(str.charAt(i), random[i]);
		document.querySelector("main .progameren h2").textContent = replace;	
	}	
	for (let i = 0; i < text.length; i++) {
		await new Promise(resolve => setTimeout(resolve, 100));
		const str = document.querySelector("main .progameren h2").textContent;
		const replace = str.replace(str.charAt(i), text[i]);
		document.querySelector("main .progameren h2").textContent = replace;
	}	
	codeAnimationActive = false;

}





var artAnimationActive = false;
async  function artAnimation(){
	if(artAnimationActive != false){
		return;
	}
	artAnimationActive = true;
	const text = document.querySelector("main .vormgeving h2").textContent;
	const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ","Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ","Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

	for (let i = 0; i < text.length; i++) {
		await new Promise(resolve => setTimeout(resolve, 350));
		console.log("test");
		const str = document.querySelector("main .vormgeving h2").textContent;
		const replace = str.replace(str.charAt(i),  '<span style="color:'+colors[i]+'">'+str.charAt(i)+'</span>');
		document.querySelector("main .vormgeving h2").innerHTML = replace;	
	}	
	document.querySelector("main .vormgeving h2").textContent = text;	
	artAnimationActive = false;

}