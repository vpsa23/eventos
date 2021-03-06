import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Footer extends Component {
  render() {
    return (
      <footer className="text-center">
        <Row>
          <Col md={4} xs={6}>
            <a className="nice_font" href="">Quiénes somos</a>
          </Col>
          <Col md={4} xs={6}>
            <a className="nice_font" href="">Contáctanos</a>
          </Col>
          <Col md={4} xs={12}>
            <FontAwesome className="icon" name='facebook' />
            <FontAwesome className="icon" name='instagram' />
            <FontAwesome className="icon" name='twitter' />
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;