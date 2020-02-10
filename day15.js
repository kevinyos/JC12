function reverse(str){
    var arr = str.map((val)=>{
        return val*-1
    })
    return arr
}
console.log(reverse([1,4,-2,-9,5,-21]))
