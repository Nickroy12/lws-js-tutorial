const pera = document.createElement('h1');
const node = document.createTextNode('Welocome');
pera.appendChild(node);

const element = document.getElementById('content');
const h2 = document.getElementsByTagName('h1')

element.insertBefore(pera , h2);

