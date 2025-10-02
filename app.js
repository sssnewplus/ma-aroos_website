const feeds = [
  // chickun feeds
  { id: 'c1', name: 'Chickun Chick Pellete', price: 19100, unit: '25kg Bag', img: 'static/images/feeds/chickun/3_in_1.jpg' },
  { id: 'c2', name: 'Chickun Grower Pellete', price: 17050, unit: '25kg Bag', img: 'static/images/feeds/chickun/grower_pellete.jpg' },
  { id: 'c3', name: 'Chickun Layer Mash', price: 16300, unit: '25kg Bag', img: 'static/images/feeds/chickun/layer_mash.jpg' },
  { id: 'c4', name: 'Chickun Layer Pellete', price: 17000, unit: '25kg Bag', img: 'static/images/feeds/chickun/layer_pellete.jpeg' },
  { id: 'c5', name: 'Chickun Super Starter Pellete', price: 19650, unit: '25kg Bag', img: 'static/images/feeds/chickun/super_starter.jpeg' },
  { id: 'c6', name: 'Chickun Starter Pellete', price: 19600, unit: '25kg Bag', img: 'static/images/feeds/chickun/starter.jpeg' },
  { id: 'c7', name: 'Chickun Eco Layer Mash', price: 14800, unit: '25kg Bag', img: 'static/images/feeds/chickun/eco_layer_mash.jpeg' },
  { id: 'c4', name: 'Chickun Finisher Pellete', price: 19600, unit: '25kg Bag', img: 'static/images/feeds/chickun/finisher.jpg' },
  
  // ultima feeds
  { id: 'u1', name: 'Ultima Plus (Ultima+)', price: 24750, unit: '25kg Bag', img: 'static/images/feeds/ultima/plus.jpg' },
  { id: 'u2', name: 'Ultima Chick Pellete', price: 20350, unit: '25kg Bag', img: 'static/images/feeds/ultima/3_in_1.jpg' },
  { id: 'u3', name: 'Ultima Grower Pellete', price: 18600, unit: '25kg Bag', img: 'static/images/feeds/ultima/grower.jpeg' },
  { id: 'u4', name: 'Ultima Super Starter Pellete', price: 22900, unit: '25kg Bag', img: 'static/images/feeds/ultima/super_starter.jpeg' },
  { id: 'u5', name: 'Ultima Starter', price: 22450, unit: '25kg Bag', img: 'static/images/feeds/ultima/starter.jpeg' },
  { id: 'u6', name: 'Ultima Finisher Pellete', price: 22250, unit: '25kg Bag', img: 'static/images/feeds/ultima/finisher.jpeg' },
  
  // other feeds (local feeds)
  { id: 'o1', name: 'Maize Bran', price: 20000, unit: '25kg Bag', img: 'static/images/feeds/other/maize.jpg' },
  { id: 'o2', name: 'Wheat Bran', price: 12500, unit: '25kg Bag', img: 'static/images/feeds/other/wheat.jpeg' },
];

const dayOldChicks = [
  { id: 'doc1', name: 'Day Old Chick - Broiler', price: 35000, unit: '1 Package 30 chicks', img: 'static/images/day_old/broiler.jpg' },
  { id: 'doc2', name: 'Day Old Chick - Maja', price: 30000, unit: '1 Package 30 chicks', img: 'static/images/day_old/maja.jpg' },
  { id: 'doc3', name: 'Day Old Chick - Layer', price: 32000, unit: '1 Package 30 chicks', img: 'static/images/day_old/layer.jpg' },
];

const grownChicks = [
  { id: 'g1', name: 'Broiler', price: 4500, unit: '1 Broiler Chicken', img: 'static/images/grown_chicks/broiler.jpg' },
  { id: 'g2', name: 'Maja', price: 12000, unit: '1 Maja Chicken', img: 'static/images/grown_chicks/maja.jpg' },
  { id: 'g3', name: 'Layer', price: 7000, unit: '1 Layer Chicken', img: 'static/images/grown_chicks/layer.jpg' },
  { id: 'g4', name: 'Cockerel', price: 11000, unit: '1 Cockerel', img: 'static/images/grown_chicks/cockerel.png' },
];

const drinkers = [
  { id: 'd1', name: '10 Liter Drinker', price: 2500, unit: '1 Piece', img: 'static/images/drinkers/10li.jpg' },
  { id: 'd2', name: '4 Liter Drinker', price: 1000, unit: '1 Piece', img: 'static/images/drinkers/4li.jpg' },
  { id: 'd3', name: '1/2 Liter Drinker', price: 800, unit: '1 Piece', img: 'static/images/drinkers/half_li.jpg' },
  { id: 'd4', name: 'Local Drinker', price: 2000, unit: '1 Piece', img: 'https://images.unsplash.com/photo-1602016753527-f48d14de3cd7?auto=format&fit=crop&w=800&q=60' }
  ];

const feeders = [
  { id: 'f1', name: 'Super Feeder', price: 1000, unit: '1 Piece', img: 'https://images.unsplash.com/photo-1602016753527-f48d14de3cd7?auto=format&fit=crop&w=800&q=60' },
  { id: 'f2', name: 'Tray Feeder', price: 1000, unit: '1 Piece', img: 'https://images.unsplash.com/photo-1625745454310-9de2c4f2740d?auto=format&fit=crop&w=800&q=60' },
  { id: 'f3', name: 'Flip-Top Feeder', price: 1000, unit: '1 Set', img: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=60' }
];

const medics = [
  { id: 'p13', name: 'Poultry Vitamins', price: 1200, unit: 'Bottle', img: 'https://images.unsplash.com/photo-1615484478242-04e40e6b74a2?auto=format&fit=crop&w=800&q=60' },
  { id: 'p14', name: 'Vaccines', price: 2500, unit: 'Vial', img: 'https://images.unsplash.com/photo-1626178803751-41b1a086e404?auto=format&fit=crop&w=800&q=60' },
  { id: 'p15', name: 'Antibiotics', price: 2000, unit: 'Bottle', img: 'https://images.unsplash.com/photo-1617026068046-1bb5dc57a97b?auto=format&fit=crop&w=800&q=60' },
];

const eggs = [
  { id: 'e1', name: 'Chicken Eggs', price: 4800, unit: '1 Crate', img: 'static/images/eggs/eggs.jpg' },
  ]
  

const products = [
  ...feeds,
  ...dayOldChicks,
  ...grownChicks,
  ...drinkers,
  ...feeders,
  ...medics,
  ...eggs
];

// dom elements
const dayOldChicksGrid = document.getElementById('day-old-chicks-grid');
const grownChicksGrid = document.getElementById('grown-chicks-grid');
const feedsGrid = document.getElementById('feeds-grid');
const eggsGrid = document.getElementById('eggs-grid');
const medicinesGrid = document.getElementById('medicine-grid');
const feedersGrid = document.getElementById('feeders-grid');
const drinkersGrid = document.getElementById('drinkers-grid');
// const eggsGrid = document.getElementById('eggs-grid');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// cart
let cart = JSON.parse(localStorage.getItem('cart_v1') || '{}');
function saveCart(){ localStorage.setItem('cart_v1', JSON.stringify(cart)); }

// render products
function renderProducts(products, container){
  // console.log('rendering poultry drinkers...')
  container.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h4 class="local-h">${product.name}</h4>
      <div class="product-meta">
        <div class="muted">${product.unit}</div>
        <div class="muted"><span>&#8358;</span>${product.price.toFixed(2)}</div>
      </div>
      <div style="margin-top:0.6rem;display:flex;gap:0.5rem">
        <button class="btn" data-add="${product.id}">Add to cart</button>
  
      </div>
    `;
    container.appendChild(card);
  });
}

// update cart ui
function updateCartUI(){
  const qty = Object.values(cart).reduce((a,b)=>a+b,0);
  cartCount.textContent = qty;
  cartItems.innerHTML = '';
  let total = 0;
  if(qty===0){ 
    cartItems.innerHTML = '<p class="muted">No items in cart.</p>';
    cartTotal.textContent = '0.00'; 
    return; 
  }
  for(const id in cart){
    const p = products.find(x=>x.id===id);
    const q = cart[id];
    const row = document.createElement('div');
    row.style.display='flex';
    row.style.justifyContent='space-between';
    row.style.marginBottom='0.5rem';
    row.innerHTML = `<div>${p.name} × ${q}</div><div>$${(p.price*q).toFixed(2)}</div>`;
    cartItems.appendChild(row);
    total += p.price*q;
  }
  cartTotal.textContent = total.toFixed(2);
}

function addToCart(id){ cart[id] = (cart[id]||0)+1; saveCart(); updateCartUI(); }
function clearCart(){ cart = {}; saveCart(); updateCartUI(); }

// events
window.addEventListener('click', (e)=>{
  const a = e.target.closest('[data-add]');
  if(a){ addToCart(a.getAttribute('data-add')); }
});

document.getElementById('open-cart').addEventListener('click', ()=>{
  cartModal.setAttribute('aria-hidden','false');
});

document.getElementById('close-cart').addEventListener('click', ()=>{
  cartModal.setAttribute('aria-hidden','true');
});

document.getElementById('clear-cart').addEventListener('click', ()=>{ 
  const qty = Object.values(cart).reduce((a, b) => a + b, 0);
  
  if (qty === 0) {
    alert('No selected item to clear');
    return;
  }

  clearCart(); 
});

document.getElementById('checkout').addEventListener('click', ()=>{
  const qty = Object.values(cart).reduce((a, b) => a + b, 0);
  
  if (qty === 0) {
    alert('Your cart is empty. Please add items before checking out.');
    return;
  }
  // if not empty,checkout and clear it
  alert('Checked out successfully!');
  clearCart();
});

const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    menuToggle.addEventListener('click', ()=>{
      console.log("toggling nav bar...")
       if (nav.classList.contains("main-nav")) {
        nav.classList.replace("main-nav", "nav-open");
      } else {
        nav.classList.replace("nav-open", "main-nav");
      }
    });

// small helpers
document.getElementById('year').textContent = new Date().getFullYear();

renderProducts(dayOldChicks, dayOldChicksGrid);
renderProducts(grownChicks, grownChicksGrid);
renderProducts(eggs, eggsGrid);
renderProducts(feeds, feedsGrid);
renderProducts(medics, medicinesGrid);
renderProducts(feeders, feedersGrid);
renderProducts(drinkers, drinkersGrid);

updateCartUI();

