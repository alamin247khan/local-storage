const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");
  const product = productField.value;
  const quantity = quantityField.value;

  // Basic validation: Check if both fields are filled
  if (product.trim() === "" || quantity.trim() === "") {
    alert("Please enter both a product name and quantity.");
    return; // Stop the function if validation fails
  }

  // Call displayProduct to add the item to the list on the page
  displayProduct(product, quantity);

  // Clear the input fields after adding the product
  productField.value = "";
  quantityField.value = "";
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`; // Set the text content of the list item
  ul.appendChild(li); // Add the new list item to the unordered list
};

const getStoredShoppingCart = () => {
  let cart = { };
  const storedCart = localStorage.getItem('cart');
  if(storedCart){
    cart = JSON.parse(storedCart);
  }
  return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified)
}