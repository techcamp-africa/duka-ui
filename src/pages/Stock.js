import React from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

// table imports from material ui
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(quantity, vendor) {
  return { quantity, vendor };
}

const rows = [
  createData(159, 6.0,),
  createData(237, 9.0),
  createData(262, 16.0),
  createData(305, 3.7),
  createData(16.0, 49),
];

function Stock() {

    const classes = useStyles();

    return (
        <>
          <Sidebar/>
          <Main>
              <h3>Stock Page</h3>
              {/* table jsx */}
              {/* <TableWrapper>
                    <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight: '700'}}>Quantity</TableCell>
                            <TableCell style={{fontWeight: '700'}} align="center">Vendor</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.quantity}>
                            <TableCell component="th" scope="row">
                                {row.quantity}
                            </TableCell>
                            <TableCell align="center">{row.vendor}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </TableWrapper> */}
                {/* table end */}
          </Main>
        </>
    )
}

export default Stock

export const Main = styled.div`
  padding: 25px 0px 0px 270px;

  @media screen and (max-width: 480px) {
    padding: 0px;
  }

  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`
export const TableWrapper = styled.div`
    margin-top: 30px;
    padding: .6rem 1.5rem;
`
