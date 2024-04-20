//id
let heading = document.getElementById('heading');
console.log(heading);
//get Data
console.log(heading.innerText);
console.log(heading.innerHTML);
//set data
heading.innerText = "Hello world from DOM<button>click</button>"

heading.innerHTML = `Hello World from DOM <button>click</button>`;
//id
console.log(heading.id);
heading.id = 'head';
//class
console.log(heading.className);
heading.className = 'red';
console.log(heading.classList);
heading.classList.add('red');
heading.classList.remove('testing');
heading.classList.toggle('red');
// style
console.log(heading.style);
heading.style.backgroundColor = 'red';
heading.style.color = 'white';
heading.style.padding = '10px';
//remove
heading.remove();