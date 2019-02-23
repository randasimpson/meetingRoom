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


    render() {
      return (
        <div  className="flex-container" id="filterContainer">
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
            Projector? <br />
            <input type="radio" value="yes" name="projector">
            </input> Yes
            <input type="radio" value="no" name="projector">
            </input> No
          </div>
          <div className="computersFilter">
            Class Computers? <br />
            <input type="radio" value="yes" name="computers">
            </input>Yes 
            <input type="radio" value="no" name="computers">
            </input>No
          </div>
        </div>
      );
    }
  }
  
  export default Filter;

