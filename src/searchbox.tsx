import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    padding: 10px 40px 40px 40px;
    background-color: #484848;
    border: 1px solid #484848;
    border-radius: 5px;
`
const StyledButton = styled.button`
    margin-left: 10px;
    font-size: 24px;  
    background-color: #808080;     
    color: Black; 
    border: 2px solid #929292; 
    border-radius: 5px;  
    
    &:hover {
        background-color: #121212;
        color: Silver;
        border-color: #202020;
    }
`
const StyledInput = styled.input`
    font-size: 24px;   
    background-color: #606060;     
    color: Silver;
    border: 2px solid #808080; 
    border-radius: 5px;
`
const StyledHeading = styled.h1`
    font-size: 44px; 
    color: Silver;
    padding-bottom: 10px;
    text-align:center;
`

export const Searchbox = () => {
    return (
        <>
            <StyledDiv>
                <StyledHeading>Air Quality</StyledHeading>
                <StyledInput placeholder="Location"></StyledInput>
                <StyledButton>Search</StyledButton>
            </StyledDiv>
        </>
    )
}