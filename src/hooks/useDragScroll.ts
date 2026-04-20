import { useEffect, RefObject } from "react";

/**
 * Enables click-and-drag horizontal scrolling with the mouse on desktop.
 * Touch devices keep native single-finger scroll (we don't interfere).
 */
export function useDragScroll<T extends HTMLElement>(ref: RefObject<T>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let moved = false;

    const onPointerDown = (e: PointerEvent) => {
      // Only activate drag for mouse — let touch/pen use native scrolling
      if (e.pointerType !== "mouse") return;
      isDown = true;
      moved = false;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
      el.style.userSelect = "none";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown || e.pointerType !== "mouse") return;
      const x = e.pageX - el.offsetLeft;
      const walk = x - startX;
      if (Math.abs(walk) > 5) moved = true;
      el.scrollLeft = scrollLeft - walk;
    };

    const stop = () => {
      isDown = false;
      el.style.cursor = "grab";
      el.style.removeProperty("user-select");
    };

    // Prevent click events from firing on cards after a drag
    const onClickCapture = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };

    el.style.cursor = "grab";
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", stop);
    el.addEventListener("pointerleave", stop);
    el.addEventListener("pointercancel", stop);
    el.addEventListener("click", onClickCapture, true);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", stop);
      el.removeEventListener("pointerleave", stop);
      el.removeEventListener("pointercancel", stop);
      el.removeEventListener("click", onClickCapture, true);
    };
  }, [ref]);
}
