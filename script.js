function openModal(title, desc) {
    const titleEl = document.getElementById('gen-modal-title');
    const descEl = document.getElementById('gen-modal-desc');
    const modalEl = document.getElementById('general-modal');
    if (titleEl) titleEl.innerText = title;
    if (descEl) descEl.innerText = desc;
    if (modalEl) modalEl.style.display = 'flex';
}

function closeModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.style.display = 'none';
}

window.onclick = function(event) {
    const m = document.getElementById('general-modal');
    if (event.target === m) closeModal('general-modal');
}

function showToast(message) {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 2800);
}

// --- CARRINHO DE COMPRAS DA LOJA ---
let cart = [];
function addCamisaToCart() {
    const sizeSelect = document.getElementById('size-camisa');
    const size = sizeSelect ? sizeSelect.value : 'M';
    cart.push({ name: `Camisa Oficial 2026 (${size})`, price: 199.90 });
    updateCartUI();
    showToast('Camisa adicionada ao carrinho!');
}

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    updateCartUI();
    showToast(`${name} adicionado ao carrinho!`);
}

function updateCartUI() {
    const list = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total-price');
    const countEl = document.getElementById('cart-count');
    if (!list) return;
    list.innerHTML = '';
    if (countEl) countEl.innerText = cart.length;
    
    if (cart.length === 0) {
        list.innerHTML = '<li style="color:#7b8b95; text-align:center;">Carrinho vazio.</li>';
        if (totalEl) totalEl.innerText = 'R$ 0,00';
        return;
    }
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.name}</span> <span style="color:var(--dourado);">R$ ${item.price.toFixed(2)}</span>`;
        list.appendChild(li);
    });
    if (totalEl) totalEl.innerText = `R$ ${total.toFixed(2)}`;
}

function clearCart() {
    cart = [];
    updateCartUI();
    showToast('Carrinho esvaziado.');
}

function checkout() {
    if (cart.length === 0) { showToast('Seu carrinho está vazio!'); return; }
    showToast('Compra finalizada com sucesso! Glória ao Atlético!');
    cart = [];
    updateCartUI();
}