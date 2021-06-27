function numberPyramid(row){
    for(var i=1; i <= row; i++){
        let s = "";
        for(var j=1; j <=i; j++){
            s+=j
        }
        for(var k=1; k<=row*2-i*2; k++){
            s+="*"
        }  
        for( var l= i; l>=1; l--){
            s+=l
        }
        console.log(s)
    }
}

numberPyramid(5)

// 1********1
// 12******21
// 123****321
// 1234**4321
// 1234554321