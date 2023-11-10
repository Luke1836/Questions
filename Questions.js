
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = document.querySelector('.question-btn');
  const ans = question.querySelector('.qn-ans');
  btn.addEventListener('click', () => {
    console.log("Luke");
    questions.forEach((item) => {
      if(item !== question)
      {
        item.classList.remove("active");
      }
    });
    question.classList.toggle("active");
  }) 
});




