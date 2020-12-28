function Check(str)
{
    let exp = /^([^，]{0,15})+(，[^，]{0,15})+(，[^，]{0,15})$/;
    if(exp.test(str)) alert("Valid name");
    else alert("Invalid name");
}