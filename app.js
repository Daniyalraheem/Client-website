const searchRoutes = {
  'female watches': 'female.html',
  'Female watches': 'female.html',
  'couple watches': 'couple.html',
  'Couple watches': 'couple.html',
  'luxury watches': 'luxury_watches.html',
  'Luxury watches': 'luxury_watches.html',
  'Premium watches': 'luxury_watches.html',
  'premium watches': 'luxury_watches.html',
  'storage boxes': 'storage_boxes.html',
  'Storage boxes': 'storage_boxes.html',
  'rolex': 'rolex.html',
  'Rolex': 'rolex.html',
  'hublot': 'hublot.html',
  'Hublot': 'hublot.html',
  'patek philippe': 'patek_philippe.html',
  'Patek philippe': 'patek_philippe.html',
  'skmei': 'skmei.html',
  'Skmei': 'skmei.html',
  'reward': 'reward.html',
  'Reward': 'reward.html',
  'tissot': 'tissot.html',
  'Tissot': 'tissot.html',
  'sveston': 'sveston.html',
  'Sveston': 'sveston.html',
  'universe point': 'universepoint.html',
  'Universe point': 'universepoint.html',
  'curren': 'curren.html',
  'Curren': 'curren.html',
  'arabic black watch': 'arabic_black.html',
  'Arabic black watch': 'arabic_black.html',
  'aura watch': 'arabic_black.html',
  'Aura watch': 'arabic_black.html',
  'fitron': 'fitron.html',
  'Fitron': 'fitron.html',
  'audemars piguet': 'audemarspiguet.html',
  'Audemars piguet': 'audemarspiguet.html',
  'xtl': 'X-TL.ok.html',
  'x-tl.ok': 'X-TL.ok.html',
  'matturi': 'maturi.html',
  'Matturi': 'maturi.html',
  'benyar': 'benyar.html',
  'Benyar': 'benyar.html',
  'bestwin': 'bestwin.html',
  'Bestwin': 'bestwin.html',
  'success way': 'successway.html',
  'seastar': 'seastar.html.html',
  'Seastar': 'seastar.html.html',
};

document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from reloading the page
  const input = document.getElementById('searchInput').value.toLowerCase().trim();

  // Search match
  for (let key in searchRoutes) {
    if (input.includes(key)) {
      window.location.href = searchRoutes[key];
      return;
    }
  }

  // If no match
  alert('No matching page found. Try searching for a brand or category name.');
});


  // _________________________________________________________________________________________________________


  // Example add to cart button handler
document.querySelectorAll('.btn-secondary.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Assuming each product has a unique ID and price
    const productId = this.getAttribute('data-id');
    const productName = this.getAttribute('data-name');
    const productPrice = this.getAttribute('data-price');

    const product = {
      id: productId,
      name: productName,
      price: productPrice,
    };

    // Get the existing cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    cart.push(product);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show alert
    alert(`${productName} has been added to the cart.`);

    // Update the cart count
    updateCartCount();
  });
});



// Show cart items when the cart icon is clicked
document.querySelector('.cartbtn').addEventListener('click', function() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }

  let cartContent = 'Your Cart:\n';
  cart.forEach((item, index) => {
    cartContent += `${index + 1}. ${item.name} - Rs${item.price}\n`;
  });

  cartContent += `\nTotal: Rs${cart.reduce((total, item) => total + parseFloat(item.price), 0)}`;
  alert(cartContent);
});



// Call updateCartCount on page load to set the initial cart count
window.addEventListener('load', updateCartCount);






  // Update the cart count in the navbar
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = cart.length;

  // Update the cart count display
  document.querySelector('.cart-icon').textContent = cartCount;
}