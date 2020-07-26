import React from "react";
import { Link } from "react-router-dom";

import './section-card.scss';

const SectionCard = ({ name, to }) => (
  <Link className="section-card" to={to}>
    <p>{name}</p> 
  </Link>
)

export default SectionCard;
