function Print(array)
{
    for(let i=0;i<array.length;i++) document.write(array[i]+" ");
    document.write("</br>");
}
function counter(array)
{
    let negative=0,zero=0,positive=0;
    for(let i=0;i<array.length;i++)
    {
        let temp;
        if(array[i]>0) temp=1;
        else if(array[i]==0) temp=0;
        else temp=-1;
        switch (temp)
        {
            case 1:positive++;break;
            case 0:zero++;break;
            case -1:negative++;break;
        }
    }
    return [negative,zero,positive];
}