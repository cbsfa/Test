let sum = 0.0;
let fruit=document.getElementsByName("fruit");
let submit=document.getElementById("submit");
fruit[0].addEventListener("click",function ()
{
    fruitChoice(fruit[0].checked,fruit[0].value);
})
fruit[1].addEventListener("click",function ()
{
    fruitChoice(fruit[1].checked,fruit[1].value);
})
fruit[2].addEventListener("click",function ()
{
    fruitChoice(fruit[2].checked,fruit[2].value);
})
submit.addEventListener("click",function ()
{
    sum*=1.05;
    alert("Your total cost is $"+sum);
    return false;
})
function fruitChoice(checked,price)
{
    if(checked===true) sum+=parseInt(price);
    else sum-=parseInt(price);
}