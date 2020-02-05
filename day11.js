var arrProduct = [
    {id: 1579581080923,category:'Fast Food',name:'Noodle',price:3500,stock:9},
    {id: 1579581081130,category:'Electronic',name:'Headphone',price:430000,stock:8},
    {id: 1579581081342,category:'Clothes',name:'Hoodie',price:300000,stock:7},
    {id: 1579581081577,category:'Fruit',name:'Apple',price:10000,stock:8},
];

var arrCategory = ['All','Fastfood','Electronic','Clothes','Fruit'];

var category = () =>{
    var listCategory = arrCategory.map((Element)=>{
        return(
            `
            <option value = "${Element}">${Element}</option>
            `
        )
    })
    document.getElementById("categoryInput").innerHTML = listCategory.join('')
    document.getElementById("categoryInput2").innerHTML = listCategory.join('')
}
category()

var categoryFilter = () =>{
    var listCategoryFilter = arrCategory.map((Element)=>{
        return(
            `
            <option value = "${Element}">${Element}</option>
            `
        )
    })
    document.getElementsByName("categoryFilter").innerHTML = listCategoryFilter.join('')
}
categoryFilter()

var showMenu = (str) => {
    var listMenu = arrProduct.map((elem, index)=>{
        if(elem.id === str){
        return(
            `
            <tr>
                <td>${elem.id}</td>
                <td><input type="text" value="${elem.name}" id="editNama"> </td>
                <td>${elem.category}</td>
                <td><input type="text" value="${elem.price.toLocaleString()}" id="editHarga"></td>
                <td><input type="text" value="${elem.stock}" id="editStock"></td>
                <td><input type="button" value="Cancel" onclick= "cancelData(${elem.id})"></td>
                <td><input type="button" value="Save" onclick= "saveData(${index})"></td>
            </tr>
            `
        )}
        return(
            `
            <tr>
                <td>${elem.id}</td>
                <td>${elem.name}</td>
                <td>${elem.category}</td>
                <td>${elem.price.toLocaleString()}</td>
                <td>${elem.stock}</td>
                <td><input type="button" value="Add" onclick="buyMenu(${elem.id})"></td>
                <td><input type="button" value="Delete" onclick="deleteData(${elem.id})"></td>
                <td><input type="button" value="Edit" onclick="editData(${elem.id})"></td>
            </tr>
            `
        )
    })
    document.getElementById("output").innerHTML = listMenu.join('')
}

var addData =() =>{
    var nama= document.getElementById('nama').value;
    var harga=document.getElementById('harga').value;
    var stock=document.getElementById('stock').value;
    var category=document.getElementById('categoryInput').value;
    var time = new Date()

    var newProduct = {
        id:time.getTime(),
        name: nama,
        price: harga,
        stock,
        category
    }

    arrProduct.push(newProduct)
    showMenu()
}

var filterNama = () => {
    var nama = document.getElementById('namaFilter').value
    var namaLower = nama.toLowerCase()
    var output = arrProduct.filter((val)=>{
        var namaProdLower = val.name.toLowerCase()
        return namaProdLower.includes(namaLower)
    })
    showFilterResult(output)  
}

var filterHarga = () => {
    var hargaMin = document.getElementById('hargaFilter1').value
    var hargaMax = document.getElementById('hargaFilter2').value
    if(!(hargaMin === '' || hargaMax === '')){
        var filterHarga = arrProduct.filter((val)=>{
            return val.price >= hargaMin && val.price <= hargaMax
        })
    }else{
        filterHarga = arrProduct
    }
    return showFilterResult(filterHarga)  
}


var filterCategory = () => {
    var category = document.querySelector('#categoryInput2').value
    if(category === 'All'){
        return showFilterResult(arrProduct)
    }
    let showCategoryFilter = arrProduct.filter((val)=>{
        return val.category === category
    })
    showFilterResult(showCategoryFilter)
}

var showFilterResult = (hasilFilter) =>{
    var results = hasilFilter.map((val)=>{
        return(
            `
            <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.category}</td>
                <td>${val.price.toLocaleString()}</td>
                <td>${val.stock}</td>
            </tr>
            `
        )
    })
    return document.getElementById('output').innerHTML = results.join('')
}

var deleteData = (idProduct) =>{
    arrProduct = arrProduct.filter((val)=>{
        return val.id !== idProduct
    })
    showMenu()
}

var editData = (id) =>{
    showMenu(id)
}

var cancelData = () =>{
    showMenu()
}


var saveData = (index) =>{
    var nama = document.getElementById("editNama").value
    var price = document.getElementById("editHarga").value
    var stock = document.getElementById("editStock").value
    arrProduct[index] = {
        ...arrProduct[index],
        name : nama,
        price,
        stock
    }
    showMenu()
}

var showCart = (arr) => {
    var cartMenu = arr.map((elem, index) => {
        return (
            `
                 <tr>
                    <td>${elem.id}</td>
                    <td>${elem.name}</td>
                    <td>${elem.category}</td>
                    <td>${elem.price}</td>
                    <td><input type="button" value="Remove" onclick="deleteCart(${index})"></td>
                </tr>
            `
        )
    })
    return document.getElementById('cart').innerHTML = cartMenu.join('')
}

var buyProduct = []

var buyMenu = (idProduct) => {
    for(i=0;i<arrProduct.length;i++)
        if(arrProduct[i].id === idProduct){
            buyProduct.push(arrProduct[i])
        }
    showCart(buyProduct)
}

var deleteCart = (id) => {
    buyProduct.splice(id, 1)
    showCart(buyProduct)
}

showMenu()
