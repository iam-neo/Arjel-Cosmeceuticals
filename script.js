// ========== NAVBAR SCROLL ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ========== MOBILE MENU ==========
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  if (window.innerWidth <= 768) {
    Object.assign(navLinks.style, {
      position: 'absolute', top: '100%', left: 0, right: 0,
      background: 'rgba(255,255,255,.97)', backdropFilter: 'blur(20px)',
      flexDirection: 'column', padding: '24px', gap: '20px',
      boxShadow: '0 8px 32px rgba(0,0,0,.1)', borderRadius: '0 0 16px 16px'
    });
  }
});

// ========== SCROLL REVEAL ==========
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.88;
  revealElements.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) el.classList.add('visible');
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ========== CART ==========
let cartItems = [];
const cartCount = document.getElementById('cartCount');
document.querySelectorAll('.product-add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.product;
    const price = parseInt(btn.dataset.price);
    cartItems.push({ name, price });
    cartCount.textContent = cartItems.length;
    cartCount.style.transform = 'scale(1.4)';
    setTimeout(() => cartCount.style.transform = 'scale(1)', 200);
    // Button feedback
    const orig = btn.innerHTML;
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg> Added!';
    btn.style.background = '#22C55E';
    setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; }, 1500);
  });
});

// ========== ROUTINE BUILDER ==========
const routineSteps = document.querySelectorAll('.routine-step');
const routineResult = document.getElementById('routineResult');
const selections = {};

// Routine data
const routines = {
  'oily-acne-minimal': [
    { step: 'Cleanse', name: 'Salicylic Acid Cleanser', price: '₹449', img: 'images/product-cleanser.png' },
    { step: 'Treat', name: 'Niacinamide Clarity Serum', price: '₹649', img: 'images/hero-product.png' },
    { step: 'Protect', name: 'Invisible UV Shield SPF 50', price: '₹599', img: 'images/product-sunscreen.png' }
  ],
  'oily-acne-full': [
    { step: 'Cleanse', name: 'Salicylic Acid Cleanser', price: '₹449', img: 'images/product-cleanser.png' },
    { step: 'Tone', name: 'Pore Refining Toner', price: '₹399', img: 'images/hero-product.png' },
    { step: 'Treat', name: 'Niacinamide Clarity Serum', price: '₹649', img: 'images/hero-product.png' },
    { step: 'Moisturize', name: 'Oil-Free Gel Moisturizer', price: '₹549', img: 'images/product-moisturizer.png' },
    { step: 'Protect', name: 'Invisible UV Shield SPF 50', price: '₹599', img: 'images/product-sunscreen.png' }
  ],
  'default-minimal': [
    { step: 'Cleanse', name: 'Gentle Cream Cleanser', price: '₹399', img: 'images/product-cleanser.png' },
    { step: 'Treat', name: 'Niacinamide Clarity Serum', price: '₹649', img: 'images/hero-product.png' },
    { step: 'Protect', name: 'Invisible UV Shield SPF 50', price: '₹599', img: 'images/product-sunscreen.png' }
  ],
  'default-full': [
    { step: 'Cleanse', name: 'Gentle Cream Cleanser', price: '₹399', img: 'images/product-cleanser.png' },
    { step: 'Tone', name: 'Hydrating Essence Toner', price: '₹449', img: 'images/hero-product.png' },
    { step: 'Treat', name: 'Vitamin C Glow Serum', price: '₹699', img: 'images/hero-product.png' },
    { step: 'Moisturize', name: 'Hydra-Barrier Moisturizer', price: '₹549', img: 'images/product-moisturizer.png' },
    { step: 'Protect', name: 'Invisible UV Shield SPF 50', price: '₹599', img: 'images/product-sunscreen.png' }
  ]
};

routineSteps.forEach(step => {
  step.querySelectorAll('.routine-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const stepNum = step.dataset.step;
      // Deselect siblings
      step.querySelectorAll('.routine-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selections[stepNum] = opt.dataset.value;

      // Advance to next step
      const nextStep = document.querySelector(`.routine-step[data-step="${parseInt(stepNum) + 1}"]`);
      if (nextStep) {
        routineSteps.forEach(s => s.classList.remove('active'));
        nextStep.classList.add('active');
      }

      // Show results if all answered
      if (selections['1'] && selections['2'] && selections['3']) {
        showRoutineResults();
      }
    });
  });

  step.querySelector('.routine-step-header').addEventListener('click', () => {
    routineSteps.forEach(s => s.classList.remove('active'));
    step.classList.add('active');
  });
});

function showRoutineResults() {
  const key1 = `${selections['1']}-${selections['2']}-${selections['3']}`;
  const key2 = `default-${selections['3']}`;
  const products = routines[key1] || routines[key2];

  routineResult.classList.add('has-results');
  routineResult.innerHTML = `
    <div class="routine-result-icon">✅</div>
    <h3>Your ${selections['3'] === 'minimal' ? '3-Step' : '5-Step'} Routine</h3>
    <p>Tailored for <strong>${selections['1']}</strong> skin with <strong>${selections['2']}</strong> concerns</p>
    <div class="routine-products">
      ${products.map(p => `
        <div class="routine-product">
          <div class="routine-product-img"><img src="${p.img}" alt="${p.name}"></div>
          <div>
            <div class="routine-product-step">${p.step}</div>
            <div class="routine-product-name">${p.name}</div>
            <div class="routine-product-price">${p.price}</div>
          </div>
        </div>
      `).join('')}
    </div>
    <button class="btn btn-primary" style="margin-top:20px;width:100%" onclick="addRoutineToCart()">Add Routine to Cart</button>
  `;
}

function addRoutineToCart() {
  const key1 = `${selections['1']}-${selections['2']}-${selections['3']}`;
  const key2 = `default-${selections['3']}`;
  const products = routines[key1] || routines[key2];
  products.forEach(p => {
    cartItems.push({ name: p.name, price: parseInt(p.price.replace(/[₹,]/g, '')) });
  });
  cartCount.textContent = cartItems.length;
  cartCount.style.transform = 'scale(1.4)';
  setTimeout(() => cartCount.style.transform = 'scale(1)', 200);
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile nav
      if (window.innerWidth <= 768) navLinks.style.display = 'none';
    }
  });
});

// ========== CONCERN CARDS INTERACTION ==========
document.querySelectorAll('.concern-card').forEach(card => {
  card.addEventListener('click', () => {
    const concern = card.dataset.concern;
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  });
});

// ========== COUNTER ANIMATION ==========
function animateCounters() {
  document.querySelectorAll('.hero-stat-value').forEach(el => {
    const text = el.textContent;
    const match = text.match(/(\d+)/);
    if (!match) return;
    const target = parseInt(match[0]);
    const suffix = text.replace(match[0], '');
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current) + suffix;
    }, 30);
  });
}
// Start counters when hero is visible
const heroObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { animateCounters(); heroObserver.disconnect(); }
  });
}, { threshold: 0.3 });
heroObserver.observe(document.getElementById('hero'));
