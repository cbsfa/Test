function row_averages(matrix)
{
    let array=[];
    for(let i=0;i<matrix.length;i++)
    {
        let average=0.0;
        for(let j=0;j<matrix[i].length;j++) average+=matrix[i][j];
        average/=matrix[i].length;
        array[i]=average;
    }
    return array;
}
function printArray(array)
{
    for(let i=0;i<array.length;i++) document.write(array[i]+" ");
    document.write("</br>");
}
function printMatrix(matrix)
{
    for(let i=0;i<matrix.length;i++) printArray(matrix[i]);
}