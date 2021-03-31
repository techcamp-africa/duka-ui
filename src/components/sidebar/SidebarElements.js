import styled from 'styled-components';
import {Link} from 'react-router-dom'


export const Container = styled.div`
    width: 240px;
    height: 100vh;
    background: #00171f;
    padding-top: .6rem;
    position: relative;


    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const Logo = styled(Link)`
    color: #fff;
    padding: 0 4rem;
    font-size: 1.7rem;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
`

export const List = styled.ul`
    color: #fff;
    padding: 1rem;
    list-style: none;
`
export const ListItem = styled.li`
    padding:.6rem 1rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
`
export const ListLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    padding: .6rem .8rem;
    border-radius: 8px;
    transition: all .5s;

    &:hover {
        background: #007ea7;
    }
`

export const Icon = styled.i`
    margin-right: 1rem;
    font-size: 1.2rem;
`