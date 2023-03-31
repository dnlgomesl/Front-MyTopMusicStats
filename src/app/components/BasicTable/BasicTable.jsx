import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './BasicTable.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function BasicTable({data, label}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <TableContainer component={Paper}>
        <h2 className='tableTitle'>{label}</h2>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Média</TableCell>
              <TableCell align="center">Moda</TableCell>
              <TableCell align="center">Meidana</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
                <TableCell align="center">{data.mean}</TableCell>
                <TableCell align="center">{data.mode}</TableCell>
                <TableCell align="center">{data.median}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
