let month = Number(prompt("Enter the month"));
let year = Number(prompt("Enter the year"));
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`the given month ${month} is having 31days`);

        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`the given month ${month} is having 30days`);
        break;

    case 2:
        if ((year % 400 === 0) || ((year % 100 != 0))) {
            console.log(`the given month ${month} is having 29 days and the given year ${year} is a leap year`);
        }else{
            console.log(`the given month ${month} is having 28 days and the given year ${year} is not a leap year`);
        }
        break;
        default:
            console.log("provide valid details");
            break;
            
}