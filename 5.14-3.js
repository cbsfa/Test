let sum = 0.0;
function fruitChoice(checked,price)
{
    if(checked===true) sum+=parseInt(price);
    else sum-=parseInt(price);
}
function submitSum()
{
    sum*=1.05;
    alert("Your total cost is $"+sum);
    return false;
}