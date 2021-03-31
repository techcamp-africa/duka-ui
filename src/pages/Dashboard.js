import React from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import {AiFillDatabase, FcSalesPerformance} from 'react-icons/all'
import LineChart from '../components/charts/LineChart'
import BarChart from '../components/charts/BarChart'


function Dashboard() {
    return (
    <Container>
      <div>
        <Sidebar/>
      </div>
      <Main>
        <Navbar />
          <CardWrapper>
              <Card>
                <h3>Inventories</h3>
                <div>
                  <Icon>
                    <AiFillDatabase />
                  </Icon>
                  <p>20</p>
                </div>
              </Card>
              <Card>
                <h3>Inventories</h3>
                <div>
                  <Icon>
                    <AiFillDatabase />
                  </Icon>
                  <p>15</p>
                </div>
              </Card>
              <Card>
              <h3>Sales</h3>
                <div>
                  <Icon>
                    <FcSalesPerformance />
                  </Icon>
                  <p>10</p>
                </div>
              </Card>
          </CardWrapper>
          <ChartWrapper>
            <div>
              <LineChart />
            </div>
            <div>
              <BarChart />
            </div>
          </ChartWrapper>

      </Main>
    </Container>
    )
}


export default Dashboard;

export const Main = styled.div`
  flex: 7.0;
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
`
export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  padding: 1rem 0;


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

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`
export const Icon = styled.div`

  font-size: 2rem;

`
export const ChartWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: .96rem;
  padding: 1rem 0rem;


  @media screen and (max-width: 768px) {
    flex-direction: column;

    > div {
      width: 100px;
    }
  }
`