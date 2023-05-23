// ==UserScript==
// @name         Toggle Side Menu & Auto Continue Generating
// @description  Auto click the "Continue generating" button and toggle side menu.
// @namespace    https://github.com/weedtarded
// @version      1.0
// @author       weedtarded
// @match        https://chat.openai.com/*
// @icon         https://chat.openai.com/favicon-32x32.png
// @grant        GM_addStyle
// ==/UserScript==

// This script enhances the functionality of the OpenAI chat website by providing features like auto-clicking the "Continue generating" button and toggling the side menu.

(function() {
    'use strict';

    // Enable strict mode to ensure cleaner code and avoid common JavaScript pitfalls.

    console.log('Combined Tampermonkey Script is running...');

    // Display a log message in the console to indicate that the script is running.

    let autoContinueEnabled = true;

    // Initialize the autoContinueEnabled variable to true. It determines whether auto-continuation is enabled or disabled.

    function toggleAutoContinue() {
        // Function to toggle the autoContinueEnabled variable and update the statusButton appearance.

        autoContinueEnabled = !autoContinueEnabled;
        // Toggle the value of autoContinueEnabled between true and false.

        const statusButton = document.getElementById("autoContinueButton");
        // Get the button element with the ID "autoContinueButton".

        if (autoContinueEnabled) {
            // If autoContinueEnabled is true (auto-continuation is enabled), update the statusButton appearance accordingly.

            statusButton.textContent = "ON";
            // Change the button text to "ON".

            statusButton.style.backgroundColor = "rgba(51, 51, 51, 0.4)";
            // Set the background color of the button to a semi-transparent dark gray.

            statusButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
            // Apply a box shadow to the button for a visual effect.
        } else {
            // If autoContinueEnabled is false (auto-continuation is disabled), update the statusButton appearance accordingly.

            statusButton.textContent = "OFF";
            // Change the button text to "OFF".

            statusButton.style.backgroundColor = "rgba(51, 51, 51, 0.7)";
            // Set the background color of the button to a slightly darker semi-transparent dark gray.

            statusButton.style.boxShadow = "none";
            // Remove the box shadow from the button.
        }
    }

    setInterval(() => {
        // Set up an interval function to run the provided callback repeatedly with a fixed delay.

        if (autoContinueEnabled) {
            // Only execute the following code if auto-continuation is enabled.

            [...document.querySelectorAll('button.btn-neutral')].reverse().forEach(button => {
                // Select all buttons with the class "btn-neutral", convert the NodeList to an array, reverse the order, and iterate over each button.

                if (button.innerText === 'Continue generating') {
                    // If the button's text is "Continue generating", perform the following actions.

                    setTimeout(() => {
                        // Execute the provided callback after a specified delay.

                        button.click();
                        // Simulate a click on the button.

                        displayJustClickedText();
                        // Call the displayJustClickedText function to display a message indicating that the button was clicked.
                    }, 75);
                }
            });
        }
    }, 75);

    // The interval function above runs every 75 milliseconds (0.075 seconds) and checks for the presence of the "Continue generating" button.

    const targetClass = "dark flex-shrink-0 overflow-x-hidden bg-gray-900";

    // Define the targetClass, which is used to select elements for toggling their visibility.

    function toggleElementVisibility() {
        // Function to toggle the visibility of elements with the targetClass.

        const elements = document.getElementsByClassName(targetClass);
        // Get all elements that have the targetClass.

        Array.from(elements).forEach(element => {
            // Convert the HTMLCollection to an array and iterate over each element.

            element.style.display = (element.style.display === '' || element.style.display === 'block') ? 'none' : 'block';
            // Toggle the display property of the element between 'none' and 'block'. If the current display is empty or 'block', set it to 'none'; otherwise, set it to 'block'.
        });
    }

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Sidebar";
    // Create a button element and set its text content to "Toggle Sidebar".

    Object.assign(toggleButton.style, {
        // Apply multiple CSS styles to the toggleButton element using Object.assign.

        position: "fixed",
        // Set the position to "fixed" to position the button in a fixed position on the screen.

        top: "10px",
        // Position the button 10 pixels from the top.

        right: "15px",
        // Position the button 15 pixels from the right.

        zIndex: "9999",
        // Set a high z-index value to ensure the button appears above other elements.

        padding: "10px",
        // Add padding to the button.

        fontSize: "14px",
        // Set the font size of the button.

        fontWeight: "bold",
        // Set the font weight of the button to bold.

        backgroundColor: "rgba(51, 51, 51, 0.4)",
        // Set the background color of the button to a semi-transparent dark gray.

        color: "#fff",
        // Set the text color of the button to white.

        border: "1px solid rgb(32, 33, 35)",
        // Add a border to the button.

        borderRadius: "4px",
        // Add rounded corners to the button.

        cursor: "pointer",
        // Change the cursor style to indicate the button is clickable.

        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        // Apply a box shadow to the button for a visual effect.

        transition: "background-color 0.3s ease",
        // Add a smooth transition effect to the background color.

    });
    document.body.appendChild(toggleButton);
    // Append the toggleButton element to the document body.

    toggleButton.addEventListener("click", toggleElementVisibility);
    // Add an event listener to the toggleButton that calls the toggleElementVisibility function when clicked.

    const statusButton = document.createElement("button");
    statusButton.textContent = "ON";
    statusButton.id = "autoContinueButton";
    // Create a button element and set its text content to "ON". Assign it an ID of "autoContinueButton".

    Object.assign(statusButton.style, {
        // Apply multiple CSS styles to the statusButton element using Object.assign.

        position: "fixed",
        // Set the position to "fixed" to position the button in a fixed position on the screen.

        top: "calc(20px + 40px)",
        // Position the button 60 pixels below the top (20px for the toggleButton + 40px for spacing).

        right: "15px",
        // Position the button 15 pixels from the right.

        zIndex: "9999",
        // Set a high z-index value to ensure the button appears above other elements.

        padding: "10px",
        // Add padding to the button.

        fontSize: "14px",
        // Set the font size of the button.

        fontWeight: "bold",
        // Set the font weight of the button to bold.

        color: "#fff",
        // Set the text color of the button to white.

        border: "1px solid rgb(32, 33, 35)",
        // Add a border to the button.

        borderRadius: "4px",
        // Add rounded corners to the button.

        cursor: "pointer",
        // Change the cursor style to indicate the button is clickable.

        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        // Apply a box shadow to the button for a visual effect.

        transition: "background-color 0.3s ease",
        // Add a smooth transition effect to the background color.

        backgroundColor: "rgba(51, 51, 51, 0.4)",
        // Set the background color of the button to a semi-transparent dark gray.
    });
    document.body.appendChild(statusButton);
    // Append the statusButton element to the document body.

    statusButton.addEventListener("click", toggleAutoContinue);
    // Add an event listener to the statusButton that calls the toggleAutoContinue function when clicked.

    function displayJustClickedText() {
        // Function to display a message when the "Continue generating" button is clicked.

        const justClickedText = document.createElement("div");
        // Create a new <div> element.

        justClickedText.textContent = "Just Clicked On Continue Generating";
        // Set the text content of the <div> to "Just Clicked On Continue Generating".

        Object.assign(justClickedText.style, {
            // Apply multiple CSS styles to the justClickedText element using Object.assign.

            position: "fixed",
            // Set the position to "fixed" to position the <div> in a fixed position on the screen.

            top: "calc(20px + 40px + 40px)",
            // Position the <div> 100 pixels below the top (20px for the toggleButton + 40px for spacing + 40px for additional spacing).

            right: "15px",
            // Position the <div> 15 pixels from the right.

            zIndex: "9999",
            // Set a high z-index value to ensure the <div> appears above other elements.

            padding: "10px",
            // Add padding to the <div>.

            fontSize: "15px",
            // Set the font size of the <div>.

            fontWeight: "bold",
            // Set the font weight of the <div> to bold.

            color: "#fff",
            // Set the text color of the <div> to white.

            transition: "opacity 0.5s ease",
            // Add a smooth transition effect to the opacity.

        });
        document.body.appendChild(justClickedText);
        // Append the justClickedText element to the document body.

        setTimeout(() => {
            // Execute the provided callback after a specified delay.

            justClickedText.style.opacity = "0";
            // Set the opacity of the <div> to 0 to fade it out.

            setTimeout(() => {
                // Execute the provided callback after a specified delay.

                justClickedText.remove();
                // Remove the justClickedText element from the document.
            }, 500);
        }, 5000);
        // After 5 seconds (5000 milliseconds), the justClickedText element will be faded out and removed from the document.
    }

    GM_addStyle(`.${targetClass} { display: block !important; }`);
    // Apply custom styles using GM_addStyle to force display elements with the targetClass by setting their display property to "block" (important to override any existing styles).
})();

