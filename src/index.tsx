import $ from 'jquery';
import { Counter } from './components/Counter';
import { formatDate, createElement } from './utils/helpers';

// Initialize the app when DOM is ready
$(document).ready(() => {
  console.log('🚀 jQuery 4.0 + Bun + TypeScript');
  
  // Create welcome message using helper function
  const welcomeEl = createElement('div', {
    class: 'welcome',
    text: `Welcome! Today is ${formatDate(new Date())}`
  });
  $('#app').append(welcomeEl);
  
  // Add counter component
  const counterContainer = $('<div class="counter-container"></div>');
  $('#app').append(counterContainer);
  
  // Render Counter component (returns HTML string)
  const counter = Counter({ initialCount: 0 });
  counterContainer.html(counter);
  
  // Setup jQuery event handlers
  setupEventHandlers();
});

function setupEventHandlers() {
  // Increment button
  $(document).on('click', '.counter-btn.increment', function() {
    const $display = $('.counter-display');
    const current = parseInt($display.text()) || 0;
    $display.text(current + 1).addClass('pulse');
    setTimeout(() => $display.removeClass('pulse'), 300);
  });
  
  // Decrement button
  $(document).on('click', '.counter-btn.decrement', function() {
    const $display = $('.counter-display');
    const current = parseInt($display.text()) || 0;
    $display.text(current - 1).addClass('pulse');
    setTimeout(() => $display.removeClass('pulse'), 300);
  });
  
  // Reset button
  $(document).on('click', '.counter-btn.reset', function() {
    $('.counter-display').text('0').addClass('pulse');
    setTimeout(() => $('.counter-display').removeClass('pulse'), 300);
  });
}
