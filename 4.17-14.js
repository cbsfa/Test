function reverser(num)
{
    let temp=num.toString();
    let array=[];
    for(let i=0;i<temp.length;i++) array[i]=temp[temp.length-i-1];
    return array;
}
function printArray(array)
{
    for(let i=0;i<array.length;i++) document.write(array[i]+" ");
    document.write("</br>");
}