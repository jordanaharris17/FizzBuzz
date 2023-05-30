//get values from the user. We need to get the fizz and the buzz value.
function getValues() {
    //get user values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    //parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    //check that the numbers are integers
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        //call fizzbuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        //call displaydata and write the values to the screen
        displayData(fbArray);
    }else {
        alert("You must enter integers");
    }
}
function fizzBuzz(fizzValue, buzzValue) {
    let returnArray = [];
    //loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
        //check to see if divisible by both (3 and 5)
        //check to see if divisible by buzz value 3
        //check to see if divisible by buzz value 5
        if(i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');
        } else if(i % fizzValue == 0) {
            returnArray.push('Fizz');
        } else if(i % buzzValue == 0) {
            returnArray.push('Buzz');
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
}
function displayData(fbArray) {
    //get the table body element from the page
    let tableBody = document.getElementById("results");
    //get the template row
    let templateRow = document.getElementById("fbTemplate");
    //clear the table
    tableBody.innerHTML = "";
    for (let i = 0; i < fbArray.length; i+=5) {
        let tableRow = document.importNode(templateRow.content, true);
        //grab use the to put into array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];

        rowCols[1].classList.add(fbArray[i + 1]);
        rowCols[1].textContent = fbArray[i + 1];

        rowCols[2].classList.add(fbArray[i + 2]);
        rowCols[2].textContent = fbArray[i + 2];

        rowCols[3].classList.add(fbArray[i + 3]);
        rowCols[3].textContent = fbArray[i + 3];

        rowCols[4].classList.add(fbArray[i + 4]);
        rowCols[4].textContent = fbArray[i + 4];

        tableBody.appendChild(tableRow);
    }
}