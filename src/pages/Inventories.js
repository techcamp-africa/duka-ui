import React, { useEffect } from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import axios from 'axios'


// table imports from material ui
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// button import frommaterial ui
import Button from '@material-ui/core/Button';
import { FcSalesPerformance } from 'react-icons/fc';
import { AiOutlineStock } from 'react-icons/ai';

// tooltip import from material ui
import Tooltip from '@material-ui/core/Tooltip';

// dialog imports from material ui
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(title, isbn_no, buying_price, selling_price) {
  return { title, isbn_no, buying_price, selling_price};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

function Inventories() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [inventory, setInventory] = React.useState({
      title: '',
      isbn_no: '',
      buying_price: '',
      selling_price: ''
    })
    const [inventories, setInventories] = React.useState([])

    
    // use effect for fetching all inventories
    useEffect(() => {
      axios.get(`http://138.68.189.32:8000/inventories`)
      .then(res => {
        console.log(res.data)
        setInventories(res.data)
        console.log("inventories", inventories)
      })
      .catch(err => {
        console.log(err)
      })
      return () => {
        // cleanup
      }
    }, [])


    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = e => {
      setInventory({...inventory, [e.target.name]: e.target.value})
    }

    const submitInventory = (inventory) => {
      axios.post(`http://138.68.189.32:8000/inventories`, inventory)
      .then(res => {
        console.log("hehr",res.data)
        setInventories([...inventories, res.data])
      })
      .catch(err => {
        console.log(err)
      })
    }

    const handleInventorySubmit = e => {
      e.preventDefault()
      console.log("added invetory", inventory)
      submitInventory(inventory)
      setInventory({
        title: '',
        isbn_no: '',
        buying_price: '',
        selling_price: ''
      })
      setOpen(false)
    }

    return (
        <>
          <Sidebar/>
          <Main>
              {/* Dialog button for add inventory */}
              <DialogWrapper>
                <AddButton variant="outlined" color="primary" onClick={handleClickOpen}>
                  Add Inventory
                </AddButton>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle id="alert-dialog-slide-title">{"Add New Inventory"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      <div style={{marginBottom: '1rem'}}>
                        <TextField
                        id="filled-error"
                        label="Title"
                        placeholder="Enter inventory title"
                        variant="outlined"
                        fullWidth
                        size="small"
                        name="title"
                        value={inventory.title}
                        onChange={handleChange}
                      />
                      </div>
                      <div style={{marginBottom: '1rem'}}>
                        <TextField
                        id="filled-error"
                        label="ISBN_NO"
                        placeholder="Enter isbn number"
                        variant="outlined"
                        fullWidth
                        size="small"
                        name="isbn_no"
                        value={inventory.isbn_no}
                        onChange={handleChange}
                      />
                      </div>
                      <div style={{marginBottom: '1rem'}}>
                        <TextField
                        id="filled-error"
                        label="Buying Price"
                        placeholder="Enter buying price"
                        variant="outlined"
                        fullWidth
                        size="small"
                        name="buying_price"
                        value={inventory.buying_price}
                        onChange={handleChange}
                      />
                      </div>
                      <div style={{marginBottom: '1rem'}}>
                        <TextField
                        id="filled-error"
                        label="Selling Price"
                        placeholder=" Enter selling Price"
                        variant="outlined"
                        fullWidth
                        size="small"
                        name="selling_price"
                        value={inventory.selling_price}
                        onChange={handleChange}
                      />
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleInventorySubmit} color="primary">
                      Save
                    </Button>
                  </DialogActions>
                </Dialog>
                </DialogWrapper>

                {/* end dialog */}

                {/* table jsx */}
                <TableWrapper>
                    <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight: '700'}}>Title</TableCell>
                            <TableCell style={{fontWeight: '700'}} align="center">ISBN_NO</TableCell>
                            <TableCell style={{fontWeight: '700'}} align="center">Buying Price</TableCell>
                            <TableCell style={{fontWeight: '700'}} align="center">Selling Price</TableCell>
                            <TableCell style={{fontWeight: '700'}} align="left">Actions</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {inventories && inventories.map(
                          (row) => (
                            <TableRow key={row.title}>
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="center">{row.isbn_no}</TableCell>
                            <TableCell align="center">{row.buying_price}</TableCell>
                            <TableCell align="center">{row.selling_price}</TableCell>
                            <TableCell>
                              <Link to={`/inventories/${row.id}/make-sale`}>
                                <Tooltip title="Make Sale">
                                  <Button style={{marginRight: '.3rem'}} size="small">
                                    <FcSalesPerformance style={{fontSize: '1rem'}} />
                                  </Button>
                                </Tooltip>
                              </Link>
                              <Link to={`/inventories/${row.id}/add-stock`}>
                                <Tooltip title="Add Stock">
                                  <Button size="small" color="primary">
                                    <AiOutlineStock style={{fontSize: '1.5rem'}} />
                                  </Button>
                                </Tooltip>
                              </Link>
                            </TableCell>
                            </TableRow>
                        )
                        )}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </TableWrapper>
                {/* table end */}
          </Main>
          
        </>
    )
}

export default Inventories

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
    margin-top: 30px;
    padding: .6rem 1.5rem;
`

export const DialogWrapper = styled.div`
  text-align: center;
  padding-top: 1rem;
`

export const AddButton = styled.button`
  padding: .5rem 1rem;
  outline: none;
  border-radius: 4px;
  color: blue;
  border: 1px solid blue;
  text-transform: uppercase;
`