
 let newArray =[];
 const answer = (arr) => {
     newArray = []; // clear newArray
    //make numbers array and string array 
    const numberArray = arr.filter(number => typeof(number) === 'number');
    const stringArray = arr.filter(number => typeof(number) === 'string');

    // sort smallest to largest
    numberArray.sort((a,b) => a-b); 
    stringArray.sort((a,b) => a-b); 

    // group duplicates into array
    const numbers = groupArray(numberArray);
    const strings = groupArray(stringArray);

    //if has values in string array make new array organizes strings differently from number types 
    strings.length != 0 ?(
    newArray.push(numbers),
    newArray.push(strings)
    )
    : 
    // no stirngs just add numbers
    newArray = numbers;
     
    return newArray;
  
 }
//group duplicates in array
 const groupArray = (array) => {
  let group = array.slice();
  let i = 0;

  while (i < group.length) {
    let value = group[i];
    let index = group.lastIndexOf(value);
    let count = index + 1 - i;

    if (count > 1) {
      group.splice(i, count, Array(count).fill(value));
    }
    i++;
  }  
  return group;
};

 const arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
 answer(arr);
 console.log(newArray);
  const arr2 = [1, "2", "3", 2];
 answer(arr2);
 console.log(newArray);
 const arr3 = [1,2,4,591,392,391,2,5,10,"2","3",2,1,1,1,20,20];
 answer(arr3);
 console.log(newArray);

