// --- FUNÇÕES UNIFICADAS DE MODAL E TOAST ---
function openModal(title, roleOrSub, desc) {
    const titleEl = document.getElementById('gen-modal-title');
    const roleEl = document.getElementById('gen-modal-role');
    const descEl = document.getElementById('gen-modal-desc');
    const modalEl = document.getElementById('general-modal');
    
    if (titleEl) titleEl.innerText = title;
    if (roleEl) {
        if (roleOrSub) {
            roleEl.innerText = roleOrSub;
            roleEl.style.display = 'inline-block';
        } else {
            roleEl.style.display = 'none';
        }
    }
    if (descEl) descEl.innerText = desc;
    if (modalEl) modalEl.style.display = 'flex';
}

function openNewsDetail(title, date, author, imgUrl, fullText) {
    document.getElementById('news-modal-title').innerText = title;
    document.getElementById('news-modal-date-author').innerText = `${date} • POR ${author.toUpperCase()}`;
    document.getElementById('news-modal-img').src = imgUrl;
    document.getElementById('news-modal-text').innerText = fullText;
    document.getElementById('news-modal').style.display = 'flex';
}

function closeModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.style.display = 'none';
}

window.onclick = function(event) {
    const genModal = document.getElementById('general-modal');
    const newsModal = document.getElementById('news-modal');
    if (event.target === genModal) closeModal('general-modal');
    if (event.target === newsModal) closeModal('news-modal');
}

function showToast(message) {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 2800);
}

// --- CONTROLE DA SIDEBAR DO CARRINHO ---
function toggleCartSidebar() {
    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

// --- CARRINHO DE COMPRAS DA LOJA ---
let cart = [];

function addCamisaToCart() {
    const sizeSelect = document.getElementById('size-camisa');
    const size = sizeSelect ? sizeSelect.value : 'M';
    cart.push({ name: `Camisa Oficial 2026 (${size})`, price: 199.90 });
    updateCartUI();
    showToast('Camisa adicionada ao carrinho!');
    toggleCartSidebar(); // Abre a aba lateral automaticamente
}

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    updateCartUI();
    showToast(`${name} adicionado ao carrinho!`);
    toggleCartSidebar(); // Abre a aba lateral automaticamente
}

function updateCartUI() {
    const list = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total-price');
    const countEl = document.getElementById('cart-count');
    if (!list) return;
    list.innerHTML = '';
    if (countEl) countEl.innerText = cart.length;
    
    if (cart.length === 0) {
        list.innerHTML = '<li style="color:#7b8b95; text-align:center;">Seu carrinho está vazio.</li>';
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
    toggleCartSidebar(); // Fecha o carrinho após finalizar
}

// --- TRANSIÇÃO SUAVE ENTRE PÁGINAS ---
document.addEventListener("DOMContentLoaded", () => {
    const internalLinks = document.querySelectorAll("a[href$='.html']");

    internalLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            const targetUrl = this.getAttribute("href");
            if (!targetUrl || targetUrl.startsWith("http") || targetUrl.startsWith("#")) return;

            e.preventDefault();
            document.body.classList.add("page-fade-out");

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300);
        });
    });
});