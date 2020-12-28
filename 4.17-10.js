function first_vowel(str)
{
    for(let i=0;i<str.length;i++)
    {
        switch (str[i])
        {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':return i+1;
        }
    }
    return -1;
}