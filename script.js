const WHATSAPP_NUMBER = '201043626462';
const CART_STORAGE_KEY = 'kareem-cart';

const categories = [
    { id: 'shawarma', name: 'سندوتشات شاورما', anchor: 'shawarma-sandwiches' },
    { id: 'western_sandwich', name: 'سندوتشات الغربي', anchor: 'western-sandwiches' },
    { id: 'crepe', name: 'الكريبات', anchor: 'crepes' },
    { id: 'fatta', name: 'فتات الشاورما', anchor: 'fattah' },
    { id: 'arabic', name: 'العربي', anchor: 'arabi' },
    { id: 'western_meals', name: 'الغربي', anchor: 'western-plates' },
    { id: 'extras', name: 'الإضافات', anchor: 'sides-additions' },
];

const addons = [
    { name: 'تومية', price: 20 },
    { name: 'تومية حارة', price: 20 },
    { name: 'كولسلو', price: 35 },
    { name: 'باكت بطاطس', price: 25 },
    { name: 'صوص شيدر', price: 30 },
    { name: 'جبنة موزاريلا', price: 35 },
    { name: 'مياه صغيرة', price: 10 },
    { name: 'بيبسي', price: 25 },
];

const menuData = [
    { id: 1, category: 'shawarma', name: 'شاورما صغير', price: 35, desc: 'سندوتش شاورما' },
    { id: 2, category: 'shawarma', name: 'سوري L', price: 50, desc: 'شاورما سوري' },
    { id: 3, category: 'shawarma', name: 'سوري XL', price: 85, desc: 'شاورما سوري كبير' },
    { id: 4, category: 'shawarma', name: 'صاج', price: 120, desc: 'شاورما على الصاج' },
    { id: 5, category: 'western_sandwich', name: 'بطاطس', price: 30, desc: 'سندوتش بطاطس' },
    { id: 6, category: 'western_sandwich', name: 'بطاطس جبنة', price: 40, desc: 'سندوتش بطاطس بالجبنة' },
    { id: 7, category: 'western_sandwich', name: 'كرسبي', price: 75, desc: 'سندوتش كرسبي' },
    { id: 8, category: 'western_sandwich', name: 'زنجر', price: 80, desc: 'سندوتش زنجر' },
    { id: 9, category: 'crepe', name: 'بان كيك بارد', price: 70, desc: 'كريب بان كيك' },
    { id: 10, category: 'crepe', name: 'بان كيك حار', price: 75, desc: 'كريب بان كيك حار' },
    { id: 11, category: 'crepe', name: 'استربس بارد', price: 80, desc: 'كريب استربس بارد' },
    { id: 12, category: 'crepe', name: 'استربس حار', price: 85, desc: 'كريب استربس حار' },
    { id: 38, category: 'crepe', name: 'كرسبي', price: 85, desc: 'كريب كرسبي' },
    { id: 13, category: 'crepe', name: 'سوبر كرسبي', price: 90, desc: 'كريب سوبر كرسبي' },
    { id: 14, category: 'crepe', name: 'زنجر', price: 90, desc: 'كريب زنجر' },
    { id: 15, category: 'crepe', name: 'تشيكن', price: 110, desc: 'كريب تشيكن' },
    { id: 16, category: 'crepe', name: 'شاورما', price: 110, desc: 'كريب شاورما' },
    { id: 17, category: 'crepe', name: 'مشكل فراخ', price: 125, desc: 'كريب مشكل فراخ' },
    { id: 18, category: 'crepe', name: 'السوري', price: 100, desc: 'كريب سوري' },
    { id: 19, category: 'fatta', name: 'ريزو شاورما', price: 75, desc: 'ريزو شاورما' },
    { id: 20, category: 'fatta', name: 'فتة شاورما وسط', price: 120, desc: 'فتة شاورما' },
    { id: 21, category: 'fatta', name: 'فتة شاورما كبير', price: 150, desc: 'فتة شاورما كبيرة' },
    { id: 39, category: 'fatta', name: 'فتة السوري', price: 180, desc: 'فتة شاورما سورية' },
    { id: 22, category: 'arabic', name: 'وجبة عربي سنجل', price: 115, desc: 'وجبة عربي سنجل' },
    { id: 23, category: 'arabic', name: 'وجبة عربي دبل', price: 140, desc: 'وجبة عربي دبل' },
    { id: 24, category: 'arabic', name: 'وجبة عائلي', price: 200, desc: 'وجبة عربي عائلي' },
    { id: 25, category: 'western_meals', name: 'ريزو كرسبي', price: 80, desc: 'ريزو كرسبي' },
    { id: 26, category: 'western_meals', name: 'وجبة كرسبي', price: 135, desc: 'وجبة كرسبي' },
    { id: 27, category: 'western_meals', name: 'وجبة زنجر', price: 135, desc: 'وجبة زنجر' },
    { id: 28, category: 'western_meals', name: 'وجبة تشيكن', price: 140, desc: 'وجبة تشيكن' },
    { id: 29, category: 'western_meals', name: 'وجبة هافينيا', price: 150, desc: 'وجبة هافينيا' },
    { id: 30, category: 'extras', name: 'تومية', price: 20, desc: 'إضافة' },
    { id: 31, category: 'extras', name: 'تومية حارة', price: 20, desc: 'إضافة' },
    { id: 32, category: 'extras', name: 'كولسلو', price: 35, desc: 'إضافة' },
    { id: 33, category: 'extras', name: 'باكت بطاطس', price: 25, desc: 'إضافة' },
    { id: 34, category: 'extras', name: 'صوص شيدر', price: 30, desc: 'إضافة' },
    { id: 35, category: 'extras', name: 'جبنة موزاريلا', price: 35, desc: 'إضافة' },
    { id: 36, category: 'extras', name: 'مياه صغيرة', price: 10, desc: 'إضافة' },
    { id: 37, category: 'extras', name: 'بيبسي', price: 25, desc: 'إضافة' },
];

const productImages = {
    1: 'assets/food/shawarma-small.jpg',
    2: 'assets/food/shawarma-large.jpg',
    3: 'assets/food/shawarma-xl.jpg',
    4: 'assets/food/saj.jpg',
    19: 'assets/food/fattah.jpg',
    20: 'assets/food/fattah.jpg',
    21: 'assets/food/fattah.jpg',
    39: 'assets/food/fattah.jpg',
    33: 'assets/food/fries.jpg',
};

let cart = loadCart();
let activeProduct = null;
let editLineId = null;
let modalQuantity = 1;
let selectedAddons = new Set();

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    })[character]);
}

function formatPrice(value) {
    return `${Number(value) || 0} ج.م`;
}

function renderProductImage(image, alt, imageClass) {
    return `
        ${image ? `<img class="${imageClass}" src="${image}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false">` : ''}
        <span class="${image ? 'hidden' : ''} absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <span class="material-symbols-outlined text-3xl text-secondary/60">restaurant</span>
        </span>
    `;
}

function parsePrice(value) {
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    const parsed = Number.parseFloat(String(value).replace(/[^\d.]/g, ''));
    return Number.isFinite(parsed) ? parsed : 0;
}

function loadCart() {
    try {
        const stored = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
        if (!Array.isArray(stored)) throw new TypeError('Cart storage must contain an array.');
        return stored.filter(line => line && typeof line.name === 'string').map((line, index) => ({
            lineId: String(line.lineId || line.id || `legacy-${index}`),
            productId: Number(line.productId) || null,
            name: line.name,
            basePrice: parsePrice(line.basePrice ?? line.price),
            unitPrice: parsePrice(line.unitPrice ?? line.price),
            quantity: Math.min(99, Math.max(1, Number.parseInt(line.quantity ?? line.qty, 10) || 1)),
            addons: Array.isArray(line.addons) ? line.addons.filter(addon => typeof addon === 'string') : [],
            note: typeof line.note === 'string' ? line.note : '',
        }));
    } catch (error) {
        console.error('تعذر قراءة السلة المحفوظة:', error);
        showCheckoutError('تعذر قراءة السلة المحفوظة. أضف الأصناف من جديد قبل متابعة الطلب.');
        return [];
    }
}

function persistCart() {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        clearCheckoutError();
        return true;
    } catch (error) {
        console.error('تعذر حفظ السلة:', error);
        showCheckoutError('تعذر حفظ السلة على هذا الجهاز. يمكنك متابعة الطلب الحالي، لكن لا تغلق الصفحة قبل الإرسال.');
        return false;
    }
}

function showCheckoutError(message) {
    let target = document.getElementById('checkout-error');
    if (!target) {
        target = document.createElement('div');
        target.id = 'checkout-error';
        target.className = 'fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-xl rounded-xl border border-error/30 bg-error-container p-4 text-body-sm font-body-sm text-on-error-container shadow-xl';
        target.setAttribute('role', 'alert');
        target.setAttribute('aria-live', 'assertive');
        document.body.append(target);
    }
    target.textContent = message;
    target.classList.remove('hidden');
}

function clearCheckoutError() {
    const target = document.getElementById('checkout-error');
    if (target) {
        target.textContent = '';
        target.classList.add('hidden');
    }
}

function getCartQuantity() {
    return cart.reduce((sum, line) => sum + line.quantity, 0);
}

function getCartTotal() {
    return cart.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0);
}

function renderCategoryNavigation() {
    const nav = document.querySelector('#menu-catalog nav');
    if (!nav) return;
    nav.innerHTML = categories.map((category, index) => `
        <a
            class="category-link relative shrink-0 pb-2 text-title-md font-title-md transition-colors ${index === 0 ? 'is-active' : ''}"
            href="#${category.anchor}"
            aria-current="${index === 0 ? 'true' : 'false'}"
        >${category.name}</a>
    `).join('');
}

function renderProductCard(item) {
    const image = productImages[item.id];
    return `
        <article class="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow">
            <div class="w-full sm:w-40 h-40 rounded-xl overflow-hidden relative shrink-0 bg-surface-container">
                ${renderProductImage(image, item.name, 'absolute inset-0 h-full w-full object-cover')}
            </div>
            <div class="flex-1 flex flex-col justify-between min-w-0">
                <div>
                    <div class="flex items-start justify-between gap-2 mb-1">
                        <h3 class="text-title-lg font-title-lg text-on-background font-bold">${escapeHtml(item.name)}</h3>
                        <span class="text-headline-md font-headline-md text-primary font-extrabold whitespace-nowrap">${formatPrice(item.price)}</span>
                    </div>
                    <p class="text-body-md font-body-md text-on-surface-variant line-clamp-2 mb-3">${escapeHtml(item.desc)}</p>
                </div>
                <div class="flex items-center justify-between pt-2 border-t border-outline-variant/20 gap-2">
                    <span class="text-label-sm font-label-sm text-on-surface-variant">${item.category === 'extras' ? 'إضافة مباشرة' : 'يمكن تخصيص الإضافات'}</span>
                    <button class="h-11 px-4 rounded-xl bg-primary-container text-on-primary hover:bg-primary active:scale-95 transition-all text-label-lg font-label-lg font-bold flex items-center gap-1.5 shadow-sm" type="button" data-add-item="${item.id}">
                        <span class="material-symbols-outlined" aria-hidden="true">add</span>
                        <span>أضف للطلب</span>
                    </button>
                </div>
            </div>
        </article>
    `;
}

function renderCatalog() {
    const main = document.querySelector('main');
    const catalogNav = document.getElementById('menu-catalog');
    if (!main || !catalogNav) return;

    const hero = [...main.children].find(element => element.querySelector('h1'));
    const contact = document.getElementById('contact-info');
    [...main.children].forEach(element => {
        if (element !== hero && element !== catalogNav && element !== contact) element.remove();
    });

    renderCategoryNavigation();
    const catalog = document.createElement('div');
    catalog.id = 'catalog-sections';
    catalog.className = 'space-y-10 mb-12';
    catalog.innerHTML = categories.map(category => {
        const products = menuData.filter(item => item.category === category.id);
        return `
            <section id="${category.anchor}" class="scroll-mt-36">
                <div class="flex items-center justify-between gap-3 mb-4">
                    <div>
                        <h2 class="text-headline-md font-headline-md text-primary">${category.name}</h2>
                        <p class="text-body-sm font-body-sm text-on-surface-variant">${products.length} أصناف</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${products.map(renderProductCard).join('')}</div>
            </section>
        `;
    }).join('');
    catalogNav.after(catalog);

    navClickHandlers();
    const requestedCategory = new URLSearchParams(location.search).get('category');
    const requested = categories.find(category => category.id === requestedCategory);
    if (requested) {
        requestAnimationFrame(() => document.getElementById(requested.anchor)?.scrollIntoView());
    }
}

function navClickHandlers() {
    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', event => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;
            event.preventDefault();
            history.replaceState(null, '', link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function updateActiveCategory() {
    const sections = categories.map(category => ({
        category,
        element: document.getElementById(category.anchor),
    })).filter(entry => entry.element);
    const selected = sections.find(entry => {
        const rect = entry.element.getBoundingClientRect();
        return rect.top <= 180 && rect.bottom > 180;
    }) || sections.find(entry => entry.element.getBoundingClientRect().top > 0) || sections[sections.length - 1];
    if (!selected) return;
    document.querySelectorAll('.category-link').forEach(link => {
        const active = link.getAttribute('href') === `#${selected.category.anchor}`;
        link.classList.toggle('is-active', active);
        link.setAttribute('aria-current', active ? 'true' : 'false');
    });
}

function ensureProductModal() {
    if (document.getElementById('product-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'product-modal';
    modal.className = 'fixed inset-0 z-[70] hidden';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'modal-product-name');
    modal.innerHTML = `
        <button class="absolute inset-0 bg-black/50 backdrop-blur-sm" type="button" data-close-modal aria-label="إغلاق التخصيص"></button>
        <section class="absolute bottom-0 left-0 right-0 mx-auto flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-outline-variant/50 bg-surface shadow-2xl md:bottom-1/2 md:translate-y-1/2 md:rounded-2xl">
            <header class="flex items-center justify-between gap-4 border-b border-outline-variant/40 px-5 py-4">
                <div>
                    <span class="text-label-sm font-label-sm text-secondary">تخصيص وجبتك</span>
                    <h2 id="modal-product-name" class="text-headline-md font-headline-md font-bold text-primary"></h2>
                </div>
                <button class="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-primary" type="button" data-close-modal aria-label="إغلاق">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </header>
            <div class="overflow-y-auto p-4 sm:p-6">
                <div class="mb-5 rounded-2xl border border-outline-variant/40 bg-surface-container-low p-4">
                    <div id="modal-product-image" class="relative mb-4 h-48 w-full overflow-hidden rounded-xl bg-surface-container">
                        ${renderProductImage(null, '', 'absolute inset-0 h-full w-full object-cover')}
                    </div>
                    <div class="flex items-start justify-between gap-3">
                        <div>
                            <h3 id="modal-product-title" class="text-title-lg font-title-lg font-bold text-primary"></h3>
                            <p id="modal-product-description" class="mt-1 text-body-md text-on-surface-variant"></p>
                        </div>
                        <span id="modal-product-price" class="shrink-0 font-bold text-primary"></span>
                    </div>
                </div>
                <fieldset>
                    <legend class="mb-3 text-title-md font-title-md font-bold text-primary">إضافات اختيارية</legend>
                    <div id="modal-addons" class="grid gap-2 sm:grid-cols-2"></div>
                </fieldset>
                <label for="modal-note" class="mt-5 block text-title-md font-title-md font-bold text-primary">ملاحظة على الصنف (اختياري)</label>
                <textarea id="modal-note" class="mt-2 w-full rounded-xl border border-outline-variant bg-surface-container-lowest p-3 text-body-md text-on-surface focus:border-primary focus:outline-none" rows="2" maxlength="160" placeholder="اكتب أي ملاحظة خاصة بهذا الصنف"></textarea>
                <div class="mt-5 flex items-center justify-between rounded-xl border border-outline-variant bg-surface-container-low p-3">
                    <span class="font-bold text-primary">الكمية</span>
                    <div class="flex items-center gap-3">
                        <button class="h-10 w-10 rounded-full bg-surface-container-lowest text-primary" type="button" data-modal-quantity="-1" aria-label="تقليل الكمية">−</button>
                        <span id="modal-quantity" class="min-w-6 text-center font-bold">1</span>
                        <button class="h-10 w-10 rounded-full bg-primary-container text-surface" type="button" data-modal-quantity="1" aria-label="زيادة الكمية">+</button>
                    </div>
                </div>
            </div>
            <footer class="flex gap-3 border-t border-outline-variant/40 bg-surface px-4 py-3">
                <button class="rounded-xl border border-outline-variant px-5 py-3 font-bold text-primary" type="button" data-close-modal>إلغاء</button>
                <button id="modal-add-button" class="flex-1 rounded-xl bg-primary-container px-5 py-3 font-bold text-surface shadow-lg" type="button">إضافة إلى السلة</button>
            </footer>
        </section>
    `;
    document.body.append(modal);
}

function openProductModal(productId, lineId = null) {
    activeProduct = menuData.find(item => item.id === Number(productId));
    if (!activeProduct) {
        showCheckoutError('تعذر العثور على الصنف. حدّث الصفحة وحاول مرة أخرى.');
        return;
    }
    editLineId = lineId;
    modalQuantity = 1;
    selectedAddons = new Set();
    const existing = lineId ? cart.find(line => line.lineId === lineId) : null;
    if (existing) {
        modalQuantity = existing.quantity;
        selectedAddons = new Set(existing.addons);
    }
    document.getElementById('modal-product-name').textContent = activeProduct.name;
    document.getElementById('modal-product-title').textContent = activeProduct.name;
    document.getElementById('modal-product-description').textContent = activeProduct.desc;
    document.getElementById('modal-product-price').textContent = formatPrice(activeProduct.price);
    const image = productImages[activeProduct.id];
    document.getElementById('modal-product-image').innerHTML = renderProductImage(
        image,
        activeProduct.name,
        'absolute inset-0 h-full w-full object-cover',
    );
    document.getElementById('modal-note').value = existing?.note || '';
    document.getElementById('modal-addons').innerHTML = addons.map((addon, index) => `
        <label class="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-outline-variant bg-surface-container-lowest p-3 transition hover:bg-surface-container-low">
            <span class="flex items-center gap-2">
                <input class="h-5 w-5 accent-primary" type="checkbox" data-addon-index="${index}" ${selectedAddons.has(addon.name) ? 'checked' : ''}>
                <span class="text-body-md text-on-surface">${addon.name}</span>
            </span>
            <span class="text-label-md font-label-md font-bold text-primary">+ ${formatPrice(addon.price)}</span>
        </label>
    `).join('');
    document.getElementById('product-modal').classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    updateModalTotal();
    document.querySelector('#product-modal [data-close-modal]')?.focus();
}

function closeProductModal() {
    document.getElementById('product-modal')?.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    activeProduct = null;
    editLineId = null;
}

function updateModalTotal() {
    if (!activeProduct) return;
    selectedAddons = new Set([...document.querySelectorAll('[data-addon-index]:checked')].map(input => addons[Number(input.dataset.addonIndex)].name));
    const addonsTotal = addons.filter(addon => selectedAddons.has(addon.name)).reduce((sum, addon) => sum + addon.price, 0);
    const total = (activeProduct.price + addonsTotal) * modalQuantity;
    document.getElementById('modal-quantity').textContent = modalQuantity;
    document.getElementById('modal-add-button').textContent = `${editLineId ? 'حفظ التعديلات' : 'إضافة إلى السلة'} · ${formatPrice(total)}`;
}

function addProductToCart() {
    if (!activeProduct) return;
    const selected = addons.filter(addon => selectedAddons.has(addon.name));
    const basePrice = activeProduct.price;
    const unitPrice = basePrice + selected.reduce((sum, addon) => sum + addon.price, 0);
    const line = {
        lineId: editLineId || `${activeProduct.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        productId: activeProduct.id,
        name: activeProduct.name,
        basePrice,
        unitPrice,
        quantity: modalQuantity,
        addons: selected.map(addon => addon.name),
        note: document.getElementById('modal-note').value.trim(),
    };
    if (editLineId) {
        cart = cart.map(existing => existing.lineId === editLineId ? line : existing);
    } else {
        cart.push(line);
    }
    persistCart();
    renderCart();
    closeProductModal();
}

function addSimpleProduct(product) {
    cart.push({
        lineId: `${product.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        productId: product.id,
        name: product.name,
        basePrice: product.price,
        unitPrice: product.price,
        quantity: 1,
        addons: [],
        note: '',
    });
    persistCart();
    renderCart();
}

function renderCart() {
    const quantity = getCartQuantity();
    const total = getCartTotal();
    const summary = document.getElementById('cart-summary');
    if (summary) {
        summary.classList.toggle('hidden', quantity === 0);
        const countLabel = document.getElementById('cart-summary-count');
        const totalLabel = document.getElementById('cart-summary-total');
        if (countLabel) countLabel.textContent = `${quantity} ${quantity === 1 ? 'صنف' : 'أصناف'} في السلة`;
        if (totalLabel) totalLabel.textContent = String(total);
    }

    const cartItems = document.getElementById('cart-items');
    const demoItems = document.getElementById('demo-cart-items');
    if (demoItems) demoItems.remove();
    if (!cartItems) return;

    cartItems.innerHTML = cart.map(line => {
        const image = productImages[line.productId];
        const addonTags = line.addons.map(addon => `
            <span class="inline-flex items-center gap-1 rounded-full border border-outline-variant/50 bg-surface-container px-2 py-0.5 text-label-sm text-tertiary">
                <span class="h-1.5 w-1.5 rounded-full bg-tertiary-container"></span>${escapeHtml(addon)}
            </span>`).join('');
        return `
            <article class="flex flex-col gap-3 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-3.5 shadow-sm">
                <div class="flex items-start gap-3">
                    <div class="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container">
                        ${renderProductImage(image, line.name, 'absolute inset-0 h-full w-full object-cover')}
                    </div>
                    <div class="min-w-0 flex-1">
                        <div class="flex items-start justify-between gap-2">
                            <h3 class="truncate font-bold text-on-surface">${escapeHtml(line.name)}</h3>
                            <span class="shrink-0 font-bold text-primary">${formatPrice(line.unitPrice)}</span>
                        </div>
                        ${addonTags ? `<div class="mt-2 flex flex-wrap gap-1.5">${addonTags}</div>` : ''}
                        ${line.note ? `<p class="mt-2 text-body-sm text-on-surface-variant">${escapeHtml(line.note)}</p>` : ''}
                    </div>
                </div>
                <div class="flex items-center justify-between border-t border-outline-variant/30 pt-2">
                    <div class="flex items-center gap-2">
                        ${line.productId && menuData.some(item => item.id === line.productId && item.category !== 'extras') ? `<button class="rounded-lg px-2 py-1 text-label-md font-bold text-secondary" type="button" data-edit-line="${escapeHtml(line.lineId)}">تعديل الإضافات</button>` : ''}
                        <button class="rounded-lg px-2 py-1 text-label-md text-outline hover:text-error" type="button" data-remove-line="${escapeHtml(line.lineId)}">حذف</button>
                    </div>
                    <div class="flex items-center gap-2 rounded-full border border-outline-variant/60 bg-surface-container-low px-1.5 py-0.5">
                        <button class="h-7 w-7 rounded-full bg-surface-container-lowest text-primary" type="button" data-change-quantity="-1" data-line-id="${escapeHtml(line.lineId)}" aria-label="تقليل الكمية">−</button>
                        <span class="w-8 text-center font-bold text-primary">${line.quantity}</span>
                        <button class="h-7 w-7 rounded-full bg-primary-container text-surface" type="button" data-change-quantity="1" data-line-id="${escapeHtml(line.lineId)}" aria-label="زيادة الكمية">+</button>
                    </div>
                </div>
            </article>
        `;
    }).join('');

    const emptyState = document.getElementById('empty-cart');
    if (emptyState) emptyState.classList.toggle('hidden', cart.length > 0);
    const count = document.getElementById('cart-count');
    if (count) count.textContent = `${quantity} ${quantity === 1 ? 'صنف' : 'أصناف'} مختارة`;
    const summaryCount = document.getElementById('summary-count');
    if (summaryCount) summaryCount.textContent = String(quantity);
    const subtotal = document.getElementById('subtotal');
    if (subtotal) subtotal.textContent = formatPrice(total);
    const orderTotal = document.getElementById('order-total');
    if (orderTotal) orderTotal.textContent = String(total);
    const stickyTotal = document.getElementById('submit-order-total');
    if (stickyTotal) stickyTotal.textContent = String(total);
    const submitButton = document.getElementById('submit-order');
    if (submitButton) submitButton.disabled = cart.length === 0;
    const customerForm = document.querySelector('[data-customer-form]');
    if (customerForm) customerForm.classList.toggle('opacity-50', cart.length === 0);
}

function changeCartQuantity(lineId, delta) {
    const line = cart.find(item => item.lineId === lineId);
    if (!line) return;
    line.quantity = Math.min(99, line.quantity + delta);
    if (line.quantity < 1) cart = cart.filter(item => item.lineId !== lineId);
    persistCart();
    renderCart();
}

function removeCartLine(lineId) {
    cart = cart.filter(item => item.lineId !== lineId);
    persistCart();
    renderCart();
}

function clearCart() {
    if (cart.length === 0) return;
    if (!window.confirm('هل تريد إفراغ السلة؟')) return;
    cart = [];
    persistCart();
    renderCart();
}

function switchOrderType(type) {
    const delivery = type === 'delivery';
    const deliveryButton = document.getElementById('tab-delivery');
    const pickupButton = document.getElementById('tab-pickup');
    const address = document.getElementById('delivery-address-container');
    if (!deliveryButton || !pickupButton || !address) return;

    deliveryButton.classList.toggle('bg-primary-container', delivery);
    deliveryButton.classList.toggle('text-surface', delivery);
    deliveryButton.classList.toggle('text-on-surface-variant', !delivery);
    pickupButton.classList.toggle('bg-primary-container', !delivery);
    pickupButton.classList.toggle('text-surface', !delivery);
    pickupButton.classList.toggle('text-on-surface-variant', delivery);
    deliveryButton.setAttribute('aria-pressed', String(delivery));
    pickupButton.setAttribute('aria-pressed', String(!delivery));
    address.classList.toggle('hidden', !delivery);
    document.querySelectorAll('input[name="orderType"]').forEach(input => {
        input.checked = (input.value === type);
    });
    clearCheckoutError();
}

function normalizeEgyptianMobile(value) {
    const digits = String(value).replace(/[٠-٩]/g, digit => String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit))).replace(/[^\d]/g, '');
    if (/^01[0125]\d{8}$/.test(digits)) return `20${digits.slice(1)}`;
    if (/^201[0125]\d{8}$/.test(digits)) return digits;
    if (/^00201[0125]\d{8}$/.test(digits)) return digits.slice(2);
    return null;
}

function submitOrder() {
    clearCheckoutError();
    if (cart.length === 0) {
        showCheckoutError('سلتك فارغة. أضف صنفًا واحدًا على الأقل قبل متابعة الطلب.');
        return;
    }
    const nameInput = document.getElementById('cust-name');
    const phoneInput = document.getElementById('cust-phone');
    const addressInput = document.getElementById('cust-address');
    const orderType = document.getElementById('tab-pickup')?.getAttribute('aria-pressed') === 'true' ? 'pickup' : 'delivery';
    const name = nameInput?.value.trim() || '';
    const phone = phoneInput?.value.trim() || '';
    const normalizedPhone = normalizeEgyptianMobile(phone);
    const address = addressInput?.value.trim() || '';

    if (!name) {
        showCheckoutError('اكتب الاسم بالكامل للمتابعة.');
        nameInput?.focus();
        return;
    }
    if (!normalizedPhone) {
        showCheckoutError('اكتب رقم موبايل مصري صحيحًا مكوّنًا من 11 رقمًا.');
        phoneInput?.focus();
        return;
    }
    if (orderType === 'delivery' && !address) {
        showCheckoutError('اكتب عنوان التوصيل بالتفصيل.');
        addressInput?.focus();
        return;
    }

    const building = document.getElementById('building-num')?.value.trim() || '';
    const floor = document.getElementById('floor-flat')?.value.trim() || '';
    const orderNote = document.getElementById('order-notes')?.value.trim() || '';
    const addressDetails = [address, building && `رقم العمارة: ${building}`, floor && `الدور والشقة: ${floor}`].filter(Boolean).join('، ');
    const lines = [
        '*طلب جديد من مطعم كريم السوري*',
        '--------------------------',
        `الاسم: ${name}`,
        `رقم التواصل: ${phone}`,
        `طريقة الاستلام: ${orderType === 'delivery' ? 'توصيل للمنزل' : 'استلام من الفرع'}`,
    ];
    if (orderType === 'delivery') lines.push(`العنوان: ${addressDetails}`);
    lines.push('', '*الأصناف:*');
    cart.forEach(line => {
        lines.push(`- ${line.name} × ${line.quantity} — ${line.unitPrice * line.quantity} ج.م`);
        if (line.addons.length) lines.push(`  الإضافات: ${line.addons.join('، ')}`);
        if (line.note) lines.push(`  ملاحظة الصنف: ${line.note}`);
    });
    if (orderNote) lines.push(`ملاحظة الطلب: ${orderNote}`);
    lines.push('--------------------------', `الإجمالي الحالي: ${getCartTotal()} ج.م`, 'رسوم التوصيل غير مشمولة إن وجدت.');

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

function bindPageInteractions() {
    renderCatalog();
    ensureProductModal();
    renderCart();

    document.addEventListener('click', event => {
        const addButton = event.target.closest('[data-add-item]');
        if (addButton) {
            const product = menuData.find(item => item.id === Number(addButton.dataset.addItem));
            if (product?.category === 'extras') addSimpleProduct(product);
            else openProductModal(addButton.dataset.addItem);
            return;
        }
        if (event.target.closest('[data-close-modal]')) {
            closeProductModal();
            return;
        }
        const quantityButton = event.target.closest('[data-modal-quantity]');
        if (quantityButton) {
            modalQuantity = Math.min(99, Math.max(1, modalQuantity + Number(quantityButton.dataset.modalQuantity)));
            updateModalTotal();
            return;
        }
        const addToCartButton = event.target.closest('#modal-add-button');
        if (addToCartButton) {
            addProductToCart();
            return;
        }
        const changeButton = event.target.closest('[data-change-quantity]');
        if (changeButton) {
            changeCartQuantity(changeButton.dataset.lineId, Number(changeButton.dataset.changeQuantity));
            return;
        }
        const removeButton = event.target.closest('[data-remove-line]');
        if (removeButton) {
            removeCartLine(removeButton.dataset.removeLine);
            return;
        }
        const editButton = event.target.closest('[data-edit-line]');
        if (editButton) {
            const line = cart.find(item => item.lineId === editButton.dataset.editLine);
            if (line) openProductModal(line.productId, line.lineId);
            return;
        }
        if (event.target.closest('#submit-order')) submitOrder();
    });

    document.addEventListener('change', event => {
        if (event.target.matches('[data-addon-index]')) updateModalTotal();
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeProductModal();
    });

    document.getElementById('tab-delivery')?.addEventListener('click', () => switchOrderType('delivery'));
    document.getElementById('tab-pickup')?.addEventListener('click', () => switchOrderType('pickup'));
    if (document.getElementById('tab-delivery')) switchOrderType('delivery');

    window.addEventListener('scroll', updateActiveCategory, { passive: true });

    const edit = new URLSearchParams(location.search).get('edit');
    if (edit && document.getElementById('menu-catalog')) {
        const line = cart.find(item => item.lineId === edit);
        if (line?.productId) openProductModal(line.productId, line.lineId);
    }
}

document.addEventListener('DOMContentLoaded', bindPageInteractions);

window.clearCart = clearCart;
window.switchOrderType = switchOrderType;
window.submitOrder = submitOrder;
