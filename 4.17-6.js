function Check(text)
{
    let array=text.match(/[a-zA-Z]+/g);
    array.sort();
    for(let i=0;i<array.length;i++) document.write(array[i]+"</br>");
}