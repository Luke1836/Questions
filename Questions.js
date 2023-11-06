/* const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
     console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
}); */

const questions = document.querySelectorAll(".question-btn");

questions.forEach(function (question) {
  const plusBtn = question.querySelector("#plus"); 
  const minusBtn = question.querySelector("#minus"); 
  const answer = question.nextElementSibling;

  plusBtn.addEventListener("click", function () {
    answer.style.display = "block";
    plusBtn.style.display = "none";
    minusBtn.style.display = "inline-block";
  });

  minusBtn.addEventListener("click", function () {
    answer.style.display = "none";
    minusBtn.style.display = "none";
    plusBtn.style.display = "inline-block";
  });
});
