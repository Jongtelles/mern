import React, {Component} from 'react';
import './App.css';
import API from "./utils/API";
import Results from "./components/Results";

class App extends Component {

  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.searchUser();
  }

  searchUser = query => {
    API
      .search(query)
      .then(res => {
        console.log(res.data);
        this.setState({results: res.data.results});
      })
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  };
  render() {

    return (

      <div className="App">

    <div className="col-offset-2">
          <Results results={this.state.results} />
          <button className="btn-success">Keep</button>
        </div>

        </div>
    );
  }
}

export default App;
