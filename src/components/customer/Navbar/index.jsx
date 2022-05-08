import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Search';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import './navbar.css';

import logo from '../../../assets/icons/illustration.svg';
import toggle from '../../../assets/icons/align-right.svg';
import search from '../../../assets/icons/search.svg';

// const Section = styled.section`
//   font-family: 'Poppins', sans-serif;
//   padding-top: 20px;
//   background-color: #fff;
//   padding-bottom: 20px;
// `;

const Search = styled.div`
  border-radius: 10px;
  width: 250px;
  display: flex;
  align-items: center;
  background-color: #efefef;
  margin-right: 20px;

  input {
    font-family: 'Lato', 'sans-serif';
    font-weight: 400;
    font-size: 14px;
    margin-left: 10px;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const Icon = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    position: absolute;
    top: 0;
    bottom: -5px;
    margin: auto;
  }
`;

const Button = styled.button`
  background-color: var(--text-blue);
  color: var(--text-white);
  padding: 11px 13px;
  border: none;
  border-radius: 7px;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  text-transform: capitalize;
  transition: all 0.5 ease;
  font-weight: 500;
  text-decoration: none;
  width: 130px;
  text-align: center;

  &:hover {
    box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  }

  @media screen and (max-width: 576px) {
    display: block;
    margin: 0 auto;
    margin-top: 10px;
  }
`;

const index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      <Navbar color="white" expand="lg" className="fixed-top" light>
        <Container>
          <img src={logo} alt="Ankasa Ticketing" className="mr-2" />
          <NavbarBrand href="#">ankasa</NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen)}>
            <img src={toggle} alt="toggle" />
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <form>
                <Search className="p-1 pl-4">
                  <Icon>
                    <img src={search} alt="Search" />
                  </Icon>
                  <input
                    type="search"
                    className="form-control"
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      outline: 'none',
                      boxShadow: 'none'
                    }}
                    placeholder="Where you want to go ?"
                  />
                </Search>
              </form>
              <NavItem>
                <NavLink onClick={() => setModal(!modal)}>find ticket</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">my booking</NavLink>
              </NavItem>
            </Nav>
            <Button>Sign Up</Button>
          </Collapse>
        </Container>
      </Navbar>
      {modal ? <Modal /> : null}
    </>
  );
};

export default index;