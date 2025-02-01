import type { App, DirectiveBinding } from 'vue';

export type MinHeightClassProps = {
  threshold: number;
  className: string;
};

const checkHeight = (el: HTMLElement, threshold: number, className: string) => {
  const boundingClientRect = el.getBoundingClientRect();
  const isSmallHeight = boundingClientRect.height <= threshold;

  if (isSmallHeight) {
    el.classList.add(className);
  } else {
    el.classList.remove(className);
  }
};

const minHeightClassDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding<MinHeightClassProps>) {
    const { threshold, className } = binding.value;
    checkHeight(el, threshold, className);

    const observer = new ResizeObserver(() => {
      checkHeight(el, threshold, className);
    });

    observer.observe(el);
    (el as any).__resizeObserver__ = observer;
  },

  updated(el: HTMLElement, binding: DirectiveBinding<MinHeightClassProps>) {
    const { threshold, className } = binding.value;
    checkHeight(el, threshold, className);
  },

  unmounted(el: HTMLElement) {
    if ((el as any).__resizeObserver__) {
      (el as any).__resizeObserver__.disconnect();
    }
  },
};

export const registerMinHeightClassDirective = (app: App<Element>) => {
  app.directive('min-height-class', minHeightClassDirective);
};

export default {
  install: (app: App) => {
    registerMinHeightClassDirective(app);
  },
};
