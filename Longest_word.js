 function findlongestWord(sentence){
    const words = sentence.split(' ')

    let longestword = ''
    for(let word of words){
        if(word.length > longestword.length)
            {
            longestword = word
        }
    }
return longestword
 }
  
 const sentence = 'Everything happens for a  reason'
 console.log(findlongestWord(sentence))