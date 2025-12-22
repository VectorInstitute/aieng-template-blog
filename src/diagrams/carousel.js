/**
 * Full-width interactive carousel visualization module
 */

export function initCarousel() {
  // Get carousel elements
  const container = document.getElementById('carousel-container');
  const slider = document.getElementById('carousel-slider');
  const items = slider.querySelectorAll('.carousel-item');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const indicator = document.getElementById('carousel-indicator');

  // Calculate item width including margins
  const itemWidth = items[0].offsetWidth + 20; // 20px for margins

  // Calculate visible items based on container width
  const visibleItems = Math.floor(container.offsetWidth / itemWidth);

  // Calculate total possible positions
  const totalSlides = items.length - visibleItems + 1;

  // Current position
  let position = 0;

  // Update the indicator and button states
  function updateUI() {
    // Update position text
    indicator.textContent = `${position + 1} / ${totalSlides}`;

    // Update button states
    prevBtn.disabled = position === 0;
    nextBtn.disabled = position === totalSlides - 1;

    // Both buttons should have the same appearance when enabled
    prevBtn.style.opacity = position === 0 ? '0.6' : '1';
    nextBtn.style.opacity = position === totalSlides - 1 ? '0.6' : '1';
  }

  // Initialize UI
  updateUI();

  // Previous button
  prevBtn.addEventListener('click', function() {
    if (position > 0) {
      position--;
      slider.style.left = -position * itemWidth + 'px';
      updateUI();
    }
  });

  // Next button
  nextBtn.addEventListener('click', function() {
    if (position < totalSlides - 1) {
      position++;
      slider.style.left = -position * itemWidth + 'px';
      updateUI();
    }
  });

  // Item click handler
  items.forEach((item, index) => {
    item.addEventListener('click', function() {
      // Reset all items
      items.forEach(i => {
        i.style.transform = '';
        i.style.boxShadow = '';
      });

      // Highlight selected item
      this.style.transform = 'scale(1.1)';
      this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';

      // If the selected item is not fully visible, scroll to it
      if (index < position || index >= position + visibleItems) {
        position = Math.min(totalSlides - 1, Math.max(0, index - Math.floor(visibleItems / 2)));
        slider.style.left = -position * itemWidth + 'px';
        updateUI();
      }
    });
  });

  // Window resize handler
  window.addEventListener('resize', function() {
    const newVisibleItems = Math.floor(container.offsetWidth / itemWidth);
    const newTotalSlides = items.length - newVisibleItems + 1;

    // Adjust position if needed
    if (position >= newTotalSlides) {
      position = newTotalSlides - 1;
      slider.style.left = -position * itemWidth + 'px';
    }

    updateUI();
  });
}
