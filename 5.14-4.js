function submitSum()
{
    let apple=document.getElementsByName("fruit")[0].value*59;
    let orange=document.getElementsByName("fruit")[1].value*49;
    let banana=document.getElementsByName("fruit")[2].value*39;
    let sum=(apple+orange+banana)*1.05;
    alert("Your total cost is $"+sum);
}