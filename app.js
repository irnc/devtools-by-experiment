var numberOfClicks = 0;

var initiallyTrue = true;

// Ctrl + / would toggle comment on the line.
// Uncommenting following line in DevTools would not change the value.
// initiallyTrue = false;

document.addEventListener('click', logMouseEvent);

function logMouseEvent (event) {
  // Changes to a function would be applied to this function inside VM.
  numberOfClicks += 1;
  console.log('click on document, numberOfClicks = %d, initiallyTrue = %s', numberOfClicks, initiallyTrue, event);

  // Ctrl + D works, just like in Sublime Text, to select duplicates
  console.log('altKey', event.altKey);
  console.log('bubbles', event.bubbles);
}

// Shortcuts:
//
// - Ctrl + Shift + D toggles between _Dock to right_ and _Dock to bottom_
// - Esc shows or hides Console
