class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        return this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        return this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;  
    }

    toString(){
        return `Raton : [ IdRaton: ${this._idRaton}, TipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca} ]`;
    }
}


class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString(){
        return `Teclado : [ IdTeclado: ${this._idTeclado}, TipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca} ]`;
    }
}

class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        return this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }

    set tamaño(tamaño){
        return this._tamaño = tamaño;
    }

    toString(){
        return `Monitor: [ IdMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño} ]`;
    }
}

class Computadora{
    static contadorComputadoras = 0;
    
    static get MAX_COMPONENTES(){
        return 1;
    }

    constructor(nombre, raton, teclado, monitor){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._raton = raton;
        this._teclado = teclado;
        this._monitor = monitor;
    }


    toString(){
        return `"IdComputadora: ${this._idComputadora}, nombre: ${this._nombre}"\n ${this._teclado}\n ${this._raton}\n ${this._monitor}`;
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++ Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let mostrarOrdenCadena ='';

        for(let computadora of this._computadoras){
            mostrarOrdenCadena +=`\n${computadora}`;
        }

        console.log(`idOrden: ${this._idOrden}, computadoras: ${mostrarOrdenCadena} `);
    }
}

//Creacion de objeto teclado
let teclado1 = new Teclado("USB","Razer");

//Creacion de objeto raton
let raton1 = new Raton("USB","Logitech");

//Creacion de objeto monitor
let monitor1 = new Monitor("Gear", 24);

//Creacion de objeto computadora
let computadora1 = new Computadora("pcDeMarco", raton1, teclado1, monitor1);


//Prueba de metodos y resultados generales
console.log(computadora1.toString());


//Crear objeto Orden

let orden1 = new Orden();
let orden2 = new Orden();

//Metodos de agregar  mostrar orden
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora1);                              
orden1.mostrarOrden();

orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora1);                              
orden2.mostrarOrden();