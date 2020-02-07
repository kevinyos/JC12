const berapaTahun = (a,b,c,d) =>{
    var population = a
    for(var i = 0;i<(d-a);i++){
        if(population>=d){
            return 'Dibutuhkan '+i+' tahun agar mencapai ' +d+' populasi, dimana di tahun '+i+' penduduknya mencapai '+population
        }else{
            population += Math.floor(population*(b/100))+c
        }
    }
}

console.log(berapaTahun(1000,2,50,1200))
console.log(berapaTahun(1500,5,100,5000))
console.log(berapaTahun(1500000,2.5,10000,2000000))
