import {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS,
  FILTER_CHARACTERS
} from '../constants/Page'

function requestCharacters() {
  return {
    type: REQUEST_CHARACTERS
  }
}

function receiveCharacters(json) {
  return {
    type: RECEIVE_CHARACTERS,
    characters: json.results
  }
}

export function fetchCharacters() {

  return dispatch => {
    dispatch(requestCharacters())
    return fetch(`https://rickandmortyapi.com/api/character`)
      .then(response => response.json())
      .then(json => dispatch(receiveCharacters(json)))
  }

}

export function filterCharacters(searchTerm) {
  return {
    type: FILTER_CHARACTERS,
    searchTerm
  }
}
