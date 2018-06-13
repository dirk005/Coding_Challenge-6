const answer = (arr,tar) => {
  answerArr =[];
   for (let num of arr) {
      for(let num2 of arr){
         if( num + num2 === tar && num !== num2 ){
          answerArr = [num,num2];
          return answerArr;
        }        
     }    
  }
 return answerArr;
}

const array = [1,2,3];
const tar = 4;
answer(array,tar)

answerArr.length ? console.log(answerArr) : console.log(`No values in array [${array}] adds to ${tar}`);
