import React, { Component } from 'react'
import './index.css'

export default class ScrollBox extends Component {

    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box
        this.box.scrollTop = scrollHeight - clientHeight
    }

    render() {

        return (
            <div
                className="container"
                ref={ref => this.box = ref}
            >
                <div className="box" >
                </div>
            </div>
        )
    }
}