
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
document.querySelector("#filter-all").classList.remove("bold");
document.querySelector("#filter-progameren").classList.remove("bold");

	for (var i = 0; i < list.length; ++i) {
		console.log(list[i]);
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