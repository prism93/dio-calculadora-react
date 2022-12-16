import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: #2a2b2a;
    width: 280px;
    min-height: 320px; 
    border-radius: 10px;
    box-shadow: 10px 10px 21px -4px rgba(0,0,0,0.75);
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`