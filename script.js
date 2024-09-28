// Get references to DOM elements
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const clearBtn = document.getElementById('clear-btn');
const counterDisplay = document.getElementById('counter-display');
const errorMessage = document.getElementById('error-message');

// Initialize counter value
let counter = 0;

// Function to update the counter display
function updateCounterDisplay() {
    counterDisplay.innerHTML = counter;
}

// Increment button functionality
incrementBtn.addEventListener('click', function() {
    counter++;
    updateCounterDisplay();

    // If count > 0, hide error message and show the clear button
    if (counter > 0) {
        errorMessage.style.display = 'none';
        clearBtn.style.display = 'block';
    }
});

// Decrement button functionality
decrementBtn.addEventListener('click', function() {
    if (counter > 0) {
        counter--;
        updateCounterDisplay();

        // Hide error message if counter is above 0
        if (counter === 0) {
            clearBtn.style.display = 'none';
        }
    } else {
        // Show error if trying to decrement below 0
        errorMessage.style.display = 'block';
    }
});

// Clear button functionality
clearBtn.addEventListener('click', function() {
    counter = 0;
    updateCounterDisplay();
    clearBtn.style.display = 'none';
    errorMessage.style.display = 'none';
});
