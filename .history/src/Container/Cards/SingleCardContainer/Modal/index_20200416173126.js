import React from 'react';
import {
  Modal, Button, ProgressBar, Alert, Col, Row,
} from 'react-bootstrap';

import { StyledBadge, StyledModal } from '../../../../styled';
import { pokemonDefaultImage } from '../../../../shared/config';
import capitalizeFirstLetter from '../../../../shared/utilites';


const PokemonModal = ({ pokemonData, show, handleClose }) => {
  const {
    sprites, name, types, stats, abilities,
  } = pokemonData;

  return (
    <StyledModal show={show} onHide={handleClose} className="form-group text-center">
      <Modal.Header closeButton>
        <Modal.Title>
          {capitalizeFirstLetter(name)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={sprites.front_default || pokemonDefaultImage}
          alt={name}
        />
        <hr />
        {types.map((singleType) => (
          <StyledBadge className={singleType.type.name} key={singleType.type.name}>
            {singleType.type.name}
          </StyledBadge>
        ))}
        <hr />
        {stats.map((stat) => (
          <Row key={stat.stat.name}>
            <Col xs={4}>
              {stat.stat.name}
            </Col>
            <Col xs={8}>
              <ProgressBar
                animated
                variant="success"
                max="150"
                label={stat.base_stat}
                now={stat.base_stat}
              />
            </Col>
          </Row>
        )).reverse()}
        <hr />
        {abilities.map((ability) => (
          <Alert variant="info" key={ability.ability.name}>
            <b>{ability.ability.name}</b>
          </Alert>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </StyledModal>
  );
};

export default PokemonModal;
