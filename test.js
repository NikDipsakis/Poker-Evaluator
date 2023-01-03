

const arr = ['a','b']

for (let letter1 of arr){
    for(let letter2 of arr){
        if(letter1 != letter2){
            console.log(letter1," ",letter2)
        }
        
    }
}