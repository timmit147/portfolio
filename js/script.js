
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = function() {
  document.getElementById("overlay").style.left = "100%";
}

async function link(url) {
  	document.getElementById("overlay").style.left = "0";
  	await sleep(1800);
  	window.location.href = url;
}