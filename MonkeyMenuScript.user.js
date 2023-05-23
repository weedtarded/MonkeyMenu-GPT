// ==UserScript==
// @name         MonkeyMenu-GPT
// @description  Auto click the "Continue generating" button and toggle side menu.
// @namespace    https://github.com/weedtarded
// @version      1.0
// @author       weedtarded
// @match        https://chat.openai.com/*
// @icon         https://chat.openai.com/favicon-32x32.png
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    console.log('Combined Tampermonkey Script is running...');

    let autoContinueEnabled = true;

    function toggleAutoContinue() {
        autoContinueEnabled = !autoContinueEnabled;
        const statusButton = document.getElementById("autoContinueButton");
        if (autoContinueEnabled) {
            statusButton.textContent = "ON";
            statusButton.style.backgroundColor = "rgba(51, 51, 51, 0.4)";
            statusButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
        } else {
            statusButton.textContent = "OFF";
            statusButton.style.backgroundColor = "rgba(51, 51, 51, 0.7)";
            statusButton.style.boxShadow = "none";
        }
    }

    setInterval(() => {
        if (autoContinueEnabled) {
            [...document.querySelectorAll('button.btn-neutral')].reverse().forEach(button => {
                if (button.innerText === 'Continue generating') {
                    setTimeout(() => {
                        button.click();
                        displayJustClickedText();
                    }, 75);
                }
            });
        }
    }, 75);

    const targetClass = "dark flex-shrink-0 overflow-x-hidden bg-gray-900";

    function toggleElementVisibility() {
        const elements = document.getElementsByClassName(targetClass);
        Array.from(elements).forEach(element => {
            element.style.display = (element.style.display === '' || element.style.display === 'block') ? 'none' : 'block';
        });
    }

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Sidebar";
    Object.assign(toggleButton.style, {
        position: "fixed",
        top: "10px",
        right: "15px",
        zIndex: "9999",
        padding: "10px",
        fontSize: "14px",
        fontWeight: "bold",
        backgroundColor: "rgba(51, 51, 51, 0.4)",
        color: "#fff",
        border: "1px solid rgb(32, 33, 35)",
        borderRadius: "4px",
        cursor: "pointer",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        transition: "background-color 0.3s ease",
    });
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", toggleElementVisibility);

    const statusButton = document.createElement("button");
    statusButton.textContent = "ON";
    statusButton.id = "autoContinueButton";
    Object.assign(statusButton.style, {
        position: "fixed",
        top: "calc(20px + 40px)",
        right: "15px",
        zIndex: "9999",
        padding: "10px",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#fff",
        border: "1px solid rgb(32, 33, 35)",
        borderRadius: "4px",
        cursor: "pointer",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        transition: "background-color 0.3s ease",
        backgroundColor: "rgba(51, 51, 51, 0.4)",
    });
    document.body.appendChild(statusButton);

    statusButton.addEventListener("click", toggleAutoContinue);

    function displayJustClickedText() {
        const justClickedText = document.createElement("div");
        justClickedText.textContent = "Just Clicked On Continue Generating";
        Object.assign(justClickedText.style, {
            position: "fixed",
            top: "calc(20px + 40px + 40px)",
            right: "15px",
            zIndex: "9999",
            padding: "10px",
            fontSize: "15px",
            fontWeight: "bold",
            color: "#fff",
            transition: "opacity 0.5s ease",
        });
        document.body.appendChild(justClickedText);

        setTimeout(() => {
            justClickedText.style.opacity = "0";
            setTimeout(() => {
                justClickedText.remove();
            }, 500);
        }, 5000);
    }

    GM_addStyle(`.${targetClass} { display: block !important; }`);
})();
