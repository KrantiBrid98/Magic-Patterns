function StarTriangle(row){
  let column = 2* row - 1;
   if(row%2 !== 0){
     for(var i=1; i <= row; i++){
       let s = "";
       for(var j = 1; j <= column; j++){
        if(j <= row-i){
          s+=" "
        }
        if( j > column-i-i+1){
          s+="*"
        }
       }
      console.log(s)
     }
   } else {
     console.log("Enter some odd number")
   }
}

StarTriangle(7)