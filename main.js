//let my_script = "<script>function test(){alert('test');}</script>";

let script = document.createElement("script");
script.innerText = "function test(){alert('test');}";

let div = document.createElement("div");
div.id = "Test_Web_Extension";
div.style.height = "35px";
div.style.width = "100px";
div.style.position = "fixed";
div.style.display = "block";
div.style.marginTop = "-1800px";
div.style.marginLeft = "calc(96.5vw)";
div.style.backgroundColor = "rgba(50,50,50,0.75)";
div.style.zIndex = 999;

let span = document.createElement("span");
span.id = "Test_Span";
span.style.position = "absolute";
//span.style.height = "35px";
//.span.style.width = "35px";
span.style.top = "calc(1.5vh)";
span.style.left = "calc(0.5vw)";
span.style.color = "rgb(250,250,250)";
span.style.cursor = "pointer";
span.setAttribute("onclick", "(function(){let div = document.getElementById('Test_Web_Extension'); let span = document.getElementById('Test_Span'); div.style.marginLeft == 'calc(90.5vw)' ?  (div.style.marginLeft = 'calc(96.5vw)', span.innerHTML = '<<') : (div.style.marginLeft = 'calc(90.5vw)', span.innerHTML = '>>');})()");
//span.style.backgroundColor = "rgba(200,200,200)";
span.innerHTML = "<<";
div.appendChild(span)

let btn = document.createElement("input");
btn.id = "Test_Button";
btn.type = "button";
btn.value = "Click me";
btn.style.marginTop = "7px";
btn.style.marginLeft = "28px";
btn.setAttribute("onclick", "test()");
div.appendChild(btn);

document.head.appendChild(script);
document.body.appendChild(div);