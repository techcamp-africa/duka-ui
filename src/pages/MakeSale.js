import React, { useEffect } from 'react'
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

function MakeSale(props) {

    const classes = useStyles();

    const [sales, setSales] = React.useState([])
    const [sale, setSale] = React.useState({
        quantity: 0,
        invId: props.match.params.id
    })

    useEffect(() => {
        axios.get('http://138.68.189.32:8080/sales')
        .then(res => {
            console.log("fetched sales", res.data)
            setSales(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    console.log("sales", sales)

    const handleChange = e => {
        setSale({...sale, [e.target.name]: e.target.value})
    }

    const makeSale = sale => {
        axios.post(`http://138.68.189.32:8080/sales`, sale)
        .then(res => {
            console.log(res.data)
            setSales([...sales, res.data])
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        // console.log("sale made", sale)
        const newSale = [...sales, sale]
        console.log("s", newSale)
        makeSale(sale)
        setSale({
            quantity: 0,
            invId: props.match.params.id
        })
    }

    return (
        <>
            <Sidebar/>
            <Main>
                <TableWrapper>
                    <div>
                        <h2 style={{marginBottom: '30px'}}>Make sale to Inventory</h2>
                        <Wrapper>
                            <TextField
                            id="filled-error"
                            label="Inventory_id"
                            placeholder="Enter inventory title"
                            variant="outlined"
                            size="small"
                            name="invId"
                            value={sale.invId}
                            onChange={handleChange}
                        />
                        </Wrapper>
                        <Wrapper style={{marginBottom: '1rem', width: '300px'}}>
                            <TextField
                            id="filled-error"
                            label="Quantity"
                            placeholder="Enter quantity"
                            variant="outlined"
                            size="small"
                            name="quantity"
                            value={sale.quantity}
                            onChange={handleChange}
                        />
                        </Wrapper>
                        <AddButton onClick={handleSubmit}>Make Sale</AddButton>
                    </div>
                    <Tables>
                        <h4>Viewing all sales made to (inventory name)</h4>
                        {/* table jsx */}
                    <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight: '700'}}>Quantity</TableCell>
                            <TableCell style={{fontWeight: '700'}} align="center">Created_at</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody style={{overflowY: 'scroll', maxHeight: '200px'}}>
                            {sales && sales.map((row, index) => (
                                <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.quantity}
                                </TableCell>
                                <TableCell align="center">{row.createdAt}</TableCell>
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

export default MakeSale

export const Main = styled.div`
  padding: 25px 0px 0px 270px;

  @media screen and (max-width: 480px){
    padding: 0px
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
    margin: 0 auto;
    padding: .6rem 1.5rem;
    display: flex;

    > div {
        /* border: 2px solid #111; */
        border-radius: 8px;
        padding: 2rem;
        margin: 2rem auto;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;

        > div {
            width: 100%;
        }
    }

`
export const Tables = styled.div`
    width: 60%;
    max-height: 450px;
    overflow-y: scroll;
    border: 2px solid #111;

    > h4 {
        text-align: center;
        margin-bottom: 20px;
    }
` 
export const Wrapper = styled.div`
    margin-bottom: 1rem;
    width: 300px;
`
export const AddButton = styled.button`
  padding: .5rem 1rem;
  outline: none;
  border-radius: 4px;
  color: blue;
  border: 1px solid blue;
  text-transform: uppercase;
`