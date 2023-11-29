document.addEventListener("DOMContentLoaded", () => {
    const navtoggle = document.querySelector(".nav-toggle");
    const navmenu = document.querySelector(".nav-menu");
    const carrocp = document.querySelector(".carrito")
    const carritocont = document.querySelector(".carrito_menu")


    carrocp.addEventListener("click", () => {
        carritocont.classList.toggle("active")
    })

    navtoggle.addEventListener("click", () => {
        navmenu.classList.toggle("nav-menu_visible");

    });

    producto();
});

function formatCurrency(amount) {
    return amount.toLocaleString('es-ES', { style: 'currency', currency: 'COP' });
}

let productos = [
    { id: 1, img: "./p1.jpeg", Nombre_Producto: "Casco Shaft", Nombre_Vendedor: "Carlos Sanguino", Precio_Anterior: 450000, Precio: 320000 },
    { id: 2, img: "./p2.jpeg", Nombre_Producto: "Casco Icon", Nombre_Vendedor: "Omaira Ardila", Precio_Anterior: 600000, Precio: 480000 },
    { id: 3, img: "./p3.jpeg", Nombre_Producto: "Casco ICH", Nombre_Vendedor: "Jose Mora", Precio_Anterior: 480000, Precio: 200000 },
    { id: 4, img: "./p4.jpeg", Nombre_Producto: "Casco HRO", Nombre_Vendedor: "Jhon Alexander Martinez", Precio_Anterior: 320000, Precio: 220000 },
    { id: 5, img: "./p5.jpeg", Nombre_Producto: "Casco Direli", Nombre_Vendedor: "Jesus Macias", Precio_Anterior: 390000, Precio: 350000 },
    { id: 6, img: "./p6.jpeg", Nombre_Producto: "Casco Mtthunder", Nombre_Vendedor: "Luz Amparo Sierra", Precio_Anterior: 520000, Precio: 320000 },
    { id: 7, img: "./p7.jpeg", Nombre_Producto: "Casco Shaft", Nombre_Vendedor: "Roberto Aguirre", Precio_Anterior: 650000, Precio: 420000 },
    { id: 8, img: "./p8.jpeg", Nombre_Producto: "Casco shaft", Nombre_Vendedor: "Sandra Gonzalez", Precio_Anterior: 490000, Precio: 240000 },
    { id: 9, img: "./p9.jpeg", Nombre_Producto: "Casco Xtrong", Nombre_Vendedor: "Milena Rojas", Precio_Anterior: 370000, Precio: 225000 },
    { id: 10, img: "./p10.jpeg", Nombre_Producto: "Casco Shaft", Nombre_Vendedor: "Claudia Morales", Precio_Anterior: 650000, Precio: 490000 },
    { id: 11, img: "./p11.jpeg", Nombre_Producto: "Casco Cascoloco", Nombre_Vendedor: "Maribel Aguilar", Precio_Anterior: 370000, Precio: 180000 },
    { id: 12, img: "./p12.jpeg", Nombre_Producto: "Casco Xone", Nombre_Vendedor: "Mariana Sandoval", Precio_Anterior: 430000, Precio: 290000 },

];

function producto() {
    let fragment = document.createDocumentFragment()
    productos.forEach((item, index) => {
        let div = document.createElement("div")
        div.classList.add("contenedor")
        let img = document.createElement("img")
        img.src = item.img
        img.classList.add("imagen")
        let divtef = document.createElement("div")
        divtef.classList.add("divtef")
        let h2 = document.createElement("h2")
        h2.classList.add("articulos")
        h2.textContent = item.Nombre_Producto
        let Nombre_Vendedor = document.createElement("p")
        Nombre_Vendedor.classList.add("vendedor")
        Nombre_Vendedor.textContent = item.Nombre_Vendedor
        let puntuacion = document.createElement("div")
        puntuacion.classList.add("puntuacion")
        let i1 = document.createElement("i")
        i1.classList.add("fas", "fa-star")
        let i2 = document.createElement("i")
        i2.classList.add("fas", "fa-star")
        let i3 = document.createElement("i")
        i3.classList.add("fas", "fa-star")
        let i4 = document.createElement("i")
        i4.classList.add("fas", "fa-star-half-alt")
        let i5 = document.createElement("i")
        i5.classList.add("far", "fa-star")
        let Precio_Anterior = document.createElement("p")
        Precio_Anterior.classList.add("Precio_Anterior")
        Precio_Anterior.textContent = formatCurrency(item.Precio_Anterior)
        let Precio = document.createElement("p")
        Precio.textContent = formatCurrency(item.Precio)
        Precio.classList.add("Precio")
        let boton = document.createElement("button")
        boton.classList.add("botonp")
        boton.textContent = "agregar Carrito"
        boton.addEventListener("click", () => {
            addtable(item)

        })

        div.appendChild(img)
        div.appendChild(divtef)
        divtef.appendChild(h2)
        divtef.appendChild(Nombre_Vendedor)
        divtef.appendChild(puntuacion)
        puntuacion.appendChild(i1)
        puntuacion.appendChild(i2)
        puntuacion.appendChild(i3)
        puntuacion.appendChild(i4)
        puntuacion.appendChild(i5)
        divtef.appendChild(Precio_Anterior)
        divtef.appendChild(Precio)
        divtef.appendChild(boton)
        fragment.appendChild(div)
    })
    document.getElementById("contenedores").appendChild(fragment)
}


let carritov = [];

function calculo(){
    let total = carritov.reduce((suma, item) => suma + item.total, 0)
    return total
}

function addtable(item) {
    const obj = carritov.find((obj) => obj.id === item.id);
    if (obj) {
        obj.cantidad += 1;
        obj.total = obj.precio * obj.cantidad;
    } else {
        let producto = {
            id: item.id,
            img: item.img,
            nombre: item.Nombre_Producto,
            precio: item.Precio,
            total: item.Precio,
            cantidad: 1
        }
        carritov.push(producto)
    }
    document.getElementById("carrito_info").innerHTML = "";
    agregart()
}

function agregart() {
    let frag = document.createDocumentFragment();
    carritov.forEach((item, index) => {
        let tr = document.createElement("tr");
        let timg = document.createElement("td")
        let imga = document.createElement("img")
        imga.src = item.img
        timg.appendChild(imga)
        imga.classList.add("imga")
        let nombre = document.createElement("td")
        nombre.textContent = item.nombre
        let precio = document.createElement("td")
        precio.textContent = formatCurrency(item.total)
        let cantidad = document.createElement("td")
        cantidad.textContent = item.cantidad
        let tdvaciar = document.createElement("td")
        let vaciar = document.createElement("button")
        tdvaciar.appendChild(vaciar)
        vaciar.textContent = "Borrar"
        vaciar.classList.add("bquitar")
        vaciar.addEventListener("click", () => {
            quitar(index)
        });

        tr.appendChild(timg);
        tr.appendChild(nombre);
        tr.appendChild(precio);
        tr.appendChild(cantidad);
        tr.appendChild(tdvaciar);
        frag.appendChild(tr);
    })
    document.getElementById("carrito_info").appendChild(frag)
    const totale = document.getElementById("Total");
    totale.textContent = formatCurrency(calculo());
}

function quitar(i) {
    let index = i;
    carritov.splice(index, 1);
    document.getElementById("carrito_info").innerHTML = "";
    agregart();
}

function borrrartienda(){
    carritov = [];
    document.getElementById("carrito_info").innerHTML = "";
    agregart();
}
