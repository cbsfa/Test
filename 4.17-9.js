function Print(array)
{
    for(let i=0;i<array.length;i++) document.write(array[i]+" ");
    document.write("</br>");
}
function e_names(name)
{
    let num=0;
    let test1=/.+ie$/;
    let test2=/.+y$/;
    for(let i=0;i<name.length;i++)
    {
        if(test1.test(name[i])) num++;
        else if(test2.test(name[i])) num++;
    }
    return num;
}