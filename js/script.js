// time
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// // page trantsision
// window.onload = function() {
//   document.getElementById("overlay").style.left = "100%";
// }

// async function link(url) {
//   	document.getElementById("overlay").style.left = "0";
//   	await sleep(1800);
//   	window.location.href = url;
// }


// Filter
function selectall(){
document.querySelector("#filter-all").classList.toggle("bold");
document.querySelector("#filter-vormgeving").classList.remove("bold");
document.querySelector("#filter-progameren").classList.remove("bold");


var list = document.querySelectorAll("section");
for (var i = 0; i < 999; ++i) {
	if ( list[i] == undefined){
		return;
	}
		list[i].classList.remove('hide');
   
}
}


function vormgeving(){

document.querySelector("#filter-vormgeving").classList.toggle("bold");
document.querySelector("#filter-all").classList.remove("bold");
document.querySelector("#filter-progameren").classList.remove("bold");

var list = document.querySelectorAll("section");
	for (var i = 0; i < 999; ++i) {
		if ( list[i] == undefined){
			return;
		}
		else{
			if(list[i].classList.contains("vormgeving")){
				list[i].classList.remove('hide');
			}
			else{
				list[i].classList.add('hide');
			}
			
		}

	   
	}

}

function progameren(){

	document.querySelector("#filter-progameren").classList.toggle("bold");
document.querySelector("#filter-all").classList.remove("bold");
document.querySelector("#filter-vormgeving").classList.remove("bold");

var list = document.querySelectorAll("section");
	for (var i = 0; i < 999; ++i) {
		if ( list[i] == undefined){
			return;
		}
		else{
			if(list[i].classList.contains("progameren")){
				list[i].classList.remove('hide');
			}
			else{
				list[i].classList.add('hide');
			}
			
		}

	   
	}


}