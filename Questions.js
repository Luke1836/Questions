/* 
const questions = document.getElementById('question');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const ans = document.querySelector('.answer');

plusBtn.addEventListener('click', () => {
  plusBtn.style.display = 'none';
  minusBtn.style.display = 'inline-block';
  ans.style.display = 'block';
});

minusBtn.addEventListener('click', () => {
  plusBtn.style.display = 'inline-block';
  minusBtn.style.display = 'none';
  ans.style.display = 'none';
}); */
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const plusBtn = question.querySelector('.plus');
  const minusBtn = question.querySelector('.minus');
  const answer = question.querySelector('.answer');

  plusBtn.addEventListener('click', () => {
    answer.style.display = 'block';
    plusBtn.style.display = 'none';
    minusBtn.style.display = 'inline-block';
  });

  minusBtn.addEventListener('click', () => {
    answer.style.display = 'none';
    plusBtn.style.display = 'inline-block';
    minusBtn.style.display = 'none';
  });
});

