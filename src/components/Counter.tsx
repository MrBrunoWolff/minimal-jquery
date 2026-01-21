/**
 * Counter component demonstrating JSX + jQuery integration
 * JSX is used for templating, jQuery handles interactions
 */

interface CounterProps {
  initialCount: number;
}

export function Counter({ initialCount }: CounterProps): string {
  return `
    <div class="counter">
      <h2>Counter Component</h2>
      <p class="subtitle">Built with JSX templates + jQuery events</p>
      
      <div class="counter-display-wrapper">
        <div class="counter-display">${initialCount}</div>
      </div>
      
      <div class="counter-controls">
        <button class="counter-btn decrement">-</button>
        <button class="counter-btn reset">Reset</button>
        <button class="counter-btn increment">+</button>
      </div>
      
      <div class="info">
        <small>Click buttons to interact (jQuery event handlers)</small>
      </div>
    </div>
  `;
}
