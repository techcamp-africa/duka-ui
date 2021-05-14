import {Line} from 'react-chartjs-2'
import React, {useState, useEffect} from 'react'
import BASE_URL from '../api'


const LineChart = () => {

  const [inventories, setInventories] = useState([])
  const [sales, setSales] = useState([])

  // function that fetches all sales
  const fetchSales = () => {
    BASE_URL.get('/sales')
      .then(res => {
          console.log(" graph fetched sales", res.data)
          setSales(res.data)
      })
      .catch(err => {
          console.log(err)
      })
  }

  // function that fetches all inentories
  const fetchInventories = () => {
    BASE_URL.get(`/inventories`)
    .then(res => {
      console.log(res.data)
      setInventories(res.data)
      console.log(" graph inventories", inventories)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchInventories()
    fetchSales()
  }, [])


  let inventory_names = inventories.map(inv=> inv.title)
  let inventory_sales = sales.map(sale => sale.quantity)
  
  const data = {
    labels: inventory_names,
    datasets: [
      {
        label: 'Sales Per Inventory',
        data: inventory_sales,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    plugins: {
      // legend: {
      //   position: 'right',
      // },
      title: {
        display: true,
        text: 'Sales Per Inventory',
      },
    },
  };

  return (
    <Line data={data} options={options}/>
  )
}

export default LineChart