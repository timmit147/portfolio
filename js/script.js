
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

test()

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



function test(){
	const text = document.querySelector("main section h2").textContent;
	
	for (let i = 0; i < text.length; i++) {
		document.querySelector("main section h2").offsetWidth;
		task(i,  "*&^%$#@?{!/.><=");		
	}	
	function task(i, random) {
		setTimeout(function() {
			const str = document.querySelector("main section h2").textContent;
			const replaced = str.replace(str.charAt(i), random[i]);
			document.querySelector("main section h2").textContent = replaced;
			task2(i,  text);
		}, 120 * i);

	  }
	  function task2(i, random) {
		setTimeout(function() {
			const str = document.querySelector("main section h2").textContent;
			const replaced = str.replace(str.charAt(i), random[i]);
			document.querySelector("main section h2").textContent = replaced;
			setTimeout(function() {
				setTimeout(function() {
					task2(i,  text);
				}, 100);
			}, 100);
		}, 100 * i);

	  }

}