import React, { Component } from 'react'

import ScrollBox from '../ScrollBox'
class App extends Component {

    render() {
        return (
            <div>
                <ScrollBox />
                <button onClick={this.handleBottom}>BOTTOM</button>
            </div>
        )
    }
}

export default App