(() => {
  let image = {
    지성: "https://img.marieclairekorea.com/2021/06/mck_60cc003227343.jpg",
    천러: "https://img.marieclairekorea.com/2021/06/mck_60cc0023d0ed5.jpg",
    제노: "https://pbs.twimg.com/media/E4GGzGpUUAEqEcM?format=jpg&name=4096x4096",
    해찬: "https://img.marieclairekorea.com/2021/06/mck_60cc000e5c20a.jpg",
    마크: "https://img.marieclairekorea.com/2021/06/mck_60cbfff93843e.jpg",
    런쥔: "https://img.marieclairekorea.com/2021/06/mck_60cc00007957b.jpg",
    재민: "https://img.marieclairekorea.com/2021/06/mck_60cc00159182d.jpg",
  };
  let count = 3;
  let url;
  let answer;

  let caution = document.querySelector(".caution");
  let background = document.querySelector(".question");
  let input = document.querySelector(".answer");
  let submit = document.querySelector(".submit");

  submit.addEventListener("click", () => {
    if (input_text.value.trim() === "") return;
    caution.classList.remove("show");
    checkAnswer();
    input.value = "";
  });

  input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
      if (input_text.value.trim() === "") return;
      caution.classList.remove("show");
      checkAnswer();
      input.value = "";
    }
  });

  function randomImage() {
    let array = Object.keys(image);
    let number = parseInt(Math.random() * array.length);
    let set = array[number];
    url = image[set];
    background.style.backgroundImage = `url(${url})`;
  }

  function checkAnswer() {
    inputAnswer = input.value;
    answer = image[inputAnswer];
    url = background.style.backgroundImage;
    if (`url("${answer}")` === url) {
      console.log("정답!");
      count = 3;
    } else {
      console.log("땡!");
      count--;
      if (count === 0) {
        console.log("그만!");
        let ban = document.querySelector(".ban");
        let container = document.querySelector(".container");
        ban.classList.add("show");
        container.classList.add("hide");
      }
      caution.classList.add("show");
      document.querySelector(".count").innerHTML = `${count}`;
      randomImage();
    }
  }

  randomImage();
})();
