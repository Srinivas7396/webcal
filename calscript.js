let display = document.getElementById('display');

function appendToDisplay(value) {
    display.innerHTML += value;
}

var clearButton = document.querySelector(".clearButton");
clearButton.addEventListener('click', function() {
    display.innerHTML = '';
});

 document.getElementById('backspaceButton').addEventListener('click', function() {
        display.innerHTML = display.innerHTML.slice(0, -1);
    });
    
var eqButton = document.getElementById("eqButton");
eqButton.addEventListener('click', function() {
    var historyContent = document.getElementById("historyContent");
    var expression = display.innerText;
    try {
        var result = eval(expression);
        display.innerHTML = result;
        historyContent.innerHTML += expression + " = " + result + "<br>";

        // Send data to the server
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "SaveCalculation", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("expression=" + encodeURIComponent(expression) + "&result=" + encodeURIComponent(result));
    } catch (error) {
        display.innerHTML = "Error: " + error.message;
    }
});

// Conversion helper functions
        function toRadians(degrees) {
            return degrees * (Math.PI / 180);
        }

        function toDegrees(radians) {
            return radians * (180 / Math.PI);
        }

        // Helper function to round to a fixed number of decimal places
        function round(value, decimals) {
            return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
        }

        // Trigonometric functions in degrees
        function sin(x) {
            return round(Math.sin(toRadians(x)), 10);
        }

        function cos(x) {
            return round(Math.cos(toRadians(x)), 10);
        }

        function tan(x) {
            return round(Math.tan(toRadians(x)), 10);
        }

        function asin(x) {
            return round(toDegrees(Math.asin(x)), 10);
        }

        function acos(x) {
            return round(toDegrees(Math.acos(x)), 10);
        }

        function atan(x) {
            return round(toDegrees(Math.atan(x)), 10);
        }

        function sec(x) {
            return round(1 / Math.cos(toRadians(x)), 10);
        }

        function csc(x) {
            return round(1 / Math.sin(toRadians(x)), 10);
        }

        function cot(x) {
            return round(1 / Math.tan(toRadians(x)), 10);
        }

        function asec(x) {
            return round(toDegrees(Math.acos(1 / x)), 10);
        }

        function acsc(x) {
            return round(toDegrees(Math.asin(1 / x)), 10);
        }

        function acot(x) {
            return round(toDegrees(Math.atan(1 / x)), 10);
        }

        function sinh(x) {
            return round(Math.sinh(toRadians(x)), 10);
        }

        function cosh(x) {
            return round(Math.cosh(toRadians(x)), 10);
        }

        function tanh(x) {
            return round(Math.tanh(toRadians(x)), 10);
        }

        function asinh(x) {
            return round(toDegrees(Math.asinh(x)), 10);
        }

        function acosh(x) {
            return round(toDegrees(Math.acosh(x)), 10);
        }

        function atanh(x) {
            return round(toDegrees(Math.atanh(x)), 10);
        }

        // Other functions remain unchanged
        function sqrt(x) {
            return round(Math.sqrt(x), 10);
        }

        function log(x) {
            return round(Math.log10(x), 10);
        }

        function ln(x) {
            return round(Math.log(x), 10);
        }


/* trigonometry calculator code */
const secondpart=document.getElementById('secondpart');
function showHistory()
{
	
	
		secondpart.innerHTML=`<div id="historyContainer" ">
           
            <div id="historyDisplay"><h2 style="color:green;">History:</h2></div>
            <div id="historyContent"></div>
        </div> `;
       
}

function showTrigCalculator()
{
		secondpart.innerHTML=`  <div id="trigCalculator" >
            <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('sin(')">sin</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('cos(')">cos</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('tan(')">tan</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('asin(')">asin</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('acos(')">acos</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('atan(')">atan</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('sinh(')">sinh</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('cosh(')">cosh</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('tanh(')">tanh</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('asinh(')">asinh</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('acosh(')">acosh</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('atanh(')">atanh</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('sqrt(')">sqrt</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('log(')">log</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('ln(')">ln</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('sec(')">sec</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('csc(')">csc</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('cot(')">cot</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('asec(')">asec</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('acsc(')">acsc</button>
    <button class="trigButton trig-calculator-buttons" onclick="appendToDisplay('acot(')">acot</button>
        </div>
         `;
		
}	
	
function toggleNavbar() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("responsive");
}

function clearHistory() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "DeleteRowsServlet", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("Rows deleted successfully.");
                // Optionally update UI or perform additional actions upon successful deletion
            } else {
                console.log("Error deleting rows: " + xhr.status);
                // Optionally handle error conditions or display an error message
            }
        }
    };
    xhr.send();
}

function togggledarkmode()
{
	
}
