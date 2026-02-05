//Q: write a function that reverses a string

//Example answers
function reverse(str){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
      backwards.push(str[i]);
    }
    return backwards.join('');
  }
  
  function reverse2(str){
    //check for valid input
    return str.split('').reverse().join('');
  }
  
  const reverse3 = str => [...str].reverse().join('');
  
  console.log(reverse('Does it work with longer string'))
  reverse('Timbits Hi')
  reverse3('Timbits Hi')


//own answers
function reverseStr(str){
  //remember to check for conditioning
  if (!str || typeof str !== 'string' || str.length < 2) return str; 

  var newStr = ''; 
  for (let i = str.length - 1; i >= 0; i --){
    newStr +=  str[i]; 
  }
  return newStr; 
}

function reverseStr2(str){
   if (!str || typeof str !== 'string' || str.length < 2) return str; 
  //split(): a JS built in method that split a string and turn it into an array. it can take a parameter, whicha can be ' ' aka space
  return str.split('').reverse().join('');
}

function reverseStr3(str){
   if (!str || typeof str !== 'string' || str.length < 2) return str; 
  // the spread operator turn anything into an array while keeping the original order
  return [...str].reverse().join(''); 
}
console.log(reverseStr('Does it work with longer string')); 