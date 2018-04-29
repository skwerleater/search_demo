import React from 'react'

const Search = ({ onChange }) => (
  <input
    type="text"
    onChange={onChange}
    placeholder="Enter search term..."
  />
)

export default Search
