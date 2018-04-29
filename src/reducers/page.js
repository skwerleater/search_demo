import {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS,
  FILTER_CHARACTERS
} from '../constants/Page'

const initialState = {
  isFetched: false,
  characters: [],
  displayedCharacters: []
}

export default function character(state = initialState, action) {

  switch (action.type) {
    case REQUEST_CHARACTERS:
      return {
        ...state,
        isFetched: true
      }

    case RECEIVE_CHARACTERS:
      let characters = action.characters.map(character => {
        let { url } = character
        character.id = url.substring(34, url.length - 1)
        return character
      })

      return {
        ...state,
        characters,
        displayedCharacters: characters.slice(0, 60),
        isFetched: false
      }

    case FILTER_CHARACTERS:
      let displayedCharacters = state.characters.filter(character => {
        if (character.name.toLowerCase().includes(action.searchTerm.toLowerCase())) {
          return true
        }
          if (character.origin.name.toLowerCase().includes(action.searchTerm.toLowerCase())) {
              return true
          }
        return false
      }).slice(0, 60)

      return {
        ...state,
        displayedCharacters
      }

    default:
      return state
  }

}
