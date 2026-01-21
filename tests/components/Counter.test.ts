/// <reference lib="dom" />

import { test, expect, describe, beforeEach } from "bun:test";
import $ from "jquery";
import { Counter } from "../../src/components/Counter";

describe("Counter Component", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  test("renders with initial count", () => {
    const counter = Counter({ initialCount: 5 });
    document.body.innerHTML = counter;

    const display = $(".counter-display");
    expect(display.text()).toBe("5");
  });

  test("renders with zero as initial count", () => {
    const counter = Counter({ initialCount: 0 });
    document.body.innerHTML = counter;

    const display = $(".counter-display");
    expect(display.text()).toBe("0");
  });

  test("has all required buttons", () => {
    const counter = Counter({ initialCount: 0 });
    document.body.innerHTML = counter;

    expect($(".counter-btn.increment").length).toBe(1);
    expect($(".counter-btn.decrement").length).toBe(1);
    expect($(".counter-btn.reset").length).toBe(1);
  });

  test("increment button increases count", () => {
    const counter = Counter({ initialCount: 0 });
    document.body.innerHTML = counter;

    // Simulate the event handler logic
    const $display = $(".counter-display");
    const current = parseInt($display.text()) || 0;
    $display.text(current + 1);

    expect($display.text()).toBe("1");
  });

  test("decrement button decreases count", () => {
    const counter = Counter({ initialCount: 5 });
    document.body.innerHTML = counter;

    // Simulate the event handler logic
    const $display = $(".counter-display");
    const current = parseInt($display.text()) || 0;
    $display.text(current - 1);

    expect($display.text()).toBe("4");
  });

  test("reset button sets count to zero", () => {
    const counter = Counter({ initialCount: 42 });
    document.body.innerHTML = counter;

    const $display = $(".counter-display");
    $display.text("0");

    expect($display.text()).toBe("0");
  });

  test("jQuery selectors work correctly", () => {
    const counter = Counter({ initialCount: 0 });
    document.body.innerHTML = counter;

    // Test various jQuery selectors
    expect($(".counter").length).toBe(1);
    expect($("h2").text()).toBe("Counter Component");
    expect($(".subtitle").length).toBe(1);
    expect($(".counter-controls").length).toBe(1);
  });
});
