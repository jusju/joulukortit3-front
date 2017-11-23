import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class YksiRivi extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Osoite extends Component {
  constructor(props) {
    super(props);
    
  }


  render() {
      return (
        <tr>
          <td>{this.props.osoite.id}</td>
          <td>{this.props.osoite.nimi}</td>
          <td>{this.props.osoite.katuosoite}</td>
          <td>{this.props.osoite.maa}</td>
        </tr>
      );
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      osoitteet: []
    };
    console.log("MMMM");

  }

  componentDidMount() {
    this.lataaOsoitteetServerilta();
  }

  // Load students from database
  lataaOsoitteetServerilta() {
    fetch('http://palvelum.me/joulukortit2/henkilot.json').then((response) => response.json()).then((responseData) => {
      console.log("HELLO");      
      this.setState({osoitteet: responseData});
    });
  }
  render() {
  
      var osoitteet = this.state.osoitteet.map(osoite => <Osoite 
        key={osoite.id} 
      osoite={osoite} />);

      return (
        <div className="App">
          <table>
            <tbody>
              {osoitteet}
            </tbody>
          </table>
        </div>
      );
  }
}

export default App;


