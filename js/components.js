// Component Functions - Reusable UI builders

// Create Product Card
function createProductCard(product) {
    return `
        <div class="product-card" data-product-id="${product.id}">
            <img src="${product.imageUrl}" alt="${product.name}" class="product-card__image">
            <h3 class="product-card__name">${product.name}</h3>
            <p class="product-card__category">${getCategoryLabel(product.category)}</p>
            <button class="btn btn--primary" onclick="orderProduct('${product.id}')">
                Rendelés
            </button>
        </div>
    `;
}

// Create Brief Step
function createBriefStep(step) {
    return `
        <div class="brief-step ${step.completed ? 'completed' : ''}">
            <div class="brief-step__number">${step.stepNumber}</div>
            <div class="brief-step__content">
                <h3 class="brief-step__title">${step.title}</h3>
                <p class="brief-step__description">${step.description}</p>
            </div>
        </div>
    `;
}

// Create Product List Item
function createProductListItem(product) {
    return `
        <div class="product-list-item">
            <span class="product-list-item__name">${product.name}</span>
            <span class="status-badge status-badge--approved">Kiválasztva</span>
        </div>
    `;
}

// Create Content Submission Card
function createSubmissionCard(submission) {
    const statusClass = `status-badge--${submission.status}`;
    const statusLabel = getStatusLabel(submission.status);
    const dateStr = formatDate(submission.uploadDate);

    return `
        <div class="submission-card">
            <div class="submission-card__header">
                <span class="submission-card__date">${dateStr}</span>
                <span class="submission-card__type">${submission.fileType}</span>
            </div>
            <img src="${submission.fileUrl}" alt="Submission" style="width: 100%; border-radius: var(--radius-md); margin-bottom: var(--spacing-sm);">
            <div class="submission-card__footer">
                <span class="status-badge ${statusClass}">${statusLabel}</span>
            </div>
            ${submission.feedback ? `<p style="margin-top: var(--spacing-sm); color: var(--color-text-secondary); font-size: 0.875rem;">${submission.feedback}</p>` : ''}
        </div>
    `;
}

// Create Shoot Booking Card
function createShootCard(booking) {
    const dateStr = formatDate(booking.date);
    const statusClass = `status-badge--${booking.status === 'scheduled' ? 'pending' : 'approved'}`;
    const statusLabel = booking.status === 'scheduled' ? 'Időpontfoglalva' : 'Befejezve';

    return `
        <div class="shoot-card">
            <div class="shoot-card__date">${dateStr}</div>
            <div class="shoot-card__type">${booking.type === 'photo' ? 'Fotózás' : 'Videó forgatás'}</div>
            <div class="shoot-card__location">${booking.location}</div>
            <div style="margin-top: var(--spacing-sm);">
                <span class="status-badge ${statusClass}">${statusLabel}</span>
            </div>
            ${booking.notes ? `<p style="margin-top: var(--spacing-sm); color: var(--color-text-secondary); font-size: 0.875rem;">${booking.notes}</p>` : ''}
        </div>
    `;
}

// Create Payment Dashboard
function createPaymentDashboard(payments) {
    const totalEarnings = payments.reduce((sum, p) => sum + p.totalEarnings, 0);
    const pendingEarnings = payments.filter(p => p.status === 'pending').reduce((sum, p) => sum + p.totalEarnings, 0);
    const totalUsage = payments.reduce((sum, p) => sum + p.usageCount, 0);

    return `
        <div class="payment-stats">
            <div class="payment-stat">
                <div class="payment-stat__value">${formatCurrency(totalEarnings)}</div>
                <div class="payment-stat__label">Összes bevétel</div>
            </div>
            <div class="payment-stat">
                <div class="payment-stat__value">${formatCurrency(pendingEarnings)}</div>
                <div class="payment-stat__label">Függőben lévő</div>
            </div>
            <div class="payment-stat">
                <div class="payment-stat__value">${totalUsage}</div>
                <div class="payment-stat__label">Kupon használat</div>
            </div>
        </div>
        <div class="payment-chart">
            ${createPaymentChart(payments)}
        </div>
    `;
}

// Create Payment Chart Bars
function createPaymentChart(payments) {
    const maxEarnings = Math.max(...payments.map(p => p.totalEarnings));

    return payments.map(payment => {
        const height = (payment.totalEarnings / maxEarnings) * 100;
        return `
            <div class="payment-chart__bar" style="height: ${height}%;" title="${payment.month}: ${formatCurrency(payment.totalEarnings)}">
            </div>
        `;
    }).join('');
}

// Create FAQ Item
function createFAQItem(faq, index) {
    return `
        <div class="accordion-item" data-faq-id="${faq.id}">
            <div class="accordion-header" onclick="toggleAccordion(${index})">
                <h3 class="accordion-title">${faq.question}</h3>
                <div class="accordion-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
            <div class="accordion-content">
                <div class="accordion-body">${faq.answer}</div>
            </div>
        </div>
    `;
}

// Helper Functions
function getCategoryLabel(category) {
    const labels = {
        'protein': 'Fehérje',
        'vitamin': 'Vitamin',
        'supplement': 'Táplálékkiegészítő',
        'snack': 'Snack'
    };
    return labels[category] || category;
}

function getStatusLabel(status) {
    const labels = {
        'pending': 'Folyamatban',
        'approved': 'Jóváhagyva',
        'rejected': 'Elutasítva'
    };
    return labels[status] || status;
}

function formatDate(date) {
    return new Intl.DateTimeFormat('hu-HU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('hu-HU', {
        style: 'currency',
        currency: 'HUF',
        minimumFractionDigits: 0
    }).format(amount);
}

// Event Handlers
function orderProduct(productId) {
    alert(`Termék rendelése: ${productId}\n\nEz egy demo funkció. Éles környezetben itt történne a rendelés leadása.`);
}

function toggleAccordion(index) {
    const items = document.querySelectorAll('.accordion-item');
    const item = items[index];

    // Close all other items
    items.forEach((otherItem, i) => {
        if (i !== index) {
            otherItem.classList.remove('active');
        }
    });

    // Toggle current item
    item.classList.toggle('active');
}
