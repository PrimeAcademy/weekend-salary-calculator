console.log("Hello World")

let salaryArray = [];
let monthlyCost = 0;



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

let monthlyTotal = annualSalary /12
monthlyCost += monthlyTotal

let monthlyColorElement = document.querySelector("#monthlyTotal");
if(monthlyCost > 20000) {
  monthlyColorElement.style.backgroundColor = "red";
}
monthlyColorElement.innerText = monthlyCost;




customers.innerHTML += 
   ` <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${iDNumber}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
        <td><button onClick="deleteEntry(event)">Delete</button></td>
    </tr>` ;

 salaryArray.push(annualSalary);
   
   

};
let submitbutton = document.querySelector('#Submit-Button');
submitbutton.addEventListener('click', submit);


function deleteEntry(event){
let removeEmployee = event.target.parentElement.parentElement;
  removeEmployee.remove();
}     
