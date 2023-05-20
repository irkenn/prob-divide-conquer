function sortedFrequency(arr, val) {
    let frame1Start = 0;
    let frame1End = arr.length - 1;
    
    let startIdx = null;
    
    //A while loop to find the start 
    while (frame1Start <= frame1End){
        console.log('startIdx', startIdx);
        
        //Framework 1 section, this one will focus on finding the start of the seciton of numbers in the array
        let frame1Middle = Math.floor([frame1Start + frame1End]/2);
        
        if( arr[frame1Middle] === val ){
            //if we landed right at the edge of the section
            if( arr[frame1Middle -1] < val ){
                startIdx = frame1Middle;
                break;
            }
            //this means we're at index 0 of the array
            else if( frame1Middle === frame1Start && arr[frame1Middle +1] === val ){
                startIdx = frame1Middle;
                break;
            }
            else{
                frame1End = frame1Middle - 1;
            }
        }
        else if( arr[frame1Middle] < val ){
            if(arr[frame1Middle + 1] === val){
                startIdx = frame1Middle + 1;
                break;
            }
            else{
                frame1Start = frame1Middle + 1;
            }
        }
        else if( arr[frame1Middle] > val ){
            if(arr[frame1Middle -1] === val){
                startIdx = frame1Middle -1;
                break;
            }
            else{
                frame1End = frame1Middle - 1;
            }
        }
        
    }
    if(startIdx === arr.length-1 || arr[startIdx +1] > val){
        return 1;
    }
    else if(startIdx===null){
        return -1;
    }
    
    //The logic in here is for searching for the end of the number section 
    //if there is more than one number
    
    let endIdx = null;
    let frame2Start = startIdx;
    let frame2End = arr.length -1;
    
    while(frame2Start <= frame2End){

        //Frame 2 section 
        let frame2Middle = Math.floor([frame2Start + frame2End]/2);
        
         if( arr[frame2Middle] === val ){
            //if we landed right at the edge of the end of the section
    
            if( arr[frame2Middle + 1] > val ){
                endIdx = frame2Middle;
                break;
            }
                
            //this means we're at the end of the array
            else if( frame2Middle === frame2End && arr[frame2Middle -1] === val ){
                endIdx = frame2Middle;
                break;
            }
            else{
                frame2Start = frame2Middle + 1;
            }
        }
    
        else if( arr[frame2Middle] < val ){
            if(arr[frame2Middle + 1] === val){
                frame2Start = frame2Middle + 1;
            }
            else{
                frame2Start = frame2Middle + 1;
            }
        }
        else if( arr[frame2Middle] > val ){
            if(arr[frame2Middle -1] === val){
                endIdx = frame2Middle -1;
                break;
            }
            else{
                frame2End = frame2Middle - 1;
            }
        }
    }  
    if(startIdx === null & endIdx === null){
        return -1
    }   
    
    return  (endIdx - startIdx)+1;
}

module.exports = sortedFrequency;