let image = {
  jisung0: "https://pbs.twimg.com/media/FOyNzLrVcAIHdNB.jpg:large",
  jisung1: "https://pbs.twimg.com/media/EtZAacoVEAAAm8H?format=jpg&name=large",
};
let url;
let answer;

let background = document.querySelector(".question");
let input = document.querySelector(".answer");
let submit = document.querySelector(".submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  randomImage();
});

function randomImage() {
  let number = parseInt(Math.random() * 2);
  let read = "jisung" + number;
  url = image[read];
  background.style.backgroundImage = `url(${url})`;
  checkAnswer(url);
}

function checkAnswer(url) {
  inputAnswer = input.value;
  answer = image[inputAnswer];
  if (answer === url) {
    console.log("정답 ");
  }
}

console.log(Object.keys(image));
