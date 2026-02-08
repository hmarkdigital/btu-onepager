// Section Rendering Functions

// Render Ordering Section
function renderOrderingSection() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Render Briefs Section
function renderBriefsSection() {
    const workflow = document.getElementById('brief-workflow');
    if (!workflow) return;

    const currentBrief = briefs[0];
    workflow.innerHTML = currentBrief.steps.map(step => createBriefStep(step)).join('');
}

// Render Products for Briefs Section
function renderProductsForBriefs() {
    const list = document.getElementById('product-list');
    if (!list) return;

    list.innerHTML = campaignProducts.map(product => createProductListItem(product)).join('');
}

// Render Content Approval Section
function renderContentApprovalSection() {
    const grid = document.getElementById('submissions-grid');
    if (!grid) return;

    grid.innerHTML = contentSubmissions.map(submission => createSubmissionCard(submission)).join('');

    // Setup upload area
    setupUploadArea();
}

// Render Shoots Section
function renderShootsSection() {
    const calendar = document.getElementById('shoots-calendar');
    if (!calendar) return;

    // Filter upcoming shoots
    const upcomingShootsData = shootBookings.filter(s => s.status === 'scheduled');
    calendar.innerHTML = upcomingShootsData.map(booking => createShootCard(booking)).join('');
}

// Render Payments Section
function renderPaymentsSection() {
    const dashboard = document.getElementById('payment-dashboard');
    if (!dashboard) return;

    dashboard.innerHTML = createPaymentDashboard(couponPayments);
}

// Render FAQ Section
function renderFAQSection() {
    const accordion = document.getElementById('faq-accordion');
    if (!accordion) return;

    accordion.innerHTML = faqs.map((faq, index) => createFAQItem(faq, index)).join('');
}

// Setup Upload Area
function setupUploadArea() {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');

    if (!uploadArea || !fileInput) return;

    // Click to upload
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });

    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--color-accent)';
        uploadArea.style.background = 'rgba(51, 197, 243, 0.1)';
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = 'var(--glass-border)';
        uploadArea.style.background = 'var(--glass-bg)';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--glass-border)';
        uploadArea.style.background = 'var(--glass-bg)';

        const files = e.dataTransfer.files;
        handleFileUpload(files);
    });

    // File input change
    fileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        handleFileUpload(files);
    });
}

// Handle File Upload
function handleFileUpload(files) {
    if (files.length === 0) return;

    alert(`${files.length} fájl feltöltve!\n\nEz egy demo funkció. Éles környezetben itt történne a fájlok feltöltése a szerverre.`);

    // Reset file input
    const fileInput = document.getElementById('file-input');
    if (fileInput) fileInput.value = '';
}

// Render All Sections
function renderAllSections() {
    renderOrderingSection();
    renderBriefsSection();
    renderProductsForBriefs();
    renderContentApprovalSection();
    renderShootsSection();
    renderPaymentsSection();
    renderFAQSection();
}
