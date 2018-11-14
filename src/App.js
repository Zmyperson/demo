import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Tab from './components/tab'
import Store from './store/store'
class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <Tab></Tab>
        </div>
      </Provider>
    )
  }
}

export default App;
