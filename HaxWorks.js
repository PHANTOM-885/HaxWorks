(function () {
	let answer = 0;
	let answered = 0;
	let answerfile = "";
	let bit = 0;
	let bite = "";
	let bite2 = "";
	let bite3 = "";
	let cboxpres = 0;
	let choice0n = -1;
	let choice1n = -1;
	let choice2n = -1;
	let choice3n = -1;
	let dragging = false;
	let h = 0;
	let mander = "";
	let offsetX = 0;
	let offsetY = 0;
	let qcheck = 1;
	let question = 0;
	let questionsleft = 0;
	let rep = 0;
	let subject = "";
	let submax = 0;
	let submin = 0;
	const box = document.createElement("div");
		box.id = "boxbox";
		Object.assign(box.style, {
			display: "flex",
			flexDirection: "column", 
			position: "fixed",
			width: "200px",
			height: "175px",
			top: "64px",
			left: "1150px",
			background: "black",
			cursor: "move",
			zIndex: 0,
			//textAlign: "center",
	});
	const boxtext = document.createElement("div");
		boxtext.textContent = "HaxWorks";
		Object.assign(boxtext.style, {
			textIndent: "5px",
			fontSize: "50px",
			fontSize: "18px",
    			fontWeight: "700",
			color: "rgba(0, 255, 115, 0.988)",
		});
	const boxtext2 = document.createElement("div");
		boxtext2.textContent = "Created by PHANTOM";
		Object.assign(boxtext2.style, {
			textIndent: "5px",
			fontSize: "10px",
			//marginTop: "85px",
			barginBottom: "5px",
			color: "rgba(0, 255, 115, 0.988)",
		});
	const btn = document.createElement("button");
		btn.textContent = "Get Answer";
		Object.assign(btn.style, {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			position: "absolute",
			width: "100px",
			height: "50px",
			top: "47px",
			left: "50px",
			zIndex: 2,
			fontSize: "20px",
			color: "rgba(0, 255, 115, 0.988)",
			backgroundColor: "rgba(49, 56, 52, 0.988)",
		});
	const btn2 = document.createElement("button");
		btn2.textContent = "Skip Lesson";
		Object.assign(btn2.style, {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			position: "absolute",
			width: "100px",
			height: "50px",
			top: "107px",
			right: "50px",
			zIndex: 3,
			fontSize: "20px",
			color: "rgba(0, 255, 115, 0.988)",
			backgroundColor: "rgba(49, 56, 52, 0.988)",
		});
	const btnc = document.createElement("button");
		btnc.textContent = "C";
		Object.assign(btnc.style, {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			position: "absolute",
			width: "10px",
			height: "10px",
			bottom: "5px",
			right: "5px",
			color: "rgba(0, 255, 115, 0.988)",
			backgroundColor: "rgba(49, 56, 52, 0.988)",
		});
	const btnx = document.createElement("button");
		btnx.textContent = "X";
		Object.assign(btnx.style, {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			position: "absolute",
			width: "15px",
			height: "15px",
			top: "5px",
			right: "5px",
			color: "rgba(0, 255, 115, 0.988)",
			backgroundColor: "rgb(36, 0, 0)",
		});
	const cbtn = document.createElement("button");
		cbtn.textContent = "Fetch Answer File";
		Object.assign(cbtn.style, {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			position: "absolute",
			width: "50px",
			height: "50px",
			top: "47px",
			left: "47px",
			zIndex: 2,
			fontSize: "13px",
			color: "rgba(0, 255, 115, 0.988)",
			backgroundColor: "rgba(49, 56, 52, 0.988)",
		});
	const cbtn2 = document.createElement("button");
		cbtn2.textContent = "Fetch Answer File by ID/URL";
		Object.assign(cbtn2.style, {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			position: "absolute",
			width: "50px",
			height: "50px",
			top: "47px",
			left: "103px",
			zIndex: 2,
			fontSize: "9px",
			color: "rgba(0, 255, 115, 0.988)",
			backgroundColor: "rgba(49, 56, 52, 0.988)",
		});
	const cbtn3 = document.createElement("button");
		cbtn3.textContent = "Toggle Question Autodetection";
		Object.assign(cbtn3.style, {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			position: "absolute",
			width: "50px",
			height: "50px",
			top: "103px",
			left: "47px",
			zIndex: 2,
			fontSize: "7px",
			color: "rgba(0, 255, 115, 0.988)",
			backgroundColor: "rgba(49, 56, 52, 0.988)",
		});
	const cbtn4 = document.createElement("button");
		cbtn4.textContent = "cbtn4";
		Object.assign(cbtn4.style, {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			position: "absolute",
			width: "50px",
			height: "50px",
			top: "103px",
			left: "103px",
			zIndex: 2,
			fontSize: "13px",
			color: "rgba(0, 255, 115, 0.988)",
			backgroundColor: "rgba(49, 56, 52, 0.988)",
		});
	const cbtnd = document.createElement("button");
		cbtnd.textContent = "-";
		Object.assign(cbtnd.style, {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			position: "absolute",
			width: "5px",
			height: "5px",
			bottom: "5px",
			right: "5px",
			color: "rgba(0, 255, 115, 0.988)",
			backgroundColor: "rgb(44, 53, 54)",
		});
	const cbtnx = document.createElement("button");
		cbtnx.textContent = "<";
		Object.assign(cbtnx.style, {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			position: "absolute",
			width: "15px",
			height: "15px",
			top: "5px",
			right: "5px",
			color: "rgba(0, 255, 115, 0.988)",
			backgroundColor: "rgba(49, 56, 52, 0.988)",
		});
	window.callback123 = function (data) {
		answerfile = data;
		console.log("answer file:\n", answerfile);
	};
	function answerfilefetch(rangemin, rangemax) {
		rep = rangemin;
		while (rep <= rangemax) {
			const URL = "https://manager.classworks.com/spartanburg4.org/student/AssessmentJSONPStorageServlet?XMLFilename=1_0_"+rep+"_19096_assessment.xml"+"&cachebuster="+Date.now()+"&callback=callback123";
			const s = document.createElement("script");
			s.src = URL;
			document.body.appendChild(s);
			rep++;
		}
	}
	function answerfileverify() {
		//when you hide remains, what remains, just a remnant of a soul inside a shell, I can tell
	}
	function getquestion() {
		bite = document.querySelector('iframe[title="assessment-iframe"]')?.getAttribute("src");
		questionsleft = bite.match(/questionsRemaining=(\d+)/) ? Number(bite.match(/questionsRemaining=(\d+)/)[1]) : null;
		questionsleft = parseInt(questionsleft);
		question = Math.abs(questionsleft - 15);
		return question;
	}
	function getsubject() {
		bite = document.querySelector('iframe[title="assessment-iframe"]')?.getAttribute("src");
		subject = bite.substring(279, 346);
		if (subject.includes("Math")) {
			subject = "mathmatics";
		} else if (subject.includes("read")) {
			subject = "reading";
		} else {
			alert("subject error:\n"+subject);
		}
		return subject;
	}
	if (document.getElementById("boxbox")) {
		console.log("box detected");
		return;
	}
	//answerfilefetch(8000, 9999);
	document.body.appendChild(box);
	box.appendChild(boxtext);
	box.appendChild(boxtext2);
	box.appendChild(btn);
	box.appendChild(btn2);
	box.appendChild(btnc);
	box.appendChild(btnx);
	box.addEventListener("mousedown", (e) => {
		dragging = true;
		offsetX = e.clientX - box.offsetLeft;
		offsetY = e.clientY - box.offsetTop;
	});
	btn.addEventListener("click", () => {
		bit = 0;
		if (qcheck != 0 && answered != 0) {
			bite = prompt("reload the page to autodetect next quesion");
			if ((bite.includes("y") || bite.includes("k") || bite.includes("1")) && (!bite.includes("n") || !bite.includes("0"))) {
				location.reload();
			} else {
				answered = 0;
			}
		}
		if ((answerfile == "" || answerfile == null) && answered == 0) {
			alert("please fetch answer file");
		} else {
			bit = 1;
		}
		if (bit != 0) {
			if (qcheck != 0) {
				getquestion();
			} else {
				question = prompt("question");
			}
			answer = answerfile[0].assessment.question[question].answer;
			choice0n = answerfile[0].assessment.question[question].choice[0].ordinal;
			choice1n = answerfile[0].assessment.question[question].choice[1].ordinal;
			choice2n = answerfile[0].assessment.question[question].choice[2].ordinal;
			choice3n = answerfile[0].assessment.question[question].choice[3].ordinal;
			console.log("question: "+question+"\nraw answer: "+answer+"\nchoice0n: "+choice0n+"\nchoice1n: "+choice1n+"\nchoice2n: "+choice2n+"\nchoice3n: "+choice3n);
			if (answer == choice0n) {
				answer = "A: "+answerfile[0].assessment.question[question].choice[0].content;
			} else if (answer == choice1n) {
				answer = "B: "+answerfile[0].assessment.question[question].choice[1].content;
			} else if (answer == choice2n) {
				answer = "C: "+answerfile[0].assessment.question[question].choice[2].content;
			} else if (answer == choice3n) {
				answer = "D: "+answerfile[0].assessment.question[question].choice[3].content;
			}
			if (answered == 0 || qcheck != 1) {
				alert("question "+question+"/"+(question+questionsleft)+"\n"+answer);
			}	
			answered = 1;
		}
	});
	btn2.addEventListener("click", () => {
		alert("TBA");
	});
	btnc.addEventListener("click", () => {
		boxtext2.textContent = "Configuration";
		btn.remove();
		btn2.remove();
		btnc.remove();
		btnx.remove();
		box.appendChild(cbtn);
		box.appendChild(cbtn2);
		box.appendChild(cbtn3);
		box.appendChild(cbtn4);
		box.appendChild(cbtnd);
		box.appendChild(cbtnx);
	})
	btnx.addEventListener("click", () => {
		box.remove();
	})
	cbtn.addEventListener("click", () => {
		alert("TBA");
	})
	cbtn2.addEventListener("click", () => {
		bite = prompt("Insert answer file ID/URL");
		if (!bite.includes("http")) {
			const URL = "https://manager.classworks.com/spartanburg4.org/student/AssessmentJSONPStorageServlet?XMLFilename=1_0_"+bite+"_19096_assessment.xml"+"&cachebuster="+Date.now()+"&callback=callback123";
			const s = document.createElement("script");
			s.src = URL;
			document.body.appendChild(s);
		} else if (bite.includes("http")) {
			const s = document.createElement("script");
			s.src = bite;
			document.body.appendChild(s);
		} else {
			alert("Invalid answer file ID/URL");
		}
	})
	cbtn3.addEventListener("click", () => {
		if (qcheck == 0) {
			qcheck = 1;
			alert("question autodetection true");
		} else {
			qcheck = 0;
			alert("question autodetection false");
		}
	})
	cbtn4.addEventListener("click", () => {
		alert("TBA");
	})
	cbtnd.addEventListener("click", () => {
		bite = prompt("dev");
		eval(bite);
	})
	cbtnx.addEventListener("click", () => {
		boxtext2.textContent = "Created by PHANTOM";
		cbtn.remove();
		cbtn2.remove();
		cbtn3.remove();
		cbtn4.remove();
		cbtnd.remove();
		cbtnx.remove();
		box.appendChild(btn);
		box.appendChild(btn2);
		box.appendChild(btnc);
		box.appendChild(btnx);
	})
	document.addEventListener("keydown", (e) => {
		if (e.ctrlKey && e.key.toLowerCase() === "e") {
			if (h == 0) {
				box.style.display = (box.style.display === "none") ? "block" : "none";
				h == 1;
			} else {
				box.style.display = (box.style.display === "visible") ? "block" : "visible";
				h == 0;
			}
		}
	});
	document.addEventListener("mousemove", (e) => {
		if (!dragging) return;
		box.style.left = e.clientX - offsetX + "px";
		box.style.top = e.clientY - offsetY + "px";
	});
	document.addEventListener("mouseup", () => {
		dragging = false;
	});
})();