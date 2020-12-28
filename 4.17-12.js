function tst_name(str)
{
    let test=/^[A-Z][a-z]*,[a-z]+ [A-Z]/;
    return test.test(str);
}