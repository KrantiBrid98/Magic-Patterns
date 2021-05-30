function christmasTree(row){
    for(let i = 1; i <= row; i++){
    // ------------------leaves-------------------------------
      let leaves = "";
      for(let column = row; column > 0 ; column--){
        if(column >= i){ // i = 1; column = 10
          leaves +=" "
        }
        if(column < i){
          leaves +="\\"
        }
        if(column == 1){
          leaves +="|"
        }
      }
      for(let column2 = 1; column2 <i; column2++){
        leaves +="/"
      }
      console.log(leaves)
    }
    // -----------------bark---------------------------------
    for(let k = 1; k <= 3; k++){
        let bark = ""
        for(var l = row; l>=0;l--){
        if(l > 1){
            bark += " "
        }
        if(l<= 1){
            bark += "|"
        }
      }
      bark += "|"
      console.log(bark) 
    }
    // ------------------stand---------------------------------
   for(let m = 1; m <= 1; m++){
        let stand = ""
        for(var n = row; n>=0; n--){
        if(n > 2){
            stand += " "
        }
        if(n<= 2){
            stand += "/"
        }
      }
      stand += "\\\\\\"
      console.log(stand) 
    }
  }
  
  christmasTree(10)