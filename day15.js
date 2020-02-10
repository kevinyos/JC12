//1
function reverse(str){
    var arr = str.map((val)=>{
        return val*-1
    })
    return arr
}
console.log(reverse([1,4,-2,-9,5,-21]))

//2
function pow(str1,str2){
    var output1 =[]
    var output2 =[]
    var split1 = str1.split('')
    var split2 = str2.split('')
    for(var i = 0;i<split1.length;i++){
        if (split2.includes(split1[i])){
            output1.push(split1[i])
            split1[i].shift
            if(split2.indexOf(split1[i])>0){
                split2.splice(0,split2.indexOf(split1[i]))
            }else{
                split2.splice(0,1)
            }   
        }
    }
    var split1 = str1.split('')
    var split2 = str2.split('')
    for(var j=0;j<split2.length;j++){
        if (split1.includes(split2[j])){
            output2.push(split2[j])
            split2[j].shift
            if(split1.indexOf(split2[j])>=1){
                split1.splice(0,split1.indexOf(split2[j]))
            }else if(split1.indexOf(split2[j])==0){
                split1.splice(0,1)
            }
        }
    }
    if(output1.length>output2.length){
        return output1.join('')
    }else{
        return output2.join('')
    }
}
console.log(pow('treysut','rtelsit'))
