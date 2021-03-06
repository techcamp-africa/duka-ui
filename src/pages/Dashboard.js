import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import {AiFillDatabase, FcSalesPerformance, FaUsers} from 'react-icons/all'
import LineChart from '../components/charts/LineChart'
import BarChart from '../components/charts/BarChart'
import axios from 'axios'
import BASE_URL from '../components/api'


function Dashboard() {

     const [inventories, setInventories] = useState(0)
     const [sales, setSales] = useState(0)

     // use effect for fetching all inventories an all sales 

    // function that fetches all sales
    const fetchSales = () => {
      BASE_URL.get('/sales')
        .then(res => {
            console.log("fetched sales", res.data)
            setSales(res.data.length)
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
        setInventories(res.data.length)
        console.log("inventories", inventories)
      })
      .catch(err => {
        console.log(err)
      })
    }


    useEffect(() => {
      fetchInventories()
      fetchSales()
    }, [])

    return (
      <>
        <Sidebar />
        <Main>
        <CardWrapper>
            <Analytic>
              {/* icon */}
              <Icon>
                  <AiFillDatabase style={{marginTop: '8px'}}/>
              </Icon>
              {/* digit */}
              <h2 style={{marginTop: ".8rem"}}>{inventories}</h2>
              {/* title */}
              <p style={{marginTop: ".6rem", fontWeight: "700", fontSize: "1.2rem"}}>Inventories</p>
            </Analytic>

            <Analytic>
              {/* icon */}
              <Icon style={{background: "#fec89a"}}>
                  <FaUsers style={{marginTop: '8px'}}/>
              </Icon>
              {/* digit */}
              <h2 style={{marginTop: ".8rem"}}>{inventories}</h2>
              {/* title */}
              <p style={{marginTop: ".6rem", fontWeight: "700", fontSize: "1.2rem"}}>Users</p>
            </Analytic>

            <Analytic>
              {/* icon */}
              <Icon style={{background: "#80ed99"}}> 
                  <AiFillDatabase style={{marginTop: '8px'}}/>
              </Icon>
              {/* digit */}
              <h2 style={{marginTop: ".8rem"}}>{inventories}</h2>
              {/* title */}
              <p style={{marginTop: ".6rem", fontWeight: "700", fontSize: "1.2rem"}}>Orders</p>
            </Analytic>

            <Analytic>
              {/* icon */}
              <Icon style={{background: "#22577a"}}>
                  <FcSalesPerformance style={{marginTop: '8px'}}/>
              </Icon>
              {/* digit */}
              <h2 style={{marginTop: ".8rem"}}>{sales}</h2>
              {/* title */}
              <p style={{marginTop: ".4rem", fontWeight: "700", fontSize: "1.2rem"}}>Sales</p>
            </Analytic>
              {/* <Card>
                <h3>Inventories</h3>
                <div>
                  <Icon>
                    <AiFillDatabase />
                  </Icon>
                  <p>{inventories}</p>
                </div>
              </Card>
              <Card>
                <h3>Stock</h3>
                <div>
                  <Icon>
                    <FaUsers />
                  </Icon>
                  <p>0</p>
                </div>
              </Card>
              <Card>
              <h3>Sales</h3>
                <div>
                  <Icon>
                    <FcSalesPerformance />
                  </Icon>
                  <p>{sales}</p>
                </div>
              </Card> */}
          </CardWrapper>
          <ChartWrapper>
            <div>
              <BarChart />
            </div>
            <div>
              <LineChart />
            </div>
          </ChartWrapper>
        </Main>
      </>
    )
}


export default Dashboard;

const Analytic = styled.div`
  /* border: 1px solid #111; */
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Main = styled.div`
  /* flex: 7.0; */
  padding: 25px 0px 0px 270px;

  @media screen and (max-width: 768px) {
    padding: 0px;
  }

  @media screen and (max-width: 480px) {
    padding: 0px;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
`
export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* margin-top: 1rem; */
  padding: 1rem 0;


  @media screen and (max-width: 480px) {
    gap: 10px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    margin: 0 auto;
  }
`
export const Card = styled.div`
  /* border: 1px solid #111; */
  padding: 1rem;
  width: 280px;
  background: #61a5c2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-right: 2rem;
  }

  > div > p {
    font-weight: 500;
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`
export const Icon = styled.div`
  /* border: 1px solid #111; */
  border-radius: 999%;
  padding: .8rem 1.3rem;
  font-size: 2rem;
  background: #8ecae6;
`
export const ChartWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: .96rem;
  padding: 1rem 0rem;

  > div {
    width: 40%;
    /* max-height: 500px; */
  }

  @media screen and (max-width: 480px) {
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    > div {
      width: 100%;
      /* border: 1px solid #111; */
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    > div {
      width: 100%;
      /* border: 1px solid #111; */
    }
  }
`