class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        return this._precio = precio;
    }
    
    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}

class Orden{
    static contadorOrden = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._ordenId = ++Orden.contadorOrden;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._ordenId;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }
        else{
            console.log("No se pueden agregar mas productos, se alcanzo el maximo");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio; //totalVenta + producto.precio 
        }
        return totalVenta;
    }
    
    mostrarOrden(){
        let productosOrden = ' ';
        for(let producto of this._productos){
            productosOrden += '\n {' + producto.toString() + '} ';
        }

        console.log(`Orden: ${this._ordenId} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}


let producto1 = new Producto("Fideos",5000);
let producto2 = new Producto("Salsa",3000);
let producto3 = new Producto("Mayonesa",250);

console.log(producto1.toString());
console.log(producto2.toString());

let orden1 = new Orden();
let orden2 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);

orden2.mostrarOrden();