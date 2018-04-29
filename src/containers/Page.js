import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Character from '../components/Character'
import Search from '../components/Search'
import * as pageActions from '../actions/PageActions'

class Page extends Component {
  componentDidMount() {
    this.props.pageActions.fetchCharacters()
  }

  handleSearch(e) {
    this.props.pageActions.filterCharacters(e.target.value)
  }

  render() {
    let { displayedCharacters, isFetched } = this.props.page

    let characters = displayedCharacters.map((character, index) => {
      return <Character character={character} key={index} />
    })

    return (
      <div className="characters__wrapper">
        <Search onChange={this.handleSearch.bind(this)} />
        <ul className="characters">
          {
            isFetched
            ?
            <p>Loading...</p>
            :
            characters
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
