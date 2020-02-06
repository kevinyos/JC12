function duplicateCount(str){
    var split = str.split('')
    var output = []
    var count = 0
    var find
    for (var i=0;i<split.length;i++){
        if(output.includes(split[i])){
            find = output.reduce(function(n,val){
                return n+(val === split[i])
            },0)
            if(find<=1){
                output.push(split[i])
                count +=1
            }
        }else{
            output.push(split[i])
        }
    }
    return count
}

console.log(duplicateCount('caa12cb2ab'))
