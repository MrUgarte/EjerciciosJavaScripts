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
        this._contadorProductosAgregados = 0;
    }
}


let producto1 = new Producto("Fideos",5000);
let producto2 = new Producto("Salsa",3000);

console.log(producto1.toString());
console.log(producto2.toString());