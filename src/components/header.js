import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"

import Nav from "./nav"
import logo from "../images/JasonCoryAlvernaz.jpg"
import menu from "../images/hamburgerMenu.svg"

const StyledHeader = styled.header`
  background: ${props => props.theme.purple};
  margin-bottom: 1.45rem;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 4fr;
  input[aria-expanded="true"] ~ ul {
    @media (max-width: 630px) {
      height: auto;
    }
  }
`

const PhoneBanner = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / span 1;
  text-align: center;
  display: grid;
  background: ${props => props.theme.black};
  border-bottom: 1px solid ${props => props.theme.green};
  a {
    font-weight: bold;
    align-self: center;
    color: ${props => props.theme.white};
    @media (max-width: 630px) {
      font-size: 1rem;
    }
  }
`

const Avatar = styled.img`
  margin-top: 2rem;
  margin-left: 2rem;
  margin-bottom: -12rem;
  position: relative;
  width: 24rem;
  box-shadow: ${props => props.theme.bs};
  border-radius: 13rem;
  filter: contrast(120%) brightness(0.9);
  transition: all 0.8s ease-in-out;
  @media (max-width: 800px) {
    margin-bottom: 1rem;
    margin-top: 1rem;
    margin-left: 1rem;
    width: 9rem;
    border-radius: 6rem;
  }
  @media (max-width: 630px) {
    margin-bottom: -3rem;
  }
`

const MenuButton = styled.input`
  border-radius: 0;
  outline: none;
  display: none;
  max-width: 3rem;
  align-self: center;
  @media (max-width: 630px) {
    grid-column: span 1 / -1;
    grid-row: span 1 / -1;
    justify-self: end;
    display: block;
    margin: 1rem;
  }
`

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  const toggleNav = () => {
    setExpanded(!expanded)
  }

  return (
    <StyledHeader>
      <PhoneBanner>
        <a href="tel:1-775-997-5429">775.997.5429</a>
      </PhoneBanner>
      <Avatar src={logo} alt="Jason Cory Alvernaz" />
      <MenuButton
        type="image"
        src={menu}
        aria-expanded={expanded}
        aria-label="menu"
        onClick={toggleNav}
      />
      <Nav />
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
