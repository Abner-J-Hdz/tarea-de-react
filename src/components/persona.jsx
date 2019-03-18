import React, { Component } from 'react';
import {ListadoPersona} from './../services/personasServices';


class Persona extends Component {
    state = { 
        datos:ListadoPersona(),
        contador:0,
     }
    
     handlerEliminar = persona => {
        const datos = this.state.datos.filter(p=>p.id!==persona.id);
        this.setState({datos});
        this.contar();
     }

     handlerAgregar = () => {
         const nuevo = {
            //id: Math.random()*100 , Nombres:'New', Apellidos:'Gutierrez', Deporte:'Football', Municipio:'Jinotepe', Estado:true,
            id: Math.random()*1000, Nombres:'New', Apellidos:'Gutierrez', Deporte:'Football', Municipio:'Jinotepe', Estado:true,      
            
        }
        const datos = this.state.datos;
        datos.push(nuevo);
        this.setState({datos});
        this.contar();
     }

     contar(persona){
        const x = this.state.datos;
        //x.length();
        return x.length;
     }

    render() { 
        return (
            <div className="table-responsive">
                <h2>Listado de Personas: Total {this.contar()}</h2>

                <button onClick={this.handlerAgregar} className="btn btn-info">Agregar Nuevo</button>
                <br/><br/>

                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Identificador</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Deportes</th>
                            <th>Municipio</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                            {this.state.datos.map( Persona =>(  
                                <tr key={Persona.id}>
                                    <td>{Persona.id}</td>
                                    <td>{Persona.Nombres}</td>
                                    <td>{Persona.Apellidos}</td>
                                    <td>{Persona.Deporte}</td>
                                    <td>{Persona.Municipio}</td>
                                    <td><button onClick={()=>this.handlerEliminar(Persona)} className="btn btn-danger btn-sm">Eliminar</button></td>
                                </tr>
                            ))} 
                    </tbody>

                </table>
            </div>
         );
    }
}
 
export default Persona;
