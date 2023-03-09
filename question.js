function disappear(element) {
  element.classList.remove('show');
  element.classList.add('hidden');
}

function show_question(question, answers) {
  const holder = document.createElement('div'),
        head   = document.createElement('p'),
        div    = document.createElement('div'),
        btn1   = document.createElement('button'),
        btn2   = document.createElement('button');

  holder.className = 'holder';
  head.className   = 'header';
  div.className    = 'inline-div';
  btn1.className   = 'options';
  btn2.className   = 'options';

  head.innerText = question;
  btn1.innerText = Object.values(answers)[0];
  btn2.innerText = Object.values(answers)[1];

  document.body.appendChild(holder);
  holder.appendChild(head);
  holder.appendChild(div);

  div.appendChild(btn1);
  div.appendChild(btn2);

  holder.classList.add('show');

  return new Promise((resolve, _) => {
    btn1.onclick = () => {
      disappear(holder);
      resolve(Object.keys(answers)[0]);
    }

    btn2.onclick = () => {
      disappear(holder);
      resolve(Object.keys(answers)[1]);
    }
  });
}

(async () => {
  const result = [
    await show_question('你更喜歡', {'I': '獨處', 'E': '與人相處'}),
    await show_question('學習新鮮事物時，你更喜歡', {'N': '了解概念與理論', 'S': '注重其實際用途'}),
    await show_question('當你在做決策時', {'T': '重視邏輯公平', 'F': '重視感情和睦'}),
    await show_question('你的生活方式傾向於', {'J': '先工作，再玩耍。做事著重結果', 'P': '先玩耍，再工作。做事享受過程'})
  ];

  console.log('Result:', result);

  setTimeout(() => {
    location.href = `/result.html?result=${result.join('')}`
  }, 200);
})();