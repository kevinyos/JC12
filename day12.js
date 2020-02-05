function minusplus(str){
    var x = str.toString()
    var split = x.split('')
    var output = 0
    for(var i=0;i<split.length;i++){
        if(i%2==0){
            output += parseInt(split[i]) 
        }else{
            output -= parseInt(split[i]) 
        }
    }
    console.log(output + ' hasil hitung')
    if(output%11==0){
        return true
    }else{
        return false
    }
}
console.log(minusplus(7194))
