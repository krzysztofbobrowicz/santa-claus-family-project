let startButton = document.querySelector('.start--btn');
let container = document.querySelector('.container');
startButton.addEventListener('click', startProgram);

function startProgram() {
  console.log('starting program');
  startButton.style.display = 'none';

  let peopleDiv = document.createElement('div');
  let inputElement = document.createElement('input');
  let para = document.createElement('p');
  para.innerHTML =
    'Wypisz po przecinku wszystkie osoby biorące udział w zabawie (np. Krzysztof, Ania, Łukasz, Magda)';

  inputElement.classList.add('people');
  peopleDiv.classList.add('add-people');

  container.appendChild(peopleDiv);
  peopleDiv.appendChild(inputElement);
  peopleDiv.appendChild(para);
  let button = document.createElement('button');
  button.classList.add('btn', 'btn-accept');
  button.innerHTML = 'Dodaj osoby';
  peopleDiv.appendChild(button);

  button.addEventListener('click', () => addPeopleToList(inputElement));
}

function addPeopleToList(inputElement) {
  let peopleInsideInput = inputElement.value.replace(/\s/g, '');
  let splitArray = peopleInsideInput.split(',');
  console.log(splitArray);
  inputElement.value = '';
}
