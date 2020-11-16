import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Category = ({ history }) => {
  return (
    <NavDropdown title="category" id="category">
      <LinkContainer to="/category/electronics">
        <NavDropdown.Item>Electronics</NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to="/category/clothings">
        <NavDropdown.Item>Clothings</NavDropdown.Item>
      </LinkContainer>
    </NavDropdown>
  );
};

export default Category;
