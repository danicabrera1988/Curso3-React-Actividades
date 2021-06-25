import React from 'react';

export class Jobs extends React.Component {
    
    // CONSTRUCTOR //
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            lista: []
        }
    }


    // METODOS //    
    validar(){
        const puesto = document.querySelector('#puesto').value
        const empresa = document.querySelector('#empresa').value
        const ciudad = document.querySelector('#ciudad').value
        const pais = document.querySelector('#pais').value

        if(puesto === '' || empresa === '' || ciudad === '' || pais === ''){
            alert("Debes completar todos los campos.");            
            return
        } 
                
        const agregarLista = {puesto, empresa, ciudad, pais}

        this.agregar(agregarLista);
    }

    agregar(agregarLista){
        this.setState({ 
            lista : [...this.state.lista, agregarLista],
        })

        document.querySelector('#formulario').reset();
    }
    
    eliminar(id){
        const mensaje = window.confirm("¿Desea eliminar este puesto de trabajo?")

        if(mensaje){
            const nuevaLista = this.state.lista;
            nuevaLista.splice(id.id, 1)

            this.setState({
                lista: nuevaLista
            })
        }
    }


    // RENDER //
    render(){
        return(
        <>
        <div id="contenedor" className="container bg-white  mt-5 p-4 ">

            <div  class="border p-3 bg-light ">
                <h3 class="mb-4 text-center text-uppercase"> Puestos de trabajo</h3>
                <form action="#" class="ms-4 me-4" id="formulario">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control uno" placeholder="puesto" id="puesto" />
                        <label for="floatingInput">Puesto:</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control uno" placeholder="empresa" id="empresa" />
                        <label for="floatingInput">Empresa:</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" placeholder="ciudad" id="ciudad" />
                        <label for="floatingInput">Ciudad:</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="text" class="form-control" placeholder="pais" id="pais" />
                        <label for="floatingInput">Pais:</label>
                    </div>
                    <div class=" mt-3 d-flex justify-content-center">
                        <button className="btn btn-primary text-white fw-bold col-3 " onClick={() => this.validar()} > Agregar </button>
                    </div>
                </form>
            </div> 

            <div>
                <h3 class="p-5 text-center text-uppercase">Listado</h3>
                <table class="table">
                    <thead class="bg-light rounded-pill">
                        <tr class="text-uppercase">
                            <th>Puesto</th>
                            <th>Empresa</th>
                            <th>Ciudad</th>
                            <th>Pais</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lista.map((lista, id) => {
                            return(
                                <tr>
                                    <td> {lista.puesto} </td>
                                    <td> {lista.empresa} </td>
                                    <td> {lista.ciudad} </td>
                                    <td> {lista.pais} </td>
                                    <td> <button type="button" className="btn btn-danger" onClick={() => this.eliminar({id})} id="{id}" value="{id}"> x </button> </td>
                                </tr>
                            )
                        })}        
                    </tbody>
                </table>
            </div>
        
        </div>
        </>    
        )
    }
}