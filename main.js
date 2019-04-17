function test(){
	alert('test');
}

let div = document.createElement("div");
div.id = "Test_Web_Extension";
div.style.height = "75px";
div.style.width = "150px";
div.style.position = "fixed";
div.style.display = "block";
div.style.top = "75px";
div.style.left = "-115px";
div.style.borderRadius = "0em 5em 5em 0em";
div.style.cursor = "pointer";
div.style.backgroundColor = "rgba(225,225,225,0.75)";
div.style.border = "1px solid rgb(175,175,175)";
div.style.boxShadow = "3px 2px #555555";
div.style.zIndex = 999;
div.addEventListener("click", function(){
	let div = document.getElementById('Test_Web_Extension'); 
	let btn = document.getElementById('Test_Button'); 
	div.style.left == '-115px' ? 
		(div.style.left = '-25px', btn.style.display = 'inline-block') : 
		(div.style.left = '-115px', btn.style.display = 'none');
});

let btn = document.createElement("input");
btn.id = "Test_Button";
btn.type = "button";
btn.value = "Transpose";
btn.style.height = "36px";
btn.style.width = "75px";
btn.style.position = "absolute";
btn.style.top = btn.style.left = btn.style.right = btn.style.bottom = 0;
btn.style.margin = "auto";
btn.style.display = "none";
btn.style.borderRadius = "5em";
btn.style.border = "1px solid rgb(100,100,100)";
btn.addEventListener("click", () => test());
div.appendChild(btn);

window.onload = () => document.body.appendChild(div);