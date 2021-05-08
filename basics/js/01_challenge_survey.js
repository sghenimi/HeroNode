const questions = [
  {
    question: 'Q(1/3) Javascript developed year?\n # 1990 \n # 1995',
    answer: '1995',
  },
  {
    question: 'Q(2/3) ECMAScript6 published year?\n # 2015 \n # 2016',
    answer: '2015',
  },
  {
    question: 'Q(3/3) French revolution began?\n # 1897 \n# 1789',
    answer: '1789',
  },
];

goSurvey(questions);

function goSurvey(anArrayOfObject) {
  let goodAnswers = 0;
  let lenQuestions = questions.length;
  for (let q of questions) {
    console.log(q.question);
    let answerUser = prompt(q.question);
    console.log(q.question);

    if (answerUser === q.answer) {
      goodAnswers++;
    }
  }

  switch (goodAnswers) {
    case 3:
      alert(`Bravo You have ${goodAnswers} / ${lenQuestions} answered`);
      break;
    case 2:
      alert(`Good You have ${goodAnswers} / ${lenQuestions} answered`);
      break;
    default:
      alert(`You have ${goodAnswers} / ${lenQuestions} answered`);
      break;
  }
}
