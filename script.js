const designers = [
  {
    id: 1,
    name: 'Epic Designs',
    rating: 3.5,
    description: 'Passionate team of 4 designers working out of Bangalore with an experience of 4 years.',
    projects: 57,
    years: 8,
    price: '$$',
    contacts: ['+91 - 9845328853', '+91 - 9845328854']
  },
  {
    id: 2,
    name: 'Studio - D3',
    rating: 4.5,
    description: 'Passionate team of 4 designers working out of Bangalore with an experience of 4 years.',
    projects: 43,
    years: 6,
    price: '$$$',
    contacts: ['+91 - 9845328853', '+91 - 9845328854']
  },
  {
    id: 3,
    name: 'House of designs',
    rating: 5.0,
    description: 'Award-winning design team specializing in modern and minimalist aesthetics.',
    projects: 68,
    years: 12,
    price: '$$$$',
    contacts: ['+91 - 9876543210', '+91 - 9876543211']
  },
  {
    id: 4,
    name: 'Creative Minds',
    rating: 4.0,
    description: 'Innovative design solutions for startups and established businesses alike.',
    projects: 32,
    years: 5,
    price: '$$',
    contacts: ['+91 - 9123456789', '+91 - 9123456788']
  }
];

function createStarRating(rating) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const filled = i < Math.floor(rating);
    const halfFilled = !filled && i < rating;
    stars.push(`
      <svg class="star ${filled || halfFilled ? '' : 'empty'}" 
           xmlns="http://www.w3.org/2000/svg" 
           width="20" 
           height="20" 
           viewBox="0 0 24 24" 
           fill="${filled ? 'currentColor' : 'none'}" 
           stroke="currentColor" 
           stroke-width="2" 
           stroke-linecap="round" 
           stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    `);
  }
  return stars.join('');
}

function createDesignerCard(designer) {
  return `
    <div class="designer-card" data-id="${designer.id}">
      <div class="designer-header">
        <div class="designer-info">
          <h2>${designer.name}</h2>
          <div class="star-rating">
            ${createStarRating(designer.rating)}
          </div>
        </div>
        <button class="action-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          <span>Details</span>
        </button>
      </div>

      <p class="designer-description">${designer.description}</p>

      <div class="metrics">
        <div class="metric">
          <div class="metric-value">${designer.projects}</div>
          <div class="metric-label">Projects</div>
        </div>
        <div class="metric">
          <div class="metric-value">${designer.years}</div>
          <div class="metric-label">Years</div>
        </div>
        <div class="metric">
          <div class="metric-value">${designer.price}</div>
          <div class="metric-label">Price</div>
        </div>
      </div>

      <div class="contacts">
        ${designer.contacts.map(contact => `<div class="contact">${contact}</div>`).join('')}
      </div>

      <div class="actions">
        <button class="action-button hide-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
            <line x1="2" y1="2" x2="22" y2="22"></line>
          </svg>
          <span>Hide</span>
        </button>
        <button class="action-button shortlist-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
          <span>Shortlist</span>
        </button>
        <button class="action-button report-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>Report</span>
        </button>
      </div>
    </div>
  `;
}

function initializeApp() {
  const designersList = document.getElementById('designersList');
  const navButtons = document.querySelectorAll('.nav-button');

  // Render designers
  designersList.innerHTML = designers.map(createDesignerCard).join('');

  // Initialize navigation
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // Initialize action buttons
  document.querySelectorAll('.shortlist-button').forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });

  // Initialize hide functionality
  document.querySelectorAll('.hide-button').forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.designer-card');
      card.style.display = 'none';
    });
  });
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);