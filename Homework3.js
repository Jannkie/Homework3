/* Conditionals */

let firstName = "Neo";
let age = 3;
let price = 35;
if (age < 18){
    console.log('Underage, Price is free')
} 

else if (firstName = "James");
else if (age = 25); {
    console.log('discount by 20%')
}

/* Arrays */

// Problem 5:

const numb = [-100, 100];

const newNumb = numb.map(num => num +1);
console.log(newNumb);

// Problem 7:

const userNames = ["NEO", "TEKLE", "DAVID", "NIKA", "GIGI", "LAZO", "GEGE", "ANDRE", "LINO", "ANI", "ELLE"];

for (let i = 0; i < userNames.length; i++) {
    userNames[i] = userNames[i].toLowerCase();
}

console.log(userNames);

// Problem 8:

for (let i = 0; i < userNames.length; i++) {
    userNames[i] = userNames[i].toUpperCase();
}

    console.log(userNames);

    // Problem 9:

    const surNames = ["Kalandadze", "Samushia", "Adeishvili", "Gegechkori", "Gvalia", "Bolkvadze", "Mosashvili", "Chkhikvadze", "Aduashvili", "Chigogidze", "Vadachkoria"];

    for (let i = 0; i < surNames.length; i++) {
    surNames[i] = surNames[i].toUpperCase();
    }
    console.log(surNames);

    // Problem 10:

    let firstNames = ["NEO", "TEKLE", "DAVID", "NIKA", "GIGI", "LAZO", "GEGE", "ANDRE", "LINO", "ANI", "ELLE"];

    let lastNames = ["Kalandadze", "Samushia", "Adeishvili", "Gegechkori", "Gvalia", "Bolkvadze", "Mosashvili", "Chkhikvadze", "Aduashvili", "Chigogidze", "Vadachkoria"];

    // for (let i = 0; i < surNames.length; i++) {
    //     fullName.push (firstNames[i] + " " + lastNames[i]);
    // }

    

    // console.log(fullName);

    const fullNames = [];

    for (let i = 0; i < firstNames.length; i++) {
        fullNames.push (
            [firstNames[i], lastNames[i]]
        );
    }

    for (let i = 0; i < fullNames.length; i++) {
        console.log(fullNames[i]);
    }