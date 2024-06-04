export const scrollToElementWithSelector = (
  selector: string,
  options: {
    behavior?: ScrollBehavior;
    block?: ScrollLogicalPosition;
    inline?: ScrollLogicalPosition;
  } = {},
) => {
  const element = document.querySelector(selector);

  if (element) {
    element.scrollIntoView({
      behavior: options.behavior || 'smooth',
      block: options.block || 'start',
      inline: options.inline || 'nearest',
    });
  } else {
    console.error(`Element not found for selector: ${selector}`);
  }
};
