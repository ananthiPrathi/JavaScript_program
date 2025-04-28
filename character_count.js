function countCharacterOccurence(str){

    const count = {}
for(let char of str){
    if(count[char]){
        count[char]++
    }
    else{
        count[char]=1
    }
}
    return count
}

const string = "Happy morning"
console.log(countCharacterOccurence(string))