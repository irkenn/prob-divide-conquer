
function findRotationCount(arr) {

    let start = 0;
    let end = arr.length -1;
    let pivotPoint = null;

    //This loop is to find the pivot point of the array arrangement
    while (start <= end){
        let middle = Math.floor((start + end)/2);
        
        // Case #1 The pivot point is right or left where the middle is
        if( arr[middle -1] > arr[middle] ){
            pivotPoint = middle;
            break;
        }
        else if ( arr[middle +1] < arr[middle] ){
             pivotPoint = middle +1;
            break;
        }  
            
        // Case #2 The pivot point is at the left of the middle 
        else if( arr[start] > arr[middle] && arr[middle] < arr[end] ){
            end = middle -1;
        }

        // Case #3 The pivot point is at the right of the middle
        else if( arr[start] < arr[middle] && arr[middle] > arr[end] ){
            start = middle +1;
        }

        // Case #4 There's not pivot point at all
        else if( arr[start] < arr[middle] && arr[middle] < arr[end])
            return 0;
    }
    return pivotPoint;   
}

module.exports = findRotationCount