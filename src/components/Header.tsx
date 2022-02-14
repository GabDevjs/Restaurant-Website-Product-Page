import React from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";
import Background from '../images/banner.png'
import { Navbar } from './Navbar';

export function Header() {
    const Main = styled.div`
        margin-left: 3%;
        width: 100%;
        height: 768px;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${Background});
    `;

    const HeaderH = styled.div`
        font-family: 'Montserrat';
        width: 900px;
        position: absolute;
        left: 25%;
        top: 55%;
        text-align: left;
        transform: translate(-25%, -55%);

        span {
            font-family: 'Alfa Slab One';
            color: #bf2222;
            border-bottom: 2px solid #3d2514;
        }

        .details {
            font-size: 23px;
            color: #181818;
        }

        h3 {
            font-family: 'Bebas Neue';
            font-size: 1.6rem;
            margin: 0px;
            letter-spacing: 2px;
            color: #3d2514;
        }

        h1 {
            font-family: 'Alfa Slab One';
            font-size: 4rem;
            margin: 0px;
            letter-spacing: 2px;
            color: #3d2514;
        }
    `;

    const HeaderBtns = styled.div`
        display: flex;
        margin-top: 40px;
    `;

    const HeaderBtn = styled(Link)`
        width: 160px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        font-family: 'Lato';
        background-color: #bf2222;
        box-shadow: 5px 10px 30px rgba(255, 2, 2, 0.336);
        border-radius: 5px;
        color: #ffffff;

        &:hover {
            background-color: transparent;
            transition: all ease 0.5s;
            color: #3d2514;
            border: 2px solid #bf2222;
        }
    `;


    return (
        <Main id="main">
            <Navbar/>
            <HeaderH>
                <h3>Is´s Great Time For A Good Taste Of Burger</h3>
                <h1><span>Burger</span> For <br /> Week </h1>
                <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <HeaderBtns>
                    <HeaderBtn 
                    to="#" >
                    Order now
                    </HeaderBtn>
                </HeaderBtns>
            </HeaderH>
        </Main>
    );
};