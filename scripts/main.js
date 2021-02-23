'use strict';

function counter(step = 1) {
  const decrement = document.querySelector('[data-button=decrement]');
  const increment = document.querySelector('[data-button=increment]');
  const display = document.querySelector('[data-counter-display]');
  let value = 0; // Number(display.innerText)

  decrement.addEventListener('click', handleClick);
  increment.addEventListener('click', handleClick);

  function handleClick(e) {
    const whichButton = e.target.dataset.button;
    switch (whichButton) {
      case 'decrement':
        value -= step;
        break;
      case 'increment':
        value += step;
        break;
    }

    updateDisplay();
  }

  function updateDisplay() {
    display.classList.remove(
      'positive-number-display',
      'negative-number-display'
    );

    if (value < 0) {
      // culoare rosie
      display.classList.add('negative-number-display');
    } else if (value > 0) {
      // culoare verde
      display.classList.add('positive-number-display');
    }

    display.innerText = value;
  }
}

counter(5);

// kg/m^2
function bmiCalculator() {
  const form = document.querySelector('[data-bmi-form]');
  const display = form.querySelector('[data-bmi-display]');

  form.addEventListener('submit', handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    const bmi =
      Number(form.elements.greutate.value) /
      Number(form.elements.inaltime.value) ** 2;
    display.innerText = `Indicele de masa corporala este: ${bmi.toFixed(2)}`;
  }
}

bmiCalculator();

function movies() {
  const data = [
    {
      title: 'Batman Returns',
      id: 1,
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      title: 'Batman Begins',
      id: 2,
      imageUrl: 'https://picsum.photos/200/300',
    },
    { title: 'Superman', id: 3, imageUrl: 'https://picsum.photos/200/300' },
  ];

  const movieSink = document.querySelector('[data-movies]');
  const fragment = document.createDocumentFragment();

  for (const movie of data) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const a = document.createElement('a');

    img.src = movie.imageUrl;
    img.alt = movie.title;

    a.href = `movieDetails.html?id=${movie.id}`;

    a.appendChild(img);
    a.appendChild(document.createTextNode(movie.title));

    div.appendChild(a);

    fragment.appendChild(div);
  }

  movieSink.appendChild(fragment);
}

movies();
