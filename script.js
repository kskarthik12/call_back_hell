var countdown=document.createElement("div");
countdown.className="main"

setTimeout(()=> {
    console.log("10");
    countdown.innerText="10"
},1000);
setTimeout(()=> {
    console.log("9");
    countdown.innerText="9"
},2000);
setTimeout(()=> {
    console.log("8");
    countdown.innerText="8"
},3000);
setTimeout(()=> {
    console.log("7");
    countdown.innerText="7"
},4000);
setTimeout(()=> {
    console.log("6");
    countdown.innerText="6"
},5000);
setTimeout(()=> {
    console.log("5");
    countdown.innerText="5"
},6000);
setTimeout(()=> {
    console.log("4");
    countdown.innerText="4"
},7000);
setTimeout(()=> {
    console.log("3");
    countdown.innerText="3"
},8000);
setTimeout(()=> {
    console.log("2");
    countdown.innerText="2"
},9000);
setTimeout(()=> {
    console.log("1");
    countdown.innerText="1"
},10000);
setTimeout(()=> {
    console.log("Happy Independence Day");
    countdown.innerText="Happy Independence Day"
},11000);
document.body.append(countdown);