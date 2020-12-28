function age(obj)
{
    if(obj.value<=17)
    {
        alert("输入错误");
        obj.value="";
    }
}
function weight(obj)
{
    if(obj.value<80||obj.value>300)
    {
        alert("输入错误");
        obj.value="";
    }
}