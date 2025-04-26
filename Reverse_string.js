const a = 'Hello'
const reversedstring = reversestring(a)
console.log(reversedstring)


function reversestring(str)
{
     reversed = ''

    for(let i=str.length-1;i>=0;i--){
        reversed += str[i]
    }
    return reversed

}


