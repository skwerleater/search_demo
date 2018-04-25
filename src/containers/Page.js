import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Pokemon from '../components/Pokemon'
import Search from '../components/Search'
import * as pageActions from '../actions/PageActions'

class Page extends Component {
  componentDidMount() {
    this.props.pageActions.fetchPokemons()
  }

  handleSearch(e) {
    this.props.pageActions.filterPokemons(e.target.value)
  }

  render() {
    let { displayedPokemons, isFetched } = this.props.page

    let pokemons = displayedPokemons.map((pokemon, index) => {
      return <Pokemon pokemon={pokemon} key={index} />
    })

    return (
      <div className="pokemons__wrapper">
        <Search onChange={this.handleSearch.bind(this)} />
        <ul className="pokemons">
          {
            isFetched
            ?
            <p>Loading...</p>
            :
            pokemons
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
