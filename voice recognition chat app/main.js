// grab the texts div tag and the button tags
const texts = document.querySelector(".texts");
const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");

//set up the speech reconition webkit
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

//creating a new p tag
let p = document.createElement("p");

//create an eventlistener for our recognition
recognition.addEventListener("result", (e) => {
  //mapping through the speech list to join to words together
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  //to then show the content in our chat section
  p.innerText = text;
  texts.appendChild(p);

  console.log(text);

  //to start a new paragraph
  if (e.results[0].isFinal) {
    text = text.toLowerCase();
    //adding custom replies
    if (text.includes("hello") || text.includes("hi")) {
      p = document.createElement("p");
      p.classList.add("reply");
      p.innerText = "Hey there, i'm Chris";
      texts.appendChild(p);
    }
    if (text.includes("how are you") || text.includes("how are you today")) {
      p = document.createElement("p");
      p.classList.add("reply");
      p.innerText = "i am very well, thank you";
      texts.appendChild(p);
    }
    if (text.includes("what are you")) {
      p = document.createElement("p");
      p.classList.add("reply");
      p.innerText = "I am an Ai created by Christopher";
      texts.appendChild(p);
    }
    if (text.includes("open a youtube page")) {
      p = document.createElement("p");
      p.classList.add("reply");
      p.innerText = "Opening a random Youube page";
      window.open(
        "https://www.youtube.com/playlist?list=PLClGsOKgoNybeYXj8ZFlnPKUIHgDEQFYC"
      );
      texts.appendChild(p);
    } 
    // else {
    //   p = document.createElement("p");
    //   p.classList.add("reply");
    //   p.innerText = "Sorry, i didn't get that";
    //   texts.appendChild(p);
    // }

    p = document.createElement("p");
  }
});

//ending the old session to a start a new one
recognition.addEventListener("end", () => {
  recognition.start();
});

button1.addEventListener("click", () => {
  recognition.start();
});

button2.addEventListener("click", () => {
  recognition.abort();
});
