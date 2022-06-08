const loadLSData = _ => {
  const carts = getCart();
  for (const name in carts) {
    displayItem(name)
  }
}

const addItem = _ => {
  const inputFilled = document.getElementById('user-input');
  const name = inputFilled.value;
  if (!name) {
    return;
  }
  // Display items
  displayItem(name);

  // Add Local storage
  addToItem(name);

  inputFilled.value = '';
}

const displayItem = name => {
  const ul = document.getElementById('products');
  const li = document.createElement('li');
  li.innerText = name;
  ul.appendChild(li);
}

const getCart = _ => {
  const cart = localStorage.getItem('cart');
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }

  return cartObj;
}

const addToItem = name => {
  const cart = getCart();
  if (cart[name]) {
    cart[name]++;
  } else {
    cart[name] = 1;
  }  
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringify);
}

loadLSData()