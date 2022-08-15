import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button} from "reactstrap";

const filtrados = ({data, eliminar, editar}) =>{
    return(
        <Table>
            <thead><tr><th>ID</th>
            <th>Nombre</th>
            <th>Numero Telefonico</th>
            <th>Acciones</th></tr></thead>
            <tbody>
            {data.map((elemento)=>(
                <tr>
                <td>{elemento.id}</td>
                <td>{elemento.nombre}</td>
                <td>{elemento.telefono}</td>
                <td><Button color="primary" onClick={() => editar(elemento)}>Editar</Button></td>
                <td><Button color="danger" onClick={() => eliminar(elemento)}>Eliminar</Button></td>
                </tr>               
            ))}
            </tbody>
        </Table> 
    )
}
export default filtrados;
      