
function findFloor(arr, val) {

    

    let start = 0;
    let end = arr.length -1;
    let pivotPoint = null;

    //This loop is to find the pivot point of the array arrangement
    while (start <= end){
        let middle = Math.floor((start + end)/2);

        
        // Case #1 Middle value is exactly val
        if (arr[middle] === val){
            return arr[middle];
        }
        
        // Case #2 The floor Val exactly at the middle
        else if( arr[middle -1] < val && arr[middle+1] > val && arr[middle] != arr[middle +1] ){
            console.log('****')
            return arr[middle];
        }
 
        
        //Case #3 The floor val is at the left of the middle
        else if( arr[middle] >= val && arr[start] <= val ){
            end = middle;
        }

        //Case #4 The floor val is at the right of the middle
        else if( arr[middle +1] <= val  && arr[end] >= val ){
            start = middle;
        }
  
        // Case #5 There's no value lower than val 
        else if( arr[start] > val ){
         return -1;
        }

        // Case #6 The larger number of the array is the floor value
        else if( arr[end] <= val){
            return arr[end];
        }
            
    }
    return -1;   
}

module.exports = findFloor