import React from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

function Dashboard() {
    return (
    <Container>
      <div>
        <Sidebar/>
      </div>
      <Main>
        <Navbar />
        main content
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

