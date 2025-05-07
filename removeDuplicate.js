
// ex 1 : using set method

// function removedDuplicate(arr){
//  return  [...new Set (arr)]
// }

// const  arr = [2,4,5,6,2,3,8,6]
// console.log(removedDuplicate(arr))



// ex2 : using filter & indexof 
//  function removedDuplicate(arr){ 
//     return  arr.filter((val,index,self) => self.indexOf(val) == index)
// }

//  const  arr = [2,4,5,6,2,3,8,6]
//  console.log(removedDuplicate(arr))



// ex3 : reduced 
function removedDuplicate(arr){ 
       return arr.reduce ((unique,item) =>  
        {
    return unique.includes(item) ? unique : [...unique,item]} ,[])
    }
    
     const  arr = [2,4,5,6,2,3,8,6]
     console.log(removedDuplicate(arr))
