console.log("Hello World")

let salaryArray = [];
let MonthlyCost = 0;



function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
    event.preventDefault();
};
function submit(event) {
event.preventDefault();


let firstName = document.querySelector('#FirstName-input').value;
let lastName = document.querySelector('#LastName-input').value;
let iDNumber = Number(document.querySelector('#IdNumber-input').value);
let jobTitle= document.querySelector('#JobTitle-input').value;
let annualSalary = Number(document.querySelector('#AnnualSalary-input').value);




let monthlySalary = annualSalary / 12;
let customers = document.querySelector('#customers')
customers.innerHTML += 
   ` <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${iDNumber}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
        <td>${monthlySalary}</td>
    
    </tr>` ;


    let theNewEntry = {
        first: firstName,
        last: lastName,
        id: iDNumber,
        job: jobTitle,
        salary: annualSalary
    }
    salaryArray.push(theNewEntry)


}
let submitbutton = document.querySelector('#Submit-Button');
submitbutton.addEventListener('click', submit);