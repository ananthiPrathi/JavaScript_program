const str = 'happy'
console.log(checkpalindrome(str))
function checkpalindrome(str){

    function reversestring(s)
    {
         reversed = ''
    
        for(let i=str.length-1;i>=0;i--){
            reversed += str[i]
        }
        return reversed
    
    }
      const clearnedstring = str.toLowerCase()
      return clearnedstring === reversestring(clearnedstring)

}









console.log('happy')

