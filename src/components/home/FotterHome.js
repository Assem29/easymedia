import React from 'react'
import styled from 'styled-components'
import CopyrightIcon from '@mui/icons-material/Copyright';
import wats from "../../img/wats.png"
import face from "../../img/face.png"
import linked from "../../img/linked.png"
import insta from "../../img/insta.png"
import { Link } from 'react-router-dom';



const FotterHome = () => {
  return (
    <FotterStyle >
        <div className='main-fotter' >
        <div className='item-fotter' >
            <h2>location</h2>
            <p><a target="_blank">Germany <span></span> </a></p>
            <p><a target="_blank">USA <span> </span>  </a></p>
            <p><a href='#'>Luxor</a></p>
            
        </div>
        <div className='item-fotter' >
            <h2>contact</h2>
            <p><a href='mailto:info@easymedia.agency'>info@easymedia.agency</a></p>
            <p><a href='tel:+965 2220 9570'>+01151739439</a></p>
            <p><a href='tel:+965 5537 2333'>+965 5953454</a></p>
            <p><a href='tel:+971 54 233 3232'>+971 54 1111 1111</a></p>
        </div>
        <div className='item-fotter' >
            <h2>Social media</h2>
            <a  target="_blank"><img src={face} alt="face" /></a>
            <a target="_blank"><img src={insta} alt="insta" /></a>
            <a target="_blank"><img src={linked} alt="insta" /></a>
            <a  target="_blank"><img src={wats} alt="wats" /></a>
        </div>
        </div>
        <div className='copy-right' >

        <h2>Copyright<span><CopyrightIcon className='copy'/></span></h2>
        <Link to="/terms"><p>Terms and Conditions</p></Link>
        </div>
       

        
        
    </FotterStyle>
  )
}
const FotterStyle = styled.div`
    background-color: var(--primary-color);
    padding: 40px 4rem;
    @media (max-width:500px) {
    padding: 40px 2rem;    
    }
    .main-fotter{
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
    @media (max-width:500px) {
        justify-content: center;   
    }
    .item-fotter{
        
        padding: 15px;
        display: flex;
        flex-direction: column;
        @media (max-width:500px) {
        align-items: center;   
    }
        &:last-child{
            display: block;
            flex-direction: row; 
        }
        h2{
            font-weight: 400;
            font-size: 30px;
            color: white;
            text-transform: uppercase;
            padding: 8px 0;
        }
        a{
            color: white;
            opacity: 0.8;
            cursor: pointer;
            font-size: 15px;
            @media (max-width:600px) {
             span{
                 display: none;
             }
             }
             img{
                 width: 30px;
                 margin:0 11px;
                 
                

             }
        }

    }
    }
    .copy-right{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 2px;
        padding: 80px 0 40px;
        a{
            color: white;
            margin-top: 8px;
            font-size: 12px;
        }
        h2{
            padding-right: 18px;
            position: relative;
            span .copy{
            position: absolute;
            top: 2px;
            margin-left: 4px;
        }
        &::after{
            position: absolute;
            
            content: "";
            top: -50px;
            width: 250px;
            height: 1px;
            color: white;
            background-color: white;
            left: 44%;
            transform: translate(-46%);
        }
        }

    }
    

`
export default FotterHome