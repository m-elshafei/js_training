let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samera"]
let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia","Anwar"]

let i = 0 ;
for (; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") {
        break;
    }
}
document.write(`We Have ${i} Admins`)
for (let j = 0; j < i; j++) {
    document.write(`<hr>`)
    document.write(`The Admin For Team ${[j + 1]}  Is  ${myAdmins[j]} `)
    document.write(`<h3>Team Member : </h3>`)
    let c = 0 ;
    for (let k = 0; k < myEmployees.length; k++) {
        if ( myAdmins[j].charAt(0) === myEmployees[k].charAt(0)) {     
            c++;
            document.write(`<p> - ${c} ${myEmployees[k]} </p>`);
        }
    }
}