import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Button } from "@material-ui/core";
import FirebaseService from '../services/FirebaseService'
import { privateUrls } from '../utils/urlUtils'
import { Link } from 'react-router-dom'

export const DataTable = ({data}) => {

    const remove = (id) => {
        FirebaseService.remove(id, 'leituras');
    };

    return <React.Fragment>
        <Typography variant="headline" component="h2">Add New</Typography>
        <Table selectable={false}>
            <TableHead>
                <TableRow>
                    <TableCell>Chave</TableCell>
                    <TableCell>Temperatura</TableCell>
                    <TableCell>Humidade</TableCell>
                    <TableCell>Cliente</TableCell>
                    <TableCell>Data</TableCell>
                    <TableCell>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell>{item.key}</TableCell>
                            <TableCell>
                                {item.temperatura}
                            </TableCell>
                            <TableCell>{item.umidade}</TableCell>
                            <TableCell>{item.cliente}</TableCell>
                            <TableCell>{item.data}</TableCell>
                            <TableCell>
                            <Button component={props => 
                                <Link to={privateUrls.edit.pathWithouParam + item.key}    
                                        {...props}/>}>
                                    Editar
                            </Button>
                                <Button
                                   onClick={() => remove(item.key)}>
                                    Remover
                                </Button>
                            </TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </React.Fragment>
};