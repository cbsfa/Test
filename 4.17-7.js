function Check(text,type)
{
    let array=text.match(/[a-zA-Z]+/g);
    if(type==="ascending") array.sort();
    else if(type==="descending")
    {
        for(let i=0;i<array.length-1;i++)
        {
            for (let j=i+1;j<array.length;j++)
            {
                if(array[i]<array[j])
                {
                    let temp=array[i];
                    array[i]=array[j];
                    array[j]=temp;
                }
            }
        }
    }
    else
    {
        alert("输入错误，请刷新页面后重新输入");
        return;
    }
    for(let i=0;i<array.length;i++) document.write(array[i]+"</br>");
}