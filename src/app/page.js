import React from 'react';
import { Button } from "@mui/material";






export default function Home() {
  return (
    <>
    <h1 align="center">Lista de productos</h1>
    <Button variant="contained">Mostrar</Button>
    <div align="center">
                <input
                    type="text"
                    placeholder="Filtrar por Código"
                    // value={filterCode}
                    // onChange={(e) => setFilterCode(e.target.value)}
                />
                <input
                    type="date"
                    // value={filterDate}
                    // onChange={(e) => setFilterDate(e.target.value)}
                />
            </div>
    <table align="center">
       <thead>
            <tr>
                <th>Código</th>
                <th>Descripción</th>
                <th>Estado</th>
                <th>Fecha de Vencimiento</th>
                <th>Acciones</th>
            </tr>
       </thead>
            <tr>
              <td>01</td>
              <td>laptop</td>
              <td>disponible</td>
              <td>01/11/23</td>
              <td>buton</td>
            </tr>
        
    </table>
    
    </>
  )
}
