import {Bar} from 'react-chartjs-2'
import React, { useState , useEffect } from 'react'
import BASE_URL from '../api'

const BarChart = () => {

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


    let inventory_names = inventories.map(inv=> inv.created_at)
    
    console.log("dfd", inventory_names)

    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Sales per Month',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
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
      responsive: true,
      plugins: {
        // legend: {
        //   position: 'right',
        // },
        title: {
          display: true,
          text: 'Sales Per Month',
        },
      },
    };

    return (
      <Bar data={data} options={options} />
    )
}

export default BarChart