function Print(array)
{
    for(let i=0;i<array.length;i++) document.write(array[i]+" ");
    document.write("</br>");
}
function no_zeros(array)
{
    let temp=false;
    array.forEach(function (item,index,arr){if(item===0){arr.splice(index,1);}})
    return temp;
}