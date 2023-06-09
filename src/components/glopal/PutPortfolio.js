import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
const PutPortfolio = ({Filter}) => {

  return (

    <StyleButoon data-aos="fade-down">
        <button type='button' onClick={()=>Filter('All') } >All</button>
        <button type='button' onClick={()=>Filter('cv') } >Software Services</button>
        <button onClick={()=>Filter('adobe xd') } >media Production</button>
        <button onClick={()=>Filter('Social') } >Social media</button>
        <button onClick={()=>Filter('prand') } >Branding</button>
        
    </StyleButoon>


  )
}
const StyleButoon = styled.div`
margin:0rem 4rem ;
display: flex;
flex-wrap: wrap;
justify-content: center;

@media (max-width:500px ) {
  margin:0rem 2rem ;
}
button{
  all: unset;
  padding: 10px 20px;
  cursor: pointer;
  border:1px solid var(--primary-color) ;
  margin: 8px;
  border-radius: 5px;
  transition: 0.5s;
  &:hover , &:active ,&:focus  {
    background-color:var(--primary-color) ;
    color: white;
  }

}


    
`
export default PutPortfolio