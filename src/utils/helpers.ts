import $ from 'jquery';

/**
 * Format a date to a readable string
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Create a jQuery element with attributes
 */
export function createElement(tag: string, attributes: Record<string, any>) {
  const $el = $(`<${tag}></${tag}>`);
  
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'text') {
      $el.text(value);
    } else if (key === 'html') {
      $el.html(value);
    } else if (key === 'class') {
      $el.addClass(value);
    } else {
      $el.attr(key, value);
    }
  });
  
  return $el;
}

/**
 * Debounce function for event handlers
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
