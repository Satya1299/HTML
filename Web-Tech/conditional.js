// console.log("----if condition----");
// let marks=Number(prompt("enter the marks"));
// if(marks>35)
// {
//     console.log("No Backlog");
// }
console.log("----if else condition----");
console.log("----even odd----");
let num=Number(prompt("enter the number to check?"));
if(num%2==0)
{
    console.log(`${num} is a even number`);
}
else
{
    console.log(`${num} is a odd number`);
}
let a=30;
let b=40;
if(num>0)
{
    a=a^b;
    b=a^b;
    a=a^b;
    console.log(`the Swapping od a and b is a:${a} and b:${b}`);
}
else
{
    console.log(`the Swapping od a and b is a:${a} and b:${b}`);
}
