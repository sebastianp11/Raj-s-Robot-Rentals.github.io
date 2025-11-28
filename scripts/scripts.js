/****************** YOUR NAME: 

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

let model_name = "XYZ";
let duration = 0;





/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

function recalculate() {
    const cost_label = document.getElementById("calculated-cost");
    if (!cost_label) {
        return;
    }

    const rate = model_name === "XYZ" ? 100 : 213;
    const total_cost = duration * rate;
    cost_label.innerHTML = Number(total_cost).toFixed(2);
}






/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

function change_model() {
    const model_text = document.getElementById("model-text");

    if (model_name === "XYZ") {
        model_name = "CPRG";
        if (model_text) {
            model_text.innerHTML = "Model CPRG";
        }
    } else {
        model_name = "XYZ";
        if (model_text) {
            model_text.innerHTML = "Model XYZ";
        }
    }

    recalculate();
}







/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

function change_duration() {
    const duration_text = document.getElementById("duration-text");

    const new_duration_input = prompt("Enter new duration:", String(duration));
    if (new_duration_input === null) {
        return;
    }

    const new_duration = parseInt(new_duration_input, 10);
    if (Number.isNaN(new_duration) || new_duration <= 0) {
        alert("Please enter a positive whole number.");
        return;
    }

    duration = new_duration;
    if (duration_text) {
        duration_text.innerHTML = String(duration);
    }

    recalculate();
}

function init_handlers_and_state() {
    if (window.__lab6_initialized) {
        return;
    }
    window.__lab6_initialized = true;

    const model_text_el = document.getElementById("model-text");
    const duration_text_el = document.getElementById("duration-text");

    if (model_text_el && typeof model_text_el.innerText === "string") {
        model_name = model_text_el.innerText.includes("CPRG") ? "CPRG" : "XYZ";
    }

    if (duration_text_el) {
        const parsed = parseInt(duration_text_el.innerText, 10);
        duration = Number.isNaN(parsed) ? 0 : parsed;
    }

    const model_button = document.getElementById("model-button");
    const duration_button = document.getElementById("duration-button");

    if (model_button) {
        model_button.addEventListener("click", change_model);
    }

    if (duration_button) {
        duration_button.addEventListener("click", change_duration);
    }

    recalculate();
}

document.addEventListener("DOMContentLoaded", init_handlers_and_state);



