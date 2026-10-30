
// ==========================================
// --- رقم الواتساب اللي الطلبات بتتبعت عليه ---
// (صيغة دولية من غير + أو 00، لمصر 20 قبل رقم الموبايل بدون الصفر)
// ==========================================
const WA_NUMBER = "201043626402";
const PLACEHOLDER_IMAGE = "images/placeholder.jpg";

// ==========================================
// --- 1. البيانات (Data) - محدثة بأيقونات السعادة ---
// ==========================================

const mainSections = [
    { id: 'shawarma_sandwiches', name: 'سندوتشات شاورما', image: PLACEHOLDER_IMAGE },
    { id: 'western_sandwiches', name: 'سندوتشات الغربي', image: PLACEHOLDER_IMAGE },
    { id: 'crepes', name: 'الكريبات', image: PLACEHOLDER_IMAGE },
    { id: 'fattet', name: 'فتات الشاورما', image: PLACEHOLDER_IMAGE },
    { id: 'meals', name: 'العربي والغربي', image: PLACEHOLDER_IMAGE },
    { id: 'sides_extras', name: 'الإضافات', image: PLACEHOLDER_IMAGE }
];

const categories = [
    { id: 'shawarma', name: 'سندوتشات شاورما', icon: 'fas fa-hotdog', sectionId: 'shawarma_sandwiches' },
    { id: 'western_sandwich', name: 'سندوتشات الغربي', icon: 'fas fa-hamburger', sectionId: 'western_sandwiches' },
    { id: 'crepe', name: 'الكريبات', icon: 'fas fa-cookie', sectionId: 'crepes' },
    { id: 'fatta', name: 'فتات الشاورما', icon: 'fas fa-utensils', sectionId: 'fattet' },
    { id: 'arabic', name: 'العربي', icon: 'fas fa-bread-slice', sectionId: 'meals' },
    { id: 'western_meals', name: 'الغربي', icon: 'fas fa-drumstick-bite', sectionId: 'meals' },
    { id: 'extras', name: 'الإضافات', icon: 'fas fa-plus-square', sectionId: 'sides_extras' },
];

const commonExtras = [
    { name: 'تونة', price: 10 },
    { name: 'توسعة جبن كريم', price: 15 },
    { name: 'كول سلو', price: 15 },
    { name: 'باكت بطاطس', price: 15 },
    { name: 'شيبس كمون', price: 20 },
    { name: 'جبن موزاريلا', price: 20 },
    { name: 'بيض مسلوق', price: 15 },
    { name: 'جبنة رومي', price: 10 }
];

const crepeOnlyExtras = [];

const menuData = [
    { id: 1, category: 'shawarma', name: 'شاورما صغير', price: 35, desc: 'سندوتش شاورما', image: PLACEHOLDER_IMAGE },
    { id: 2, category: 'shawarma', name: 'سوري L', price: 50, desc: 'شاورما سوري', image: PLACEHOLDER_IMAGE },
    { id: 3, category: 'shawarma', name: 'سوري XL', price: 85, desc: 'شاورما سوري كبير', image: PLACEHOLDER_IMAGE },
    { id: 4, category: 'shawarma', name: 'صاج', price: 120, desc: 'شاورما على الصاج', image: PLACEHOLDER_IMAGE },

    { id: 5, category: 'western_sandwich', name: 'بطاطس', price: 30, desc: 'سندوتش بطاطس', image: PLACEHOLDER_IMAGE },
    { id: 6, category: 'western_sandwich', name: 'بطاطس جبنة', price: 40, desc: 'سندوتش بطاطس بالجبنة', image: PLACEHOLDER_IMAGE },
    { id: 7, category: 'western_sandwich', name: 'كرسبي', price: 80, desc: 'سندوتش كرسبي', image: PLACEHOLDER_IMAGE },
    { id: 8, category: 'western_sandwich', name: 'زنجر', price: 80, desc: 'سندوتش زنجر', image: PLACEHOLDER_IMAGE },

    { id: 9, category: 'crepe', name: 'بان كيك', price: 70, desc: 'كريب بان كيك', image: PLACEHOLDER_IMAGE },
    { id: 10, category: 'crepe', name: 'بان كيك حار', price: 75, desc: 'كريب بان كيك حار', image: PLACEHOLDER_IMAGE },
    { id: 11, category: 'crepe', name: 'سبيشال ران', price: 85, desc: 'كريب سبيشال ران', image: PLACEHOLDER_IMAGE },
    { id: 12, category: 'crepe', name: 'كريب كرسبي', price: 85, desc: 'كريب كرسبي', image: PLACEHOLDER_IMAGE },
    { id: 13, category: 'crepe', name: 'سوبر كرسبي', price: 90, desc: 'كريب سوبر كرسبي', image: PLACEHOLDER_IMAGE },
    { id: 14, category: 'crepe', name: 'كريب زنجر', price: 85, desc: 'كريب زنجر', image: PLACEHOLDER_IMAGE },
    { id: 15, category: 'crepe', name: 'كريب تشيكن', price: 80, desc: 'كريب تشيكن', image: PLACEHOLDER_IMAGE },
    { id: 16, category: 'crepe', name: 'كريب شاورما', price: 110, desc: 'كريب شاورما', image: PLACEHOLDER_IMAGE },
    { id: 17, category: 'crepe', name: 'مشكل فراخ', price: 125, desc: 'كريب مشكل فراخ', image: PLACEHOLDER_IMAGE },
    { id: 18, category: 'crepe', name: 'كريب سوري', price: 130, desc: 'كريب سوري', image: PLACEHOLDER_IMAGE },

    { id: 19, category: 'fatta', name: 'ريزو شاورما', price: 75, desc: 'ريزو شاورما', image: PLACEHOLDER_IMAGE },
    { id: 20, category: 'fatta', name: 'فتة شاورما وسط', price: 120, desc: 'فتة شاورما', image: PLACEHOLDER_IMAGE },
    { id: 21, category: 'fatta', name: 'فتة شاورما كبير', price: 180, desc: 'فتة شاورما كبيرة', image: PLACEHOLDER_IMAGE },

    { id: 22, category: 'arabic', name: 'ودنة عربي مشكل', price: 115, desc: 'ودنة عربي مشكل', image: PLACEHOLDER_IMAGE },
    { id: 23, category: 'arabic', name: 'ودنة عربي دبل', price: 140, desc: 'ودنة عربي دبل', image: PLACEHOLDER_IMAGE },
    { id: 24, category: 'arabic', name: 'ودنة عادي', price: 40, desc: 'ودنة عادي', image: PLACEHOLDER_IMAGE },

    { id: 25, category: 'western_meals', name: 'ريزو كرسبي', price: 80, desc: 'ريزو كرسبي', image: PLACEHOLDER_IMAGE },
    { id: 26, category: 'western_meals', name: 'ودنة كرسبي', price: 135, desc: 'ودنة كرسبي', image: PLACEHOLDER_IMAGE },
    { id: 27, category: 'western_meals', name: 'ودنة زنجر', price: 130, desc: 'ودنة زنجر', image: PLACEHOLDER_IMAGE },
    { id: 28, category: 'western_meals', name: 'ودنة تشيكن', price: 120, desc: 'ودنة تشيكن', image: PLACEHOLDER_IMAGE },
    { id: 29, category: 'western_meals', name: 'ودنة هافينيا', price: 130, desc: 'ودنة هافينيا', image: PLACEHOLDER_IMAGE },

    { id: 30, category: 'extras', name: 'تونة', price: 10, desc: 'إضافة', image: PLACEHOLDER_IMAGE },
    { id: 31, category: 'extras', name: 'توسعة جبن كريم', price: 15, desc: 'إضافة', image: PLACEHOLDER_IMAGE },
    { id: 32, category: 'extras', name: 'كول سلو', price: 15, desc: 'إضافة', image: PLACEHOLDER_IMAGE },
    { id: 33, category: 'extras', name: 'باكت بطاطس', price: 15, desc: 'إضافة', image: PLACEHOLDER_IMAGE },
    { id: 34, category: 'extras', name: 'شيبس كمون', price: 20, desc: 'إضافة', image: PLACEHOLDER_IMAGE },
    { id: 35, category: 'extras', name: 'جبن موزاريلا', price: 20, desc: 'إضافة', image: PLACEHOLDER_IMAGE },
    { id: 36, category: 'extras', name: 'بيض مسلوق', price: 15, desc: 'إضافة', image: PLACEHOLDER_IMAGE },
    { id: 37, category: 'extras', name: 'جبنة رومي', price: 10, desc: 'إضافة', image: PLACEHOLDER_IMAGE },
];

// ==========================================
// --- 2. متغيرات الحالة (State Variables) ---
// ==========================================

let cart = JSON.parse(localStorage.getItem('kareem-cart')) || [];
let currentSelectedItem = null;
let currentBasePrice = 0;
let currentProductExtras = []; 

// ==========================================
// --- 3. دوال عرض المنيو (Render Logic) ---
// ==========================================

// دالة التشغيل: بتعرض الأركان الرئيسية أول ما تفتح
function renderMainSections() {
    const container = document.getElementById('categories-wall');
    const grid = document.getElementById('menu-grid');

    if (!container) return;

    // تنظيف المنطقة السفلية
    grid.innerHTML = '';

    // ضبط حاوية الأزرار لتكون شبكة (2 بجانب بعض) لتناسب الموبايل وشكل المنيو
    // هذا السطر يضمن أن الأزرار تترتب بشكل جميل
    container.className = "grid grid-cols-2 sm:grid-cols-3 gap-4 p-2 w-full max-w-3xl mx-auto";

    const buttonsHTML = mainSections.map(section => `
        <button 
            onclick="selectSection('${section.id}')"
            class="relative group w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-white ring-2 ring-brand-spice/30 hover:ring-brand-spice transition-all duration-300 shadow-lg"
        >
            <img 
                src="${section.image}" 
                alt="${section.name}" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            >
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            
            <div class="relative z-10 flex flex-col items-center justify-end h-full pb-4">
                <span class="text-white font-bold text-lg md:text-xl drop-shadow-md border-b-2 border-brand-gold/0 group-hover:border-brand-gold pb-1 transition-all">
                    ${section.name}
                </span>
            </div>
        </button>
    `).join('');

    container.innerHTML = buttonsHTML;
}

// لما العميل يختار ركن معين (مثلاً ركن الكريبات)
function selectSection(sectionId) {
    const container = document.getElementById('categories-wall');
    
    // فلتر الأقسام اللي تبع الركن ده بس
    const subCategories = categories.filter(cat => cat.sectionId === sectionId);
    
    // زرار الرجوع
    let buttonsHTML = `
        <button 
            onclick="renderMainSections()"
            class="flex flex-col items-center justify-center gap-1 p-2 w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 transition-all shadow-sm"
        >
            <i class="fas fa-arrow-right text-xl"></i>
            <span class="font-bold text-[10px]">رجوع</span>
        </button>
    `;

    // رسم باقي الأقسام الفرعية
    buttonsHTML += subCategories.map(cat => `
        <button 
            onclick="filterCategory('${cat.id}')"
            id="btn-${cat.id}"
            class="category-btn flex flex-col items-center justify-center gap-2 p-2 w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-brand-spice hover:text-white hover:border-brand-spice transition-all duration-300 shadow-sm group"
        >
            <i class="${cat.icon} text-2xl mb-1 group-hover:scale-110 transition-transform"></i>
            <span class="font-bold text-[10px] text-center leading-tight">${cat.name}</span>
        </button>
    `).join('');

    container.innerHTML = buttonsHTML;

    // تفعيل أول قسم تلقائياً
    if (subCategories.length > 0) {
        filterCategory(subCategories[0].id);
    }
}

function filterCategory(categoryId) {
    // تحديث شكل الأزرار
    document.querySelectorAll('.category-btn').forEach(btn => {
        if(btn.id === `btn-${categoryId}`) {
            btn.classList.remove('bg-white', 'text-gray-700', 'border-gray-200');
            btn.classList.add('bg-brand-spice', 'text-white', 'border-brand-spice', 'shadow-lg', 'scale-105');
        } else {
            btn.classList.add('bg-white', 'text-gray-700', 'border-gray-200');
            btn.classList.remove('bg-brand-spice', 'text-white', 'border-brand-spice', 'shadow-lg', 'scale-105');
        }
    });

    // تحديث العنوان
    const catName = categories.find(c => c.id === categoryId)?.name || 'المنيو';
    document.getElementById('current-category-title').innerText = catName;

    // عرض المنتجات
    const filteredItems = menuData.filter(item => item.category === categoryId);
    renderCategoryItems(filteredItems);
}

function renderCategoryItems(items) {
    const grid = document.getElementById('menu-grid');
    
    if (items.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-16 text-gray-500">
                <i class="fas fa-utensils text-4xl mb-4 opacity-50"></i>
                <p>مفيش أكل هنا دلوقتي.. جرب قسم تاني!</p>
            </div>`;
        return;
    }

    grid.innerHTML = items.map(item => {
        let priceDisplay;
        if (item.sizes) {
            const minPrice = Math.min(...item.sizes.map(s => s.price));
            priceDisplay = `يبدأ من ${minPrice}`;
        } else {
            priceDisplay = item.price;
        }

        return `
            <div onclick='openOptionsModal(${JSON.stringify(item)})' class="cursor-pointer group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md flex flex-row h-32 md:h-auto md:flex-col hover:border-brand-spice hover:shadow-lg transition-all duration-300 animate-fade-in-up">
                
                <div class="w-1/3 md:w-full md:h-48 relative overflow-hidden">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                
                <div class="w-2/3 md:w-full p-4 flex flex-col justify-between relative z-10">
                    <div>
                        <h3 class="font-bold text-gray-900 text-base md:text-xl mb-1 leading-tight group-hover:text-brand-spice transition-colors">${item.name}</h3>
                        <p class="text-xs md:text-sm text-gray-600 line-clamp-2">${item.desc || 'إضافة'}</p>
                    </div>
                    
                    <div class="flex justify-between items-center mt-3 border-t border-gray-100 pt-2">
                        <span class="text-brand-gold font-bold text-sm md:text-lg drop-shadow-sm">${priceDisplay} ج.م</span>
                        
                        <div class="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-brand-spice text-white flex items-center justify-center shadow-lg group-hover:bg-white group-hover:text-brand-spice transition-all transform group-hover:rotate-90">
                            <i class="fas fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================
// --- تعديل دالة فتح المودال (لإضافة خيار الحر) ---
// ==========================================

function openOptionsModal(item) {
    currentSelectedItem = item;
    const modal = document.getElementById('options-modal');
    
    // 1. تحديث الاسم والصورة
    document.getElementById('modal-item-name').innerText = item.name;
    const modalImg = document.getElementById('modal-img');
    modalImg.src = item.image; 

    // 2. تجهيز الأحجام (زي ما هي)
    const sizesContainer = document.getElementById('modal-sizes-container');
    const sizesSection = document.getElementById('modal-sizes-section');
    
    if (item.sizes) {
        sizesSection.classList.remove('hidden');
        sizesContainer.innerHTML = item.sizes.map((size, index) => `
            <label class="relative flex items-center justify-between bg-gray-50 p-4 rounded-xl cursor-pointer border border-gray-200 hover:border-brand-spice/50 transition-all group overflow-hidden">
                <input type="radio" name="size_option" value="${index}" ${index === 0 ? 'checked' : ''} onchange="updateModalTotal()" class="peer sr-only">
                <div class="absolute inset-0 bg-brand-spice/10 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-brand-spice opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                <div class="flex items-center gap-3 relative z-10">
                    <span class="text-gray-800 peer-checked:text-brand-spice font-medium">${size.name}</span>
                </div>
                <span class="text-brand-gold font-bold relative z-10">${size.price} ج.م</span>
            </label>
        `).join('');
    } else {
        sizesSection.classList.add('hidden');
        currentBasePrice = item.price;
    }

   // 3. تجهيز الإضافات (التعديل هنا عشان نخفيها من الحلو)
    const extrasContainer = document.getElementById('modal-extras-container');
    const extrasSection = document.getElementById('modal-extras-section');

    // الشرط الجديد: بنقوله لو الصنف مش "إضافات" وكمان مش "كريب حلو" (sweet_crepe)
    if (item.category !== 'extras') {
        
        extrasSection.classList.remove('hidden');
        
        let availableExtras = [...commonExtras];
        const productCategory = categories.find(c => c.id === item.category);
        if (productCategory && productCategory.sectionId === 'crepes') {
            availableExtras = [...availableExtras, ...crepeOnlyExtras];
        }
        
        currentProductExtras = availableExtras.map(extra => ({ ...extra, selected: false }));

        extrasContainer.innerHTML = currentProductExtras.map((extra, index) => `
            <label class="flex items-center justify-between bg-gray-50 p-3 rounded-lg cursor-pointer hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all">
                <div class="flex items-center gap-3">
                    <input type="checkbox" value="${index}" onchange="updateModalTotal()" class="w-5 h-5 rounded accent-brand-spice border-gray-300">
                    <span class="text-gray-700 text-sm">${extra.name}</span>
                </div>
                <span class="text-brand-gold text-sm">+${extra.price} ج.م</span>
            </label>
        `).join('');

    } else {
        // هنا بقى لو هو "كريب حلو" أو "إضافات"، بنخفي القسم خالص
        extrasSection.classList.add('hidden');
        currentProductExtras = [];
    }

    // 4. --- (الجزء الجديد) تجهيز خيار السبايسي (الحر) ---
    const spicySection = document.getElementById('modal-spicy-section');
    
    // الشرط: لو الصنف مش "كريب حلو" ومش "إضافات"، اظهر خيار الحر
    if (item.category !== 'extras') {
        spicySection.classList.remove('hidden');
        spicySection.innerHTML = `
            <label class="flex items-center justify-between bg-amber-50 p-3 rounded-lg border border-amber-200 cursor-pointer hover:bg-amber-100 transition-all">
                <div class="flex items-center gap-3">
                    <input type="checkbox" id="spicy-check" class="w-5 h-5 rounded accent-amber-700 border-amber-300 cursor-pointer">
                    <span class="text-amber-900 font-bold flex items-center gap-2">
                        <i class="fas fa-fire-alt text-amber-800 animate-pulse"></i>
                        عايزها سبايسي (مولعة)؟
                    </span>
                </div>
                <span class="text-xs text-amber-900">مجاناً</span>
            </label>
        `;
    } else {
        // لو حلو، اخفي القسم ونضفه
        spicySection.classList.add('hidden');
        spicySection.innerHTML = '';
    }

    modal.classList.remove('hidden');
    updateModalTotal();
}

// ==========================================
// --- تعديل دالة إرسال الطلب (لتسجيل اختيار الحر) ---
// ==========================================

function submitOptionOrder() {
    let finalName = currentSelectedItem.name;
    let finalPrice = 0;

    // 1. معالجة الحجم
    if (currentSelectedItem.sizes) {
        const sizeInput = document.querySelector('input[name="size_option"]:checked');
        if (sizeInput) {
            const selectedSizeIndex = sizeInput.value;
            const sizeObj = currentSelectedItem.sizes[selectedSizeIndex];
            finalName += ` (${sizeObj.name})`;
            finalPrice += sizeObj.price;
        }
    } else {
        finalPrice += currentSelectedItem.price;
    }

    // 2. معالجة خيار السبايسي (الحر) - الجديد
    const spicyCheck = document.getElementById('spicy-check');
    if (spicyCheck && spicyCheck.checked) {
        finalName += ' (حار 🔥)';
    }

    // 3. معالجة الإضافات
    const checkedExtras = document.querySelectorAll('#modal-extras-container input[type="checkbox"]:checked');
    if (checkedExtras.length > 0) {
        const extrasNames = [];
        checkedExtras.forEach(cb => {
            const extra = currentProductExtras[cb.value];
            if (extra) {
                extrasNames.push(extra.name);
                finalPrice += extra.price;
            }
        });
        finalName += ` + [${extrasNames.join(', ')}]`;
    }

    // 4. إضافة للسلة وقفل المودال
    addToCartDirect(finalName, finalPrice);
    closeOptionsModal();
}

function closeOptionsModal() {
    document.getElementById('options-modal').classList.add('hidden');
}

// ==========================================
// --- 5. دوال السلة (Cart Logic) ---
// ==========================================

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    const panel = document.getElementById('cart-panel');
    
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            panel.classList.remove('translate-y-full', 'md:translate-x-full');
        }, 10);
    } else {
        panel.classList.add('translate-y-full', 'md:translate-x-full');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

function prepareAddToCart(id) {
    const item = menuData.find(i => i.id === id);
    const isMainMeal = !['extras'].includes(item.category); 

    if (item.sizes || isMainMeal) {
        openOptionsModal(item);
    } else {
        addToCartDirect(item.name, item.price);
    }
}

function addToCartDirect(name, price) {
    const uniqueId = Date.now() + Math.random(); 
    const existing = cart.find(i => i.name === name && i.price === price.toString());

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ 
            id: uniqueId,
            name: name, 
            price: price.toString(),
            qty: 1 
        });
    }

    updateCartUI();
    
    // أنيميشن للسلة
    const btn = document.querySelector('.fa-shopping-bag')?.parentElement;
    if(btn) {
        btn.classList.add('scale-110');
        setTimeout(() => btn.classList.remove('scale-110'), 200);
    }
}

function updateCartUI() {
    localStorage.setItem('kareem-cart', JSON.stringify(cart));
    
    const badge = document.getElementById('cart-badge');
    const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
    badge.innerText = totalQty;
    badge.classList.toggle('scale-0', totalQty === 0);

    const container = document.getElementById('cart-items');
    const form = document.getElementById('customer-form');
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="text-center text-gray-600 py-10 flex flex-col items-center gap-3"><i class="fas fa-shopping-basket text-4xl opacity-50"></i><p>السلة فاضية.. يلا نملاها! 😋</p></div>';
        document.getElementById('cart-total').innerText = '0 ج.م';
        form.classList.add('hidden');
        return;
    }

    form.classList.remove('hidden');

    let total = 0;
    container.innerHTML = cart.map((item, index) => {
        const priceNum = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0; 
        total += priceNum * item.qty;
        
        return `
            <div class="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200 animate-fade-in-up">
                <div class="flex-1">
                    <h4 class="text-sm font-bold text-gray-900">${item.name}</h4>
                    <div class="text-brand-gold text-xs">${item.price} ج.م</div>
                </div>
                <div class="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-1">
                    <button onclick="changeQty(${index}, -1)" class="w-6 h-6 flex items-center justify-center text-brand-spice hover:bg-gray-100 rounded transition-colors">-</button>
                    <span class="text-sm font-bold w-4 text-center text-gray-800">${item.qty}</span>
                    <button onclick="changeQty(${index}, 1)" class="w-6 h-6 flex items-center justify-center text-green-600 hover:bg-gray-100 rounded transition-colors">+</button>
                </div>
                <button onclick="removeItem(${index})" class="text-gray-500 hover:text-amber-800 transition-colors"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;
    }).join('');

    document.getElementById('cart-total').innerText = total + ' ج.م';
}

// ==========================================
// --- تغيير الكمية (زيادة أو تقليل) ---
// ==========================================
function changeQty(index, delta) {
    if (index < 0 || index >= cart.length) return;
    
    cart[index].qty += delta;
    
    // لو الكمية بقت 0 أو سالب، احذف المنتج
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    
    updateCartUI();
}

// ==========================================
// --- حذف منتج من السلة ---
// ==========================================
function removeItem(index) {
    if (index < 0 || index >= cart.length) return;
    
    cart.splice(index, 1);
    updateCartUI();
}

// ==========================================
// --- 7. دوال مساعدة (Helper Functions) ---
// ==========================================

// تحديث سعر المودال عند اختيار الإضافات
function updateModalTotal() {
    if (!currentSelectedItem) return;

    let total = 0;

    // 1. السعر الأساسي (حسب الحجم لو موجود)
    if (currentSelectedItem.sizes) {
        const sizeInput = document.querySelector('input[name="size_option"]:checked');
        if (sizeInput) {
            const idx = parseInt(sizeInput.value, 10);
            const price = currentSelectedItem.sizes[idx]?.price || 0;
            total += price;
        }
    } else {
        total += currentSelectedItem.price || 0;
    }

    // 2. سعر الإضافات المختارة
    const checkedExtras = document.querySelectorAll('#modal-extras-container input[type="checkbox"]:checked');
    checkedExtras.forEach(cb => {
        const extra = currentProductExtras[parseInt(cb.value, 10)];
        if (extra) total += extra.price || 0;
    });

    // تحديث النص في الزرار والسعر
    const totalElem = document.getElementById('modal-total-price');
    if (totalElem) totalElem.innerText = total + ' ج.م';

    const addBtn = document.getElementById('modal-add-btn');
    if (addBtn) addBtn.innerText = `إضافة للسلة (${total} ج.م)`;
}

// ==========================================
// --- 8. تشغيل الموقع (Initialization) ---
// ==========================================


function toggleAddressInput() {
    const type = document.querySelector('input[name="orderType"]:checked')?.value;
    const field = document.getElementById('address-field');
    if (field) field.classList.toggle('hidden', type !== 'delivery');
}

document.addEventListener('DOMContentLoaded', () => {
    renderMainSections();
    updateCartUI();
    
    // إخفاء شاشة التحميل (Loader)
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
});

// ==========================================
