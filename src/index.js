// You should implement your task here.

module.exports = function towelSort (matrix) {

 if (Array.isArray(matrix)){
   if (matrix.length > 0) {
    let array =  matrix.reduce((flat,current, index)=> {
      if (index % 2 == 1){
        return flat.concat(current.reverse());
      }
      return flat.concat(current);
    },[]);
    return array;
   }
 }

 return [];
}
