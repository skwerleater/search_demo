import React from 'react'

const character = ({ character }) => (
  <li className="characters__item">
    <button
      type="button"
      className="characters__sprite"
      style={{
        backgroundImage: `url(${`${character.image}`})`
      }}
    />
    <p className="characters__name">{character.name}</p>
  </li>
)

export default character
