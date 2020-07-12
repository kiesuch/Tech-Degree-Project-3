// Job title variables are declared.

const jobTitle = document.getElementById("title");
const otherJobTitle = document.getElementById("other-title");

// Selects the Name html attribute and places the cursor in it upon loading the page.
// Hides the other job titles text field upon loading the page.

document.getElementById("name").focus();
otherJobTitle.style.display = "none";

// Uses an event listener on the job title dropdown list to show the other job title text field if other is selected.
// If any other item is selected from the list, the otehr job title text field will be rehidden.

jobTitle.addEventListener('change', () =>{
	if (jobTitle.value === "other"){
		otherJobTitle.style.display = "block";
	} else {
		otherJobTitle.style.display = "none";
	}
});

// T-shirt variables are declared.

const tShirtDesign = document.getElementById("design");
const tShirtColors = document.getElementById("color");
const colorOptions = tShirtColors.querySelectorAll("option");
const newColorOption = document.createElement('option');

// Sets the text of the newly created option, appends it to the dropdown list, and then selects it upon the page loading.

newColorOption.text = 'Please select a T-shirt theme';
tShirtColors.appendChild(newColorOption);
newColorOption.selected = "true";

// The for loops hides the rest of the options leaving only the new color option text shown.

for (var i = 0; i < (colorOptions.length); i++){
	colorOptions[i].style.display = "none";
}

// When the user selects a shirt design, it will display the colors available for that design and hides the rest.
// The first color for the design selected will be selected automatically.
// If the default option is selected, it will hide every color and leaves the new color option text selected.

tShirtDesign.addEventListener('change', () =>{
	if (tShirtDesign.value === "js puns"){
		colorOptions[0].style.display = "block";
		colorOptions[1].style.display = "block";
		colorOptions[2].style.display = "block";
		colorOptions[3].style.display = "none";
		colorOptions[4].style.display = "none";
		colorOptions[5].style.display = "none";
		newColorOption.style.display = "none";
		colorOptions[0].selected = "true";

	} else if (tShirtDesign.value === "heart js"){
		colorOptions[0].style.display = "none";
		colorOptions[1].style.display = "none";
		colorOptions[2].style.display = "none";
		colorOptions[3].style.display = "block";
		colorOptions[4].style.display = "block";
		colorOptions[5].style.display = "block";
		newColorOption.style.display = "none";
		colorOptions[3].selected = "true";
	} else {
		for (var i = 0; i < (colorOptions.length); i++){
			colorOptions[i].style.display = "none";
		}
		newColorOption.selected = "true";
	}
});

// Activity checkbox variables are declared.
// A div element to display the total cost of activites is created and appended to the end of the activities section.

let totalCost = 0;
const activities = document.querySelector(".activities");
const checkboxes = activities.querySelectorAll("input")
let activityTotal = document.createElement("dic");
activityTotal.innerHTML = `<p id='total-cost'>Total: $0`;
activities.appendChild(activityTotal);

// Creates an arrow function that check upon a checkbox getting clicked if there are any conflicting dates that should be disabled or re-enabled
// The cost of the activies selected will be added to the total cost and then displayed using the new activityTotal div and p element.

activities.addEventListener("input", (e) =>{
	
	const isClicked = e.target;
    const activityDateTime = isClicked.getAttribute("data-day-and-time");
    
	// The for loop gets the value of the date and time for the activity selected or deselected.
	// The if statement will then check if there is a conflicting activity and will disable or re-enable it
	
    for (i = 0; i < checkboxes.length; i++){
        const listDateTime = checkboxes[i].getAttribute("data-day-and-time");
        
        if (activityDateTime === listDateTime && isClicked !== checkboxes[i]){
            if (isClicked.checked === true){
                checkboxes[i].parentNode.style.color = "grey";
                checkboxes[i].disabled = true;
            } else if (isClicked.checked === false){
                checkboxes[i].parentNode.style.color = "";
                checkboxes[i].disabled = false;
            }
        }
    }
	
	// The total activity cost will be calculated and then displayed to the webpage.
	// The Unary plus operator is used to covert the data-cost from a string to a number.
	
    let activityCost = +(isClicked.getAttribute("data-cost"));
    if (isClicked.checked === true){
        totalCost += activityCost;
    } else {
        totalCost -= activityCost;
    }
    document.querySelector("#total-cost").innerText = `Total $${totalCost}`;
});

// Payment info variables are declared.

const paymentOption = document.getElementById("payment");
const creditCardOption = document.getElementById("credit-card");
const paypalOption = document.getElementById("paypal");
const bitcoinOption = document.getElementById("bitcoin");

paymentOption[1].selected = "true";
creditCardOption.selected = "true";
paypalOption.style.display = "none";
bitcoinOption.style.display = "none";

// The arrow function uses an event listener to show and hide the payments methods based on the value that is currently held in paymentOption
// The creditcard info is seen by default

paymentOption.addEventListener("change", () =>{
	if (paymentOption.value === "bitcoin"){
		bitcoinOption.style.display = "block";
		paypalOption.style.display = "none";
		creditCardOption.style.display = "none";
		paymentOption.style.color = "black";
	} else if (paymentOption.value === "paypal"){
		paypalOption.style.display = "block";
		creditCardOption.style.display = "none";
		bitcoinOption.style.display = "none";
		paymentOption.style.color = "black";
	} else if (paymentOption.value === "credit card"){
		creditCardOption.style.display = "block";
		paypalOption.style.display = "none";
		bitcoin.style.display = "none";
		paymentOption.style.color = "black";
	} else {
		creditCardOption.style.display = "none";
		paypalOption.style.display = "none";
		bitcoin.style.display = "none";
		paymentOption.style.color = "red";
	}
});

// Validation variables are declared.

const name = document.getElementById("name");
const email = document.getElementById("mail");
const creditCardNumber = document.getElementById("cc-num");
const zipcode = document.getElementById("zip");
const cvv = document.getElementById("cvv");

// Name validation function checks to ensure the name field is not empty and contains only case insensitive letters or spaces.

const nameValidation = () =>{
	const nameInput = name.value;
	if (nameInput !== "" && /^[a-z ]+$/i.test(nameInput)){
		name.style.borderColor = "green";
		return true;
	} else {
		name.style.borderColor = "red";
		return false;
	}
} 

// Email validation function checks to ensure the email field isn't empty and contains an @ and a . with text inbetween.
// Regex used in the if statement was used in the validating email course video.

const emailValidation = () =>{
	const emailInput = email.value;
	if (emailInput !== "" && /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput)){
		email.style.borderColor = "green";
		return true;
	} else {
		email.style.borderColor = "red";
		return false;
	}
} 

// The checkbox validation function checks to see if at least one checkbox is checked.

const checkboxValidation = () =>{
    for(let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
			activityTotal.style.color = "green";
            return true;
        }
    }
	activityTotal.style.color = "red";
    return false;
    
}

// The credit card validation functions checks to see if the field isnt empty and contains at least 13 to 16 characters.
// The if statement also checks to see if the input is considered a number.

const creditCardValidation = () =>{
    creditCardInput = creditCardNumber.value;
        if (creditCardInput.length === 0 || creditCardInput.length === ''){
            creditCardNumber.style.borderColor = "red";
            return false;
        } else if (creditCardInput.length < 13 || creditCardInput.length > 16 || isNaN(creditCardInput)){
            creditCardNumber.style.borderColor = "red";
            return false;
        } else {   
            creditCardNumber.style.borderColor = "green";  
            return true;
        }
}

// The zipcode validation function checks to see if 5 characters were entered into the field and if the input is considered a number.

const zipcodeValidation = () =>{
    zipcodeInput = zipcode.value;
        if (zipcodeInput.length !== 5 || isNaN(zipcodeInput)){
            zipcode.style.borderColor = "red";
            return false;
        } else {  
            zipcode.style.borderColor = "green"; 
            return true;
        }
}

// The cvv validation function checks to see if 3 characters were entered into the field and if the input is considered a number

const cvvValidation = () =>{
    cvvInput = cvv.value;
        if (cvvInput.length !== 3 || isNaN(cvvInput)){
            cvv.style.borderColor = "red";
            return false;
        } else {  
            cvv.style.borderColor = "green";  
            return true;
        }
}

// These event listeners will give real time feedback, changing the borders of the input fields after the first input.

name.addEventListener("input", (e) =>{
	nameValidation();
});

email.addEventListener("input", (e) =>{
	emailValidation();
});

activities.addEventListener("input", (e) =>{
	checkboxValidation();
});

creditCardNumber.addEventListener("input", (e) =>{
	creditCardValidation();
});

zipcode.addEventListener("input", (e) =>{
	zipcodeValidation();
});

cvv.addEventListener("input", (e) =>{
	cvvValidation();
});

// When the submit button is clicked or if enter is pressed, the validation functions will be called.
// The credit card validation function will only be evaluated if the payment option has credit card selected.
// If any of the validation functions returns false, the default action will be prevented.

const form = document.querySelector("form");

form.addEventListener("submit", (e) =>{
	
    nameValidation();
    emailValidation();
    checkboxValidation();

    if(paymentOption.value === "credit card"){
        creditCardValidation();
        zipcodeValidation();
        cvvValidation();

        if (!creditCardValidation()){
            e.preventDefault();
        }
    
        if (!zipcodeValidation()){
            e.preventDefault();
        }
    
        if (!cvvValidation()){
            e.preventDefault();
        }
    }

    if (!nameValidation()){
        e.preventDefault();
    }

    if (!emailValidation()){
        e.preventDefault();
    }

    if(!checkboxValidation()){
       e.preventDefault();
    }
});