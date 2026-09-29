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

// --- ÁREA SECRETA DO BARROSÃO ---
const btnBarrosao = document.getElementById('btn-barrosao');
const secretModal = document.getElementById('barrosao-secret-modal');

btnBarrosao.addEventListener('click', () => {
    secretModal.style.display = 'flex';
});

function closeBarrosaoSecret() {
    secretModal.style.display = 'none';
}

// Fechar modais clicando fora da caixa
window.onclick = function(event) {
    const playerModal = document.getElementById('player-modal');
    if (event.target === playerModal) {
        closePlayerModal();
    }
    if (event.target === secretModal) {
        closeBarrosaoSecret();
    }
}

// --- CARRINHO DA LOJA SIMULADO ---
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartUI();
}

function updateCartUI() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    
    cartItemsList.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li style="color: #888; font-size: 0.9rem;">Carrinho vazio.</li>';
        cartTotalPrice.innerText = 'R$ 0,00';
        return;
    }

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.name}</span> <span>R$ ${item.price.toFixed(2)}</span>`;
        cartItemsList.appendChild(li);
    });

    cartTotalPrice.innerText = `R$ ${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert('Compra simulada finalizada com sucesso! O Atlético Barreiraense agradece o seu apoio financeiro ao universo.');
    cart = [];
    updateCartUI();
}