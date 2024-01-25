let day=new Date().getDate();
switch(day)
{
    case 0:
        console.log("The current day is Sunday");
        break;
    case 1:
        console.log("The current day is Monday");
        break;
    case 2:
        console.log("The current day is Tuesday");
        break;
    case 3:
        console.log("The current day is Wednesday");
        break;
    case 4:
        console.log("The current day is Thursday");
        break;
    case 5:
        console.log("The current day is Friday");
        break;
    case 6:
        console.log("The current day is Saturday");
        break;
        default:
            console.log("Invalid");
            break;
}