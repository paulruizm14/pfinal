import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosProductosService } from 'src/app/services/datos-productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  constructor(private rutaActiva: ActivatedRoute, private servicio: DatosProductosService) { }
  producto: any;
  cantidadp:any

  ngOnInit() {
    this.cantidadp = 1;
    this.rutaActiva.params.subscribe( ruta =>{
      console.log( ruta['id'])
       const id= ruta['id']
       this.producto = this.servicio.getProductosById(id).subscribe(data =>{
        this.producto = data;

      })


    })

  }
  ////agregar productos
  ///guadar en variable local  localStorage.setItem('CAR','')
  ///formato id:cantidad|id:cantidad
  addtoCar(cantidad:any){
    let carData = localStorage.getItem("CAR")
    if(carData ===  null || carData.length===0)
    {
      carData = this.producto.nombre + ":"+this.producto.valor;
    }
    else{
      carData =carData +"|"+ this.producto.nombre + ":"+this.producto.valor;
    }
    console.log("carData")
    console.log(carData)
    localStorage.setItem("CAR",carData)
    alert("Producto agregado")
  }
}
