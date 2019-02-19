import React, { Component } from 'react';

//data base file
//const SQL = SQL file



class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      isLoading: false,
      error: null
    }
    // this.performSearch()
  }

  // performSearch = (search) => {
  //   this.setState({isLoading: true})
  //   return fetch(urlString + (search || ''))
  //   .then(response => {
  //     this.setState({isLoading: false})
  //     return response.json()
  //   })
  //   .catch (error => {
  //     this.setState({error})
  //   })
  // }

  // componentDidMount(){
  //   this.performSearch(this.state.searchTerm)
  //   .then(data => {
  //     this.setState({'results': data.results})
  //     this.refs.searchTermInput.value = this.state.searchTerm
  //   })
  // }

  // handleChange = (event) => {
  //   let value = event.target.value
  //   this.performSearch(value)
  //   .then(data => {
  //     this.setState({'results': data.results})
  //   })
  // }

    render() {
      return (
        <p className="filterContainer">
          <div className="roomFilter">
            <input id="roomNumber" placeholder="Enter Room Number">
            </input>
          </div> 
          <div className="floorFilter">
            <input id="floorNumber" placeholder="Enter Floor Number">
            </input>
          </div>
          <div className="seatFilter">
            <input id="seatNumber" placeholder="# of Seats">
            </input>
          </div>
          <div className="projectorFilter">
            <input id="projector" placeholder="Projector?">
            </input>
          </div>
          <div className="computersFilter">
            <input id="computers" placeholder="Class Computers?">
            </input>
          </div>
        </p>
      );
    }
  }
  
  export default Filter;

