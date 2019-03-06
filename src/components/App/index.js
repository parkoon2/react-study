import React, { Component } from 'react'

import ScrollBox from '../ScrollBox'
import Map from '../Map'
class App extends Component {

    _handleBottom = () => {
        this.scrollBox.scrollToBottom()
    }

    render() {
        return (
            // <div>
            //     <ScrollBox ref={ref => this.scrollBox = ref} />
            //     <button onClick={this._handleBottom}>BOTTOM</button>
            // </div>
            <div>
                <Map />
            </div>
        )
    }
}

export default App