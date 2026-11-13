"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".custom-cursor");
    const dot = document.querySelector<HTMLElement>(".custom-cursor-dot");
    const mediaQuery = window.matchMedia("(pointer: fine)");

    if (!cursor || !dot || !mediaQuery.matches) return;

    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;
    let dotX = cursorX;
    let dotY = cursorY;
    let frame = 0;

    const move = (event: PointerEvent) => {
      cursorX = event.clientX;
      cursorY = event.clientY;
      dot.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    };

    const animate = () => {
      dotX += (cursorX - dotX) * 0.16;
      dotY += (cursorY - dotY) * 0.16;
      cursor.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(animate);
    };

    const interactiveSelector = "a, button, input, textarea, .project-card, .glass-card, .capability-card, .contact-link";
    const setInteractiveState = (target: EventTarget | null) => {
      const isInteractive = target instanceof Element && Boolean(target.closest(interactiveSelector));
      cursor.classList.toggle("is-active", isInteractive);
      dot.classList.toggle("is-active", isInteractive);
    };
    const onOver = (event: PointerEvent) => setInteractiveState(event.target);
    const onDown = () => {
      cursor.classList.add("is-clicking");
      dot.classList.add("is-clicking");
    };
    const onUp = () => {
      cursor.classList.remove("is-clicking");
      dot.classList.remove("is-clicking");
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerover", onOver);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerover", onOver);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" aria-hidden="true" />
      <div className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
