import React from 'react'
import { Container, Icon, ListLink, List, ListItem, Logo } from './SidebarElements'
import {AiFillDatabase, FcSalesPerformance, AiOutlineStock} from 'react-icons/all'

function Sidebar() {
    return (
        <Container>
            <Logo to="/">
                Duka
            </Logo>
            <List>
                <ListItem>
                    <ListLink to="/inventories">
                        <Icon>
                            <AiFillDatabase />
                        </Icon>
                        Inventories
                    </ListLink>
                </ListItem>
                <ListItem>
                    <ListLink to="/sales">
                        <Icon>
                            <FcSalesPerformance />
                        </Icon>
                        Sales
                    </ListLink>
                </ListItem>
                <ListItem>
                    <ListLink to="/stock">
                        <Icon>
                            <AiOutlineStock />
                        </Icon>
                        Stock
                    </ListLink>
                </ListItem>
            </List>
        </Container>
    )
}

export default Sidebar

