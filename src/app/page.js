import React from 'react';
import { Input } from '@mui/material';
import { Button } from "@mui/material";
import { Table, TableBody} from '@mui/material';


export default function Home() {
  return (
    <>
    <h1 align="center">Lista de productos</h1>
    
    <div align="center" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "50px" }}>
               
        <Button variant="contained">Agregar</Button>
                <Input
                    type="text"
                    placeholder="Filtrar por Código"
                   // value={filterCode}
                    // onChange={(e) => setFilterCode(e.target.value)}
                />
                <Input 
                    type="date"
                    // value={filterDate}
                    // onChange={(e) => setFilterDate(e.target.value)}
                />
            </div>
      <br></br>
    <Table className="MuiTable-root" align="center">
       <thead>
            <tr>
                <th>Código</th>
                <th>Descripción</th>
                <th>Estado</th>
                <th>Fecha de Vencimiento</th>
                <th>Acciones</th>
            </tr>
       </thead>
       <TableBody>
            <tr>
              <td>01</td>
              <td>Cereales</td>
              <td>disponible</td>
              <td>01/11/23</td>
              <td><Button variant="contained" style={{align: "center"}}>Editar</Button></td>
            </tr>
      </TableBody>
    </Table>

    
    </>
  )
}