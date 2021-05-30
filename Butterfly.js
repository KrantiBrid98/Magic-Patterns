function butterfly(columns){
    let tab = columns*2;
    // ---------upper half----------------
    for(var i = 0; i<=columns; i++){
      let a="";
        for(var j = 0; j < i; j++){
            a+="*"
        }
        for(var k = 0; k < tab-(2*j); k++){
          a+=" "
        }
        for(var j = 0; j < i; j++){
            a+="*"
        }
      console.log(a)
    }
    // -------------lower half---------------
    for(var i = columns; i>=0; i--){
      let b="";
        for(var j = i; j > 0; j--){
            b+="*"
        }
         for(var k = 0; k < tab-(2*i); k++){
            b+=" "
        }
        for(var j = i; j > 0; j--){
            b+="*"
        }
      console.log(b)
    }
}

butterfly(5)