// --- MENU MOBILE HAMBÚRGUER ---
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar menu mobile ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- SISTEMA DE MODAL DO ELENCO (WIKIPÉDIA INTERNA) ---
function openPlayerModal(name, role, date, bio) {
    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-role').innerText = role;
    document.getElementById('modal-date').innerText = date;
    document.getElementById('modal-bio').innerText = bio;
    document.getElementById('player-modal').style.display = 'flex';
}

function closePlayerModal() {
    document.getElementById('player-modal').style.display = 'none';
}

// --- MODAL DA TIMELINE INTERATIVA ---
function openTimelineModal(title, desc) {
    document.getElementById('t-modal-title').innerText = title;
    document.getElementById('t-modal-desc').innerText = desc;
    document.getElementById('timeline-modal').style.display = 'flex';
}

function closeTimelineModal() {
    document.getElementById('timeline-modal').style.display = 'none';
}

// --- MODAL DO MAPA DA CASA BARROSA ---
function openCasaBarrosaModal() {
    document.getElementById('casa-modal').style.display = 'flex';
}

function closeCasaModal() {
    document.getElementById('casa-modal').style.display = 'none';
}

// --- ÁREA SECRETA DO BARROSÃO ---
const btnBarrosao = document.getElementById('btn-barrosao');
const secretModal = document.getElementById('barrosao-secret-modal');

btnBarrosao.addEventListener('click', () => {
    secretModal.style.display = 'flex';
});

function closeBarrosaoSecret() {
    secretModal.style.display = 'none';
}

// Fechar modais ao clicar fora da caixa central
window.onclick = function(event) {
    if (event.target === document.getElementById('player-modal')) closePlayerModal();
    if (event.target === document.getElementById('timeline-modal')) closeTimelineModal();
    if (event.target === document.getElementById('casa-modal')) closeCasaModal();
    if (event.target === secretModal) closeBarrosaoSecret();
}

// --- CARRINHO DA LOJA AVANÇADO ---
let cart = [];

function addCamisaToCart() {
    const sizeSelect = document.getElementById('size-camisa');
    const selectedSize = sizeSelect.value;
    const productName = `Camisa Oficial Atlético 2026 (Tam: ${selectedSize})`;
    const price = 199.90;
    
    cart.push({ name: productName, price: price });
    updateCartUI();
}

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartUI();
}

function updateCartUI() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartCount = document.getElementById('cart-count');
    
    cartItemsList.innerHTML = '';
    cartCount.innerText = cart.length;
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li style="color: #888; font-size: 0.85rem; text-align: center; padding: 10px 0;">Seu carrinho está vazio.</li>';
        cartTotalPrice.innerText = 'R$ 0,00';
        return;
    }

    let total = 0;
    cart.forEach((item) => {
        total += item.price;
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.name}</span> <span>R$ ${item.price.toFixed(2)}</span>`;
        cartItemsList.appendChild(li);
    });

    cartTotalPrice.innerText = `R$ ${total.toFixed(2)}`;
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert('Checkout simulado com sucesso! Os itens foram enviados para o centro de logística da Casa Barrosa.');
    cart = [];
    updateCartUI();
}