
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

// Image popup

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const nodeList = document.querySelectorAll("section img");
for (i = 0; i < nodeList.length; i++) {
  nodeList[i].addEventListener('click', async function(e){
		this.parentNode.classList.toggle("zoom");
		await delay(800);
		if(this.parentNode.classList.contains("zoom") == true){
			this.scrollIntoView({ block: 'center', behavior: "smooth"  });
		}
	});
}
