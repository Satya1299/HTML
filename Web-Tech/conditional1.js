//nested if-else
console.log("-------finding the biggest number among 3 Numbers------");
let num1=Number(prompt("Enter the 1st Number"))
let num2=Number(prompt("Enter the 2nd Number"))
let num3=Number(prompt("Enter the 3rd Number"))
console.log(`the first number is: ${num1}`);
console.log(`the second number is: ${num2}`);
console.log(`the thrid number is: ${num3}`);
if(num1>num2)
{
    if(num1>num3)
    {
        console.log(`the given number ${num1} is largest among three Numbers`);
    }else
    {
        console.log(`the given number ${num3} is largest among three Numbers`);
    }
}else{
    if(num2>num3)
    {
        console.log(`the given number ${num2} is largest among three Numbers`);
    }else
    {
        console.log(`the given number ${num3} is largest among three Numbers`);
    }
}

//if-else Ladder
let num4=Number(prompt("----Enter a number?----"))
if(num4===0)
{
    console.log("the given number is zero");

}else if(num4>0)
{
    console.log("the given number is positive");
}
else if(num<0){
    console.log("the given number is negative");
}
else
{
    console.log("the given value is not a number");
}