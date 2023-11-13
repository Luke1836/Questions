
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.btn');
  const  icons = question.querySelector(".question-btn");
  const ans = question.querySelector('.qn-ans');
  const plusIcon = question.querySelector('#plus');
  const minusIcon = question.querySelector('#minus'); 
  btn.addEventListener('click', () => {
    console.log("Luke");
    /* questions.forEach((item) => {
      if(item !== question)
      {
        ans.classList.remove("active");
        minusIcon.classList.remove("active");
        plusIcon.classList.add("active");
      }
    }); */
    ans.classList.toggle("active");
    plusIcon.classList.toggle("active");
    minusIcon.classList.toggle("active");    

  }) 
});




