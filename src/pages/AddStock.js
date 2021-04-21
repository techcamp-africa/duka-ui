import React from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core'


// table imports from material ui
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(quantity, created_at) {
    return {quantity, created_at};
  }
  
  const rows = [
    createData(159, "2020-07-10"),
    createData(159, "2020-07-10"),
    createData(159, "2020-07-10"),
    createData(159, "2020-07-10"),
  ];

function AddStock(props) {

    const classes = useStyles();

    const [stockValues, setStockValues] = React.useState([])
    const [stock, setStock] = React.useState({
        inv_id: props.match.params.id,
        quantity: 0
    })

    const handleChange = e => {
        setStock({...stock, [e.target.name]: e.target.value})
    }

    const addStock = stock => {
        axios.post("BASE URL", stock)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        } )
    }

    const handleStockSubmit = e => {
        e.preventDefault()
        // addStock(stock)
        console.log("stock added", stock)
        setStock({
            inv_id: props.match.params.id,
            quantity: 0
        })
    }

    return (
        <>
            <Sidebar/>
            <Main>
                <TableWrapper>
                <div>
                        <h2 style={{marginBottom: '20px'}}>Add stock to Inventory</h2>
                        <div style={{marginBottom: '1rem', width: '300px'}}>
                            <TextField
                            id="filled-error"
                            label="Inventory_id"
                            placeholder="Enter inventory title"
                            variant="outlined"
                            size="small"
                            name="title"
                            value={stock.inv_id}
                            onChange={handleChange}
                        />
                        </div>
                        <div style={{marginBottom: '1rem', width: '300px'}}>
                            <TextField
                            id="filled-error"
                            label="Quantity"
                            placeholder="Enter quantity"
                            variant="outlined"
                            size="small"
                            name="isbn_no"
                            value={stock.quantity}
                            onChange={handleChange}
                        />
                        </div>
                        <AddButton onClick={handleStockSubmit}>Add Stock</AddButton>
                    </div>
                    <Tables>
                        <h4>Viewing all stocks added to (inventory name)</h4>
                            {/* table jsx */}
                        <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell style={{fontWeight: '700'}}>Quantity</TableCell>
                                <TableCell style={{fontWeight: '700'}} align="center">Created_at</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {stockValues &&  stockValues.map((row) => (
                                <TableRow key={row.quantity}>
                                <TableCell component="th" scope="row">
                                    {row.quantity}
                                </TableCell>
                                <TableCell align="center">{row.created_at}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    {/* table end */}
                    </Tables>
                </TableWrapper>
            </Main>
        </>
    )
}

export default AddStock

export const Main = styled.div`
  padding: 25px 0px 0px 270px;

  @media screen and (max-width: 480px){
    padding: 0px
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`
export const TableWrapper = styled.div`
    margin-top: 30px;
    padding: .6rem 1.5rem;
    display: flex;

    > div {
        /* border: 2px solid #111; */
        padding: 2rem;
        margin: 2rem auto;
        /* width: 400px; */
    }

    @media screen and (max-width: 480px){
        flex-direction: column;

        > div {
            width: 100%;
        }
    }
`
export const Tables = styled.div`
    width: 60%;
    border: 2px solid #111;
    border-radius: 8px;
` 

export const AddButton = styled.button`
  padding: .5rem 1rem;
  outline: none;
  border-radius: 4px;
  color: blue;
  border: 1px solid blue;
  text-transform: uppercase;
`