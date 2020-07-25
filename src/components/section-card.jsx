import React from "react";
import './section-card.scss';

const SectionCard = ({ name }) => (
  <div className="section-card">
    <button>
      <p>{name}</p>
    </button>
  </div>
)

export default SectionCard;
