// Task 1

// Employee Grade according to salary   

var salary=+prompt('Enter your Salary');

if(salary>100000){
    console.log(`
    This organization doesn't exceed the company policy maximum package allocated is 1,00,000
    you've entered the wrong amount ${salary} exceed the company policy
    please enter a valid amount of salary    
    `);
}
else if (salary<=100000 && salary>=80000) {
    console.log(`
    According to your salary ${salary} 
    you'r a A Grade employee
    `);   
}
else if (salary<80000 && salary>=60000) {
    console.log(`
    According to your salary ${salary} 
    you'r a B Grade employee
    `);   
}
else if (salary<60000 && salary>=40000) {
    console.log(`
    According to your salary ${salary} 
    you'r a C Grade employee
    `);   
}
else if (salary<40000 && salary>=20000) {
    console.log(`
    According to your salary ${salary} 
    you'r a D Grade employee
    `);   
}
else if (salary<20000 && salary>=10000) {
    console.log(`
    According to your salary ${salary} 
    you'r a E Grade employee
    `);   
}
else {
    console.log(`
    According to your salary ${salary} 
    you'r an Contracter or Freelancer
    `);   
}




// Task 2

// with help of return() write a switch condition without break for identify the role of Employee

alert(`Please enter the role you've own in your Company (eg:Manager,Teamlead,Developer,Tester,Maintanence`);

var yourPosition=prompt("Enter your position in organisation");

function company(yourPosition) {
    switch (yourPosition) {
        case "Manager", "manager":
            return `
            you'r ${yourPosition} 
            You have the responsibility to manage and control the organization & employee
            `;
        case "Teamlead","teamlead", "TL","tl":
            return `
            you'r ${yourPosition}
            You are the one who lead the entire team during the development of project
            `;
        case "Developer", "developer":
            return `
            you'r ${yourPosition}
            Developer should've responsible to complete the project with in given duration of period
            `;
        case "Tester", "tester":
            return`
            you'r ${yourPosition}
            Your Responsibility is to test the entire project & provide feedback about
            performance code, reusability and effectiveness
            `;
        case "Maintanence", "maintanence":
            return `
            you'r ${yourPosition}
            Your responsiblity is to maintain the system for smooth functioning and 
            performance effectively according to user feedback
            `;
        default:
            return `
            you'r not an employee
            `;   
    }
}

console.log(company(yourPosition));

