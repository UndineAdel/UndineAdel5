const bottomBar = document.getElementsByClassName("bottom-mobile-bar")[0];

const slide1 = document.getElementsByClassName("section-wrap")[0]; // 1/5
const slide2 = document.getElementsByClassName("section-wrap")[1]; // 2/5
const slide3 = document.getElementsByClassName("section-wrap")[2]; // 2/5
const slide4 = document.getElementsByClassName("section-wrap")[3]; // 3/5
const slide5 = document.getElementsByClassName("section-wrap")[4]; // 4/5
const slide6 = document.getElementsByClassName("section-wrap")[5]; // 5/5
const end = document.getElementsByClassName("section-wrap")[6];

const icon1 = document.getElementsByClassName("icon-bcg2");
const icon2 = document.getElementsByClassName("icon-bcg3");


const changeBtn = document.getElementsByClassName("change-btn");


const selectedItem = [];
const selectedTech = [];


const backBtn = document.getElementById("back-mobile");



const studio = document.getElementById("studio-link");
const tech = document.getElementById("tech-link");

var width = window.innerWidth;

let previousSlide = 0;

let windowCount = 0;
let nextSlide = 0;

const addBtn = document.getElementsByClassName("cross")[0]; 
const studioNext = document.getElementById("studio-next");
const techNext = document.getElementById("tech-next");
const dateNext = document.getElementById("date-next");
const summaryNext = document.getElementById("summary-next");
const submitNext = document.getElementById("submit-next");


const studioBack = document.getElementById("studio-back");
const techBack = document.getElementById("tech-back");

const dateBack = document.getElementById("date-back");
const contBack = document.getElementById("contact-back");
const summaryBack = document.getElementById("summary-back");

const contactSkip = document.getElementById("contact-skip");

contactSkip.addEventListener("click", function(){
	slide1.classList.remove("desktop-toggle");
	slide5.classList.add("desktop-toggle");
});



studioNext.addEventListener("click", function(){
	slide4.classList.add("desktop-toggle");
	slide2.classList.remove("desktop-toggle");
	dates();
});

techNext.addEventListener("click", function(){
	slide4.classList.add("desktop-toggle");
	slide3.classList.remove("desktop-toggle");
	dates();
});

dateNext.addEventListener("click", function(){
	slide5.classList.add("desktop-toggle");
	slide4.classList.remove("desktop-toggle");
});

summaryNext.addEventListener("click", function(){
	slide6.classList.add("desktop-toggle");
	slide5.classList.remove("desktop-toggle");
	formFill();
	summaryContent();
});

submitNext.addEventListener("click", function(){
	end.classList.add("desktop-toggle");
	slide6.classList.remove("desktop-toggle");
	setTimeout(redirectMe, seconds * 1000);
	setInterval(countdown, 1000);
});

studioBack.addEventListener("click", function(){
	slide1.classList.add("desktop-toggle");
	slide2.classList.remove("desktop-toggle");
	dateDelete();
});

techBack.addEventListener("click", function(){
	slide1.classList.add("desktop-toggle");
	slide2.classList.remove("desktop-toggle");
	dateDelete();
});

dateBack.addEventListener("click", function(){
	if(previousSlide == slide2){
		slide4.classList.remove("desktop-toggle");
		previousSlide.classList.add("desktop-toggle");
	}
	else if(previousSlide == slide3){
		slide4.classList.remove("desktop-toggle");
		previousSlide.classList.add("desktop-toggle");
		previousSlide.scrollIntoView();	
	}
	else{
		slide4.classList.remove("desktop-toggle");
		slide1.classList.add("desktop-toggle");
	}
	windowCount = 2;
	dateDelete();
});

contBack.addEventListener("click", function(){
	slide5.classList.remove("desktop-toggle");
	slide3.classList.add("desktop-toggle");
});

summaryBack.addEventListener("click", function(){
	slide5.classList.add("desktop-toggle");
	slide4.classList.remove("desktop-toggle");
});

addBtn.addEventListener("click", function(){
	slide4.classList.remove("desktop-toggle");
	slide1.classList.add("desktop-toggle");
	windowCount = 2;
	dateDelete();
})

changeBtn[0].addEventListener("click", function(){
	slide6.classList.remove("desktop-toggle");
	slide2.classList.add("desktop-toggle");
	windowCount = 2;
	dateDelete();
});

changeBtn[1].addEventListener("click", function(){
	slide6.classList.remove("desktop-toggle");
	slide3.classList.add("desktop-toggle");
	windowCount = 2;
	dateDelete();
});

changeBtn[2].addEventListener("click", function(){
	slide6.classList.remove("desktop-toggle");
	slide5.classList.add("desktop-toggle");
	formDelete()
});

const next = document.getElementById("next");
const skip1 = document.getElementById("skip1");
const skip2 = document.getElementById("skip2");




function redirectMe(){
	window.location.href = 'index.html';
}






let clickCount = [1, 1, 1, 0, 1, 1, 1, 1, 1, 1];
let service = {};

// Studio selection

for (let i = 0; i < icon1.length; i++){
	icon1[i].addEventListener("click", function(){
		icon1[i].classList.toggle("selected-icon");
		
		function iconSelector(){
			if(clickCount[i] % 2 == 0){
				console.log(clickCount[i])
				for(let i = selectedItem.length - 1; i >= 0; i--) {
				    if(selectedItem[i] == service) {
				        selectedItem.splice(i, 1);
				    }
				}
			}
			else{
				console.log(clickCount)
				selectedItem.push(service);
			}
		}
	
		if(icon1[i] == icon1[0]){
			service = "Virtual studio";
			iconSelector();
			clickCount[i]++;
		}
		else if(icon1[i] == icon1[1]){
			service = "Chroma studio";
			iconSelector();
			clickCount[i]++;
		}
		else if(icon1[i] == icon1[2]){
			service = "Mixed studio";
			iconSelector();
			clickCount[i]++;
		}
		console.log(selectedItem)
	});
}


// Tech selection

for (let i = 0; i < icon2.length; i++){
	icon2[i].addEventListener("click", function(){
		icon2[i].classList.toggle("selected-icon");
		
		function iconSelector(){
			if(clickCount[i + 4] % 2 == 0){
				console.log(clickCount[i + 4])
				for(let i = selectedTech.length - 1; i >= 0; i--) {
				    if(selectedTech[i] == service) {
				        selectedTech.splice(i, 1);
				    }
				}
			}
			else{
				console.log(clickCount)
				selectedTech.push(service);
			}
		}
	
		if(icon2[i] == icon2[0]){
			service = "Augmented reality";
			iconSelector();
			clickCount[i + 4]++;
		}
		else if(icon2[i] == icon2[1]){
			service = "Camera tracking";
			iconSelector();
			clickCount[i + 4]++;
		}
		else if(icon2[i] == icon2[2]){
			service = "Video tracking";
			iconSelector();
			clickCount[i + 4]++;
		}
		else if(icon2[i] == icon2[3]){
			service = "Live streaming";
			iconSelector();
			clickCount[i + 4]++;
		}
		else if(icon2[i] == icon2[4]){
			service = "Live avatar";
			iconSelector();
			clickCount[i + 4]++;
		}
		else if(icon2[i] == icon2[5]){
			service = "Interactive touch";
			iconSelector();
			clickCount[i + 4]++;
		}
		console.log(selectedItem)
	});
}





// Mobile booking nav

function counter(){
	if(windowCount == 1){
		nextSlide = slide4;
	}
	else if(windowCount == 2){
		nextSlide = slide5;
	}
	else if(windowCount == 3){
		nextSlide = slide6;
	}
	else if(windowCount == 4){
		nextSlide = end;
	};
}

studio.addEventListener("click", function(){
	slide1.classList.toggle("mobile-toggle");
	slide1.classList.remove("desktop-toggle");
	slide2.classList.toggle("mobile-toggle");
	slide2.classList.add("desktop-toggle");
	next.classList.toggle("mobile-toggle");
	skip1.classList.toggle("mobile-toggle");
	backBtn.classList.toggle("mobile-toggle");
	previousSlide = slide2;
	windowCount = 1;
	counter();
});

tech.addEventListener("click", function(){
	slide1.classList.toggle("mobile-toggle");
	slide1.classList.remove("desktop-toggle");
	slide3.classList.toggle("mobile-toggle");
	slide3.classList.add("desktop-toggle");
	next.classList.toggle("mobile-toggle");
	skip1.classList.toggle("mobile-toggle");
	backBtn.classList.toggle("mobile-toggle");
	previousSlide = slide3;
	windowCount = 1;
	counter();
});

backBtn.addEventListener("click", function(){
	counter();	
	dateDelete();
	formDelete();
	next.innerHTML = 'Next step';
	if(windowCount == 1){
		backBtn.classList.toggle("mobile-toggle");
		skip1.classList.toggle("mobile-toggle");
		next.classList.toggle("mobile-toggle");
		previousSlide.classList.toggle("mobile-toggle");
		slide1.classList.toggle("mobile-toggle");
		slide1.scrollIntoView();
		dateDelete();
		formDelete();
	}
	else if(previousSlide == slide1){
		windowCount = 1;
		slide1.classList.remove("mobile-toggle");
		slide5.classList.add("mobile-toggle");
		next.classList.toggle("mobile-toggle");
		skip1.classList.toggle("mobile-toggle");
		backBtn.classList.toggle("mobile-toggle");
	}
	else{
		console.log(nextSlide) //contact
		console.log(previousSlide) //studio
		console.log(windowCount) //2
		
		windowCount = windowCount - 1;
		counter();
		nextSlide.classList.toggle("mobile-toggle");
		skip2.classList.add("mobile-toggle");
		previousSlide.classList.remove("mobile-toggle");
		previousSlide.scrollIntoView();
		
	};
})

next.addEventListener("click", function(){
	counter();
	console.log("next slide = " + nextSlide)
	console.log("window count = " + windowCount)
	if(nextSlide == slide4){
		nextSlide.classList.toggle("mobile-toggle");
		slide2.classList.add("mobile-toggle");
		slide3.classList.add("mobile-toggle");
		nextSlide.scrollIntoView();
		windowCount = windowCount + 1;
		dates();
		skip2.classList.remove("mobile-toggle");
	}
	else if(nextSlide == end){
		bottomBar.classList.toggle("mobile-toggle");
		nextSlide.classList.toggle("mobile-toggle");
		skip2.classList.add("mobile-toggle");
		nextSlide.scrollIntoView();
// 		setTimeout(redirectMe, seconds * 1000);
		setInterval(countdown, 1000);
	}
	else{
		nextSlide.classList.toggle("mobile-toggle");
		nextSlide.scrollIntoView();
		skip2.classList.add("mobile-toggle");
		windowCount = windowCount + 1;
	};
	if(nextSlide == slide6){
		fStudio.innerHTML = 0;
		summaryContent();
		formFill();
		next.innerHTML = 'Send';

	}
});

skip1.addEventListener("click", function(){
	slide1.classList.toggle("mobile-toggle");
	slide5.classList.toggle("mobile-toggle");
	skip1.classList.toggle("mobile-toggle");
	next.classList.toggle("mobile-toggle");
	backBtn.classList.toggle("mobile-toggle");
	previousSlide = slide1;
	windowCount = 3;
});

skip2.addEventListener("click", function(){
	counter();
	nextSlide.classList.toggle("mobile-toggle");
	nextSlide.scrollIntoView();
	windowCount = windowCount + 1;
	skip2.classList.add("mobile-toggle");
});


const fStudio = document.getElementById("studio-final");
const fTech = document.getElementById("tech-final");

let studioText = 0;
let techText = 0;

function summaryContent(){
	function showStudio() {	
		let itemString = selectedItem.toString();
		let items = itemString.split(",");
		fStudio.innerHTML = items.join(`<br>`);
	};
	
	function showTech() {	
		let itemString = selectedTech.toString();
		let items = itemString.split(",");
		fTech.innerHTML = items.join(`<br>`);
	};
showStudio();      
showTech(); 
}


let seconds = 10;
let message = document.getElementsByClassName('redirect-msg')[0];

function countdown() {
    seconds -= 1;
    message.innerText = "You're being redirected to the home page. " + seconds;
}






// 	document.getElementById('fstudio').value = selectedItem[0];


let dateForm = document.getElementById('dateForm');


function dates(){
	let dateItems = selectedItem.concat(selectedTech); // An array of services + studios

	for(let i = 0; i < dateItems.length; i++){
		dateForm.innerHTML +=  //selects an HTML object to insert a new HTML to
		`
		<label>Date #${i+1}:</label>
		<input type="date" id="fdate" name="fdate"><br><br>
		<input id="fstudio${i}" type="text" id="fname" name="fname" placeholder="Virtual studio"><br><br>
		`	
	}
	for(let i = 0; i < dateItems.length; i++){
		document.getElementById('fstudio' + (i)).value = dateItems[i]; // fstudio1 -> value 2nd in date
		console.log(dateItems);
	}
}

function dateDelete(){
	if(windowCount == 2){
		dateForm.innerHTML = "";
	}
}
	


let name = document.getElementById("fname");
let mail = document.getElementById("fmail");
let fmsg = document.getElementById("fmsg");

let yourName = document.getElementById("yourname");
let yourMail = document.getElementById("yourmail");
let yourMsg = document.getElementById("yourmsg");


function formFill(){
	yourName.innerHTML = name.value;
	yourMail.innerHTML = mail.value;
	yourMsg.innerHTML = fmsg.value;
	yourMsg.addEventListener("click", function(){
		alert(windowCount)
	})
}

function formDelete(){
	yourName.innerHTML = "";
	yourMail.innerHTML = "";
	yourMsg.innerHTML = "";
}
















