import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-scroll";
import { menuDate } from "../data/MenuDate";

export function Navbar() {
  const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    padding: 10px;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.157);
    background-color: #ffffff;
    transition: 0.6s ease-in-out;

    ul {
      display: flex;
    }

    ul li a {
      font-family: "Bebas Neue";
      height: 40px;
      line-height: 43px;
      margin: 3px;
      padding: 0px 22px;
      display: flex;
      font-size: 1.2rem;
      text-transform: uppercase;
      font-weight: 500;
      color: #3d2514;
      letter-spacing: 1px;
      border-radius: 3px;
      transition: 0.2s ease-in-out;

      &:hover {
        background-color: #bf2222;
        color: #ffffff;
        box-shadow: 5px 10px 30px rgba(255, 2, 2, 0.336);
        transition: all ease 0.2s;
      }
    }

    .menu-btn,
    .menu-icon {
      display: none;
    }

    @media (max-width: 1100px) {
      justify-content: space-between;
      height: 65px;
      padding: 0px 30px;

      .menu-icon {
        display: block;
        cursor: pointer;
        float: right;
        padding: 28px 20px;
        position: relative;
        user-select: none;
      }

      .menu-icon .nav-icon {
        background-color: #3d2514;
        display: block;
        height: 2px;
        position: relative;
        transition: background 0.2s ease-out;
        width: 24px;
      }

      .menu-icon .nav-icon:before,
      .menu-icon .nav-icon:after {
        background: rgb(255, 255, 255);
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        transition: all ease-out 0.2s;
        width: 100%;
      }

      .menu-icon .nav-icon:before {
        top: 6px;
        background-color: #3d2514;
      }

      .menu-icon .nav-icon:after {
        top: -6px;
        background-color: #3d2514;
      }

      .menu-btn:checked ~ .menu-icon .nav-icon {
        background: transparent;
      }

      .menu-btn:checked ~ .menu-icon .nav-icon:before {
        transform: rotate(-45deg);
        top: 0;
        background-color: #3d2514;
      }

      .menu-btn:checked ~ .menu-icon .nav-icon:after {
        transform: rotate(45deg);
        top: 0;
        background-color: #3d2514;
      }
    }
  `;

  const Menu = styled.div`
    display: flex;

    @media (max-width: 1100px) {
      display: none;
      position: absolute;
      top: 65px;
      left: 0px;
      background-color: #ffffff;
      border-bottom: 4px solid #ff1414;
      width: 100%;
      padding: 0px;
      margin: 0px;
    }
  `;

  const MenuResponsive = styled.div`
    display: flex;
    @media (max-width: 1100px) {
      width: 100%;
      display: block;
    }
  `;

  const Logo = styled(Link)`
    color: #3d2514;
    font-weight: normal;
    margin: 0px;
    width: 120px;
    text-align: left;
    margin-right: 5rem;
    font-size: 1.7rem;
    letter-spacing: 3px;

    @media (max-width: 600px) {
      margin-right: 0;
    }
  `;

  const NavMenuLinks = styled(Link)`
    font-family: "Bebas Neue";
    height: 40px;
    line-height: 43px;
    margin: 3px;
    padding: 0px 22px;
    display: flex;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 500;
    color: #3d2514;
    letter-spacing: 1px;
    border-radius: 3px;
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: #bf2222;
      color: #ffffff;
      box-shadow: 5px 10px 30px rgba(255, 2, 2, 0.336);
      transition: all ease 0.2s;
    }

    @media (max-width: 1100px) {
      width: 100%;
      height: 40px;
      justify-content: center;
      align-items: center;
      margin: 0px;
      padding: 25px;
      border: 1px solid rgba(38, 38, 38, 0.03);
    }
  `;

  //#########################
  const [nav, setNav] = useState(false);
  const changeBack = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBack);
  return (
    <Nav>
      <Logo to="main">Logo</Logo>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <Menu>
        <MenuResponsive>
          {menuDate.map(
            (
              item: {
                link: string;
                title:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
              },
              index: React.Key | null | undefined
            ) => (
              <NavMenuLinks to={item.link} key={index}>
                {item.title}
              </NavMenuLinks>
            )
          )}
        </MenuResponsive>
      </Menu>
    </Nav>
  );
}
