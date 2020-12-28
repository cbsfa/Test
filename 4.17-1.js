function printTable()
{
    let table = "数字    平方    立方\n";
    for(let i=5; i<=15; i++)
    {
        let num = Math.pow(i, 1);
        table+=returnNum(num,2);
        num = Math.pow(i, 2);
        table+=returnNum(num,10);
        num = Math.pow(i, 3);
        table+=returnNum(num,10);
        table+="\n";
    }
    alert(table);
}
function returnNum(num,length)
{
    num =(Array(length).join(" ")+num).slice(-length);
    num+=" ";
    return(num);
}