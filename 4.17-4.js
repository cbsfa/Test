function printFS(length)
{
    let FS=new Array(length);
    let str="";
    FS[0]=FS[1]=1;
    for(let i=2;i<length;i++) FS[i]=FS[i-1]+FS[i-2];
    for(let i=0;i<length-1;i++) str+=FS[i]+","
    str+=FS[length-1];
    document.write(str);
}