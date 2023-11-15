
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.btn');
  const  icons = question.querySelector(".question-btn");
  const ans = question.querySelector('.qn-ans');
  const plusIcon = question.querySelector('#plus');
  const minusIcon = question.querySelector('#minus'); 
  btn.addEventListener('click', () => {
    
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("active");
        item.querySelector('.qn-ans').classList.remove("active");
        item.querySelector('#plus').classList.remove("inactive");
        item.querySelector('#minus').classList.remove("active");
      }
    });
    ans.classList.toggle("active");
    plusIcon.classList.toggle("inactive");
    minusIcon.classList.toggle("active");    

  }) 
});




