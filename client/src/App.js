import React, { Component } from 'react';
import './App.css';
import API from "./utils/API";
import Results from "./components/Results";
import axios from "axios";

class App extends Component {

  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.searchUser();
  }

  searchUser = query => {
    API.search(query)
      .then(res => {
        console.log(res.data);
        this.setState({ results: res.data.results });
      })
      .catch(err => console.log(err));
  };
  onClickKeep(data){
    axios.post("/api/user", data).then((res) => {
    console.log(res);
  })
  }
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  render() {

    return (

      <div className="App">
        <Results
        results={this.state.results}
        onClick={this.onClickKeep}
        />
      </div>
    );
  }
}

export default App;
