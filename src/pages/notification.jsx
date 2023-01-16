import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect} from "react";
import {setUser} from './login'
import Button from "@mui/material/Button";
import {useLocation} from "react-router-dom";

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159),
    createData('Ice cream sandwich', 237),
    createData('Eclair', 262),
    createData('Cupcake', 305),
    createData('Gingerbread', 356),
];

export default function CurrentNotification() {
    let location = useLocation()
    const handleCheckCurRule=()=>{

        const user_id = location.state.name
        const user_autoken = location.state.tok.user_token.token
        fetch("http://afterglow.canadacentral.cloudapp.azure.com:8800/v1/rule",{
            method:"POST",
            headers:{Authorization:user_autoken},
            body:JSON.stringify(user_id)

        }).then(res=>res.json())
            .then((res)=>{
                if (res){
                    alert("noti successfully");
                   }

            })
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        {/*<TableCell align="right">Fat&nbsp;(g)</TableCell>*/}
                        {/*<TableCell align="right">Carbs&nbsp;(g)</TableCell>*/}
                        {/*<TableCell align="right">Protein&nbsp;(g)</TableCell>*/}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            {/*<TableCell align="right">{row.fat}</TableCell>*/}
                            {/*<TableCell align="right">{row.carbs}</TableCell>*/}
                            {/*<TableCell align="right">{row.protein}</TableCell>*/}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleCheckCurRule}
            >
                check current rules
            </Button>
        </TableContainer>
    );
}