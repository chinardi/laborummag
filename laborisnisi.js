let parentElement = document.getElementById('parentElement');
let newElement = document.createElement('span');
newElement.textContent = 'New Element';
let referenceElement = document.getElementById('childElement');
parentElement.insertBefore(newElement, referenceElement);
