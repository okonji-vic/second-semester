import {
computePosition,
  offset,
  flip,
  shift,
} from "https://cdn.jsdelivr.net/npm/@floating-ui/dom@latest/+esm";

const reference = document.getElementById("reference");
const floating = document.getElementById("floating");
const floating2 = document.getElementById("floating2");
const floating3 = document.getElementById("floating3");
const parent = document.getElementById("parent");

// Function to show and position a floating element
async function showFloatingElement(floatingElement, placement) {
  try {
    // Compute the position of the floating element
    const { x, y } = await computePosition(reference, floatingElement, {
      placement, // Dynamic placement
      middleware: [
        offset(-10), // Adds 10px offset
        flip(), // Flips the element if it overflows
        shift(), // Adjusts to fit within the viewport
      ],
    });

    // Apply the computed x and y to the floating element
    if (floatingElement.id === "floating") {
      floatingElement.style.left = `${10}vw`;
      floatingElement.style.top = `${y}px`;
    } else if (floatingElement.id === "floating2") {
      floatingElement.style.left = `${10}vw`;
      floatingElement.style.top = `${y}px`;
    } else if (floatingElement.id === "floating3") {
      floatingElement.style.left = `${x}px`;
      floatingElement.style.top = `${9.7}vw`;
    }
    floatingElement.classList.add("result");
    floatingElement.style.display = "block";
    floatingElement.style.position = "absolute";
  } catch (error) {
    console.error("Error positioning the floating element:", error);
  }
}

// Event handlers for `floating`
reference.addEventListener("mouseenter", () =>
  showFloatingElement(floating, "bottom")
);
reference.addEventListener("mouseleave", () => {
  floating.style.display = "none";
});

// Event handlers for `floating2`
reference.addEventListener("mouseenter", () =>
  showFloatingElement(floating2, "top")
);
reference.addEventListener("mouseleave", () => {
  floating2.style.display = "none";
});

// Event handlers for `floating3`
reference.addEventListener("mouseenter", () =>
  showFloatingElement(floating3, "right")
);
reference.addEventListener("mouseleave", () => {
  floating3.style.display = "none";
});

// Set timer for default page loading to run function
setInterval(() => {
  showFloatingElement(floating, "bottom");
  showFloatingElement(floating2, "top");
  showFloatingElement(floating3, "right");
}, 5000);
