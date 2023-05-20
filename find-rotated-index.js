function findRotatedIndex(arr, val) {

    //find the pivot point of the array

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
    }
    
    //The frames are set to search for the val in the arr
    let startFrame = null;
    let endFrame = null;
    
    //Check if the pivot point is the searched value
    if (arr[pivotPoint] === val){
        return pivotPoint;
    }

    //Check if the val is within the range to the left of the pivot point 
    else if (arr[pivotPoint -1] >= val && arr[0] <= val ){
        startFrame = 0;
        endFrame = pivotPoint -1;
    }

    //Check if the val is within the range to the right of the pivot point
    else if (arr[pivotPoint +1] <= val && arr[arr.length -1 ] >= val ){
        startFrame = pivotPoint +1;
        endFrame = arr.length -1;
    }
    
    while (startFrame <= endFrame){
        let middleFrame = Math.floor((startFrame + endFrame)/2);

        if(arr[middleFrame] < val){
            startFrame = middleFrame +1;
        }
        else if ( arr[middleFrame] > val ){
            endFrame = middleFrame -1;
        }else{
            return middleFrame;
        }
    }
    return -1;
}

module.exports = findRotatedIndex