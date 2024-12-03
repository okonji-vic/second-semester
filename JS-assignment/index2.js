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

// Align the floating element to the beginning of the reference
const rect = reference.getBoundingClientRect(); // Get reference element dimensions
const adjustedX = rect.left; // Align with the beginning of the reference
const adjustedY = rect.top + 11; // Align with the top of the reference


    // Apply the computed x and y to the floating element
    if (floatingElement.id === "floating") {
      floatingElement.style.left = `${adjustedX}px`;
      floatingElement.style.top = `${y}px`;
    } else if (floatingElement.id === "floating2") {
      floatingElement.style.left = `${adjustedX}px`;
      floatingElement.style.top = `${y}px`;
    } else if (floatingElement.id === "floating3") {
      floatingElement.style.left = `${x}px`;
      floatingElement.style.top = `${adjustedY}px`;
    }
    floatingElement.classList.add("result");
    floatingElement.style.display = "block";
    floatingElement.style.position = "absolute";
  } catch (error) {
    console.error("Error positioning the floating element:", error);
  }
}

// Event handlers for `floating`
reference.addEventListener("mouseenter", () => {
  showFloatingElement(floating, "bottom");
  showFloatingElement(floating2, "top");
  showFloatingElement(floating3, "right");
});
reference.addEventListener("mouseleave", () => {
  floating.style.display = "none";
  floating2.style.display = "none";
  floating3.style.display = "none";
});

// Set timer for default page loading to run function
setInterval(() => {
  showFloatingElement(floating, "bottom");
  showFloatingElement(floating2, "top");
  showFloatingElement(floating3, "right");
}, 5000);




// async function showFloatingElement(floatingElement, placement) {
//   try {
//     const { x, y } = await computePosition(reference, floatingElement, {
//       placement, 
//       middleware: [
//         offset(-10), 
//         flip(),     
//         shift(),    
//       ],
//     });
// 
// const rect = reference.getBoundingClientRect(); 
// const adjustedX = rect.left; 
    
//     floatingElement.style.left = `${adjustedX}px`;
//     floatingElement.style.top = `${y}px`;
//     floatingElement.style.position = "absolute";
//     floatingElement.style.display = "block";
//     floatingElement.classList.add("result");
//   } catch (error) {
//     console.error("Error positioning the floating element:", error);
//   }
// }


// function updateAllFloatingElements() {
//   showFloatingElement(floating, "bottom");
//   showFloatingElement(floating2, "top");
//   showFloatingElement(floating3, "right");
// }

// reference.addEventListener("mouseenter", updateAllFloatingElements);
// reference.addEventListener("mouseleave", () => {
//   floating.style.display = "none";
//   floating2.style.display = "none";
//   floating3.style.display = "none";
// });


// setInterval(updateAllFloatingElements, 5000);
