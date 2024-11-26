// Import FloatingUIDOM via CDN or npm module
// const { computePosition, offset, flip, shift } = FloatingUIDOM;
// import { computePosition, offset, flip, shift } from './node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';

// Get the reference and floating elements
const reference = document.getElementById('reference');
const floating = document.getElementById('floating');
const floating2 = document.getElementById('floating2');
const floating3 = document.getElementById('floating3');
const parent = document.getElementById('parent');

// Function to show and position a floating element
async function showFloatingElement(floatingElement, placement) {
  floatingElement.style.display = 'block';

  try {
    // Compute the position of the floating element
    const { x, y } = await computePosition(reference, floatingElement, {
      placement, // Dynamic placement
      middleware: [
        offset(10), // Adds 10px offset
        flip(),     // Flips the element if it overflows
        shift(),    // Adjusts to fit within the viewport
      ],
    });

    // Apply the computed x and y to the floating element
    floatingElement.style.left = `${x}px`;
    floatingElement.style.top = `${y}px`;
    floatingElement.style.position = 'absolute';
    reference.style.position = 'absolute';
  } catch (error) {
    console.error('Error positioning the floating element:', error);
  }
}

// Event handlers for `floating`
reference.addEventListener('mouseenter', () => showFloatingElement(floating, 'bottom'));
reference.addEventListener('mouseleave', () => {
  floating.style.display = 'none';
});

// Event handlers for `floating2`
reference.addEventListener('mouseenter', () => showFloatingElement(floating2, 'top'));
reference.addEventListener('mouseleave', () => {
  floating2.style.display = 'none';
});

// Event handlers for `floating3`
reference.addEventListener('mouseenter', () => showFloatingElement(floating3, 'left'));
reference.addEventListener('mouseleave', () => {
  floating3.style.display = 'none';
});



