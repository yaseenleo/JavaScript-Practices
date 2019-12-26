const convertToRs = (dollar) =>{
    if (typeof dollar === 'number') {
        return dollar * 64
        
    } else {
        throw Error('Amount needs to be in number')
    }
}

try {
// const myValue = convertToRs(5);
const myValue = convertToRs('five'); 

console.log(myValue);
    
} catch (error) {
   console.log(error);
    
}

console.log('i will not run if program freezes');
