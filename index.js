const body=document.body;
console.log(body);
const button1=document.querySelector(".btn");
const IntervalId=setInterval(()=>{
	const red=Math.floor(Math.random()*126);
	const green=Math.floor(Math.random()*126);
	const blue=Math.floor(Math.random()*126);
	// console.log(red,green,blue);
	const rgb=`rgb(${red},${green},${blue})`;
	body.style.background=rgb;
},1000);

button1.addEventListener("click",()=>{
	clearInterval(IntervalId);
	button1.innerHTML=body.style.background;
});