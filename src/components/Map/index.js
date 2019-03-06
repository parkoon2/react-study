import React, { Component } from 'react'

export default class Map extends Component {

    state = {
        values: [],
        value: ''
    }

    _handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    _handleSubmit = (e) => {
        /**
         * this.state.values.push(this.state.value)
         * this.forceUpdate()
         * 
         * BAD!
         */

        /**
         * GOOD!
         * 
         * Array.prototype.concat --> 기존 배열에 원소를 추가하여 새 배열을 반환한다.
         */
        this.setState({
            values: this.state.values.concat(this.state.value),
            value: ''
        })


    }

    _handleRemove = idx => {
        const { values } = this.state
        /**
         * 
         * BAD
         * 
         * Array.prototype.splice --> 배열에서 특정 범위의 값을을 추출하고, 그 자리에 새로운 값을 넣는다. 기존의 배열에서 추출된 값이 제거된다
         * array.splice(start, count)
         * array.splice(1, 2) --> array 의 두번째 인덱스부터 2개를 추출한다
         * array.splice(1, 2, 'a', 'b') --> array 의 두번째 인덱스부터 2개를 추출하고 'a', 'b'를 넣는다
         * 
         * 
         * 기존의 배열을 건드린다. Sooooo bad!
         */
        // this.state.values.splice(idx, 1)
        // this.setState({
        //     values: this.state.values
        // })

        /**
         * GOOD
         * 
         * Array.prototype.slice --> 배열의 일부분을 선택하여 새로운 배열을 만든다.
         * array.slice(start, end) --> start와 end에는 숫자가 들어간다. start에 해당하는 요소부터 end 바로 전까지 요소를 선택하여 새로운 배열을 반환한다.
         */
        // this.setState({
        //     values: [
        //         ...values.slice(0, idx),
        //         ...values.slice(idx + 1, values.length)
        //     ]
        // })

        /**
         * Very Gooood
         */

        this.setState({
            values: values.filter((val, i) => i !== idx)
        })

    }

    render() {
        const { value, values } = this.state
        console.log(this.state)
        return (
            <div>
                <input
                    value={value}
                    onChange={this._handleInputChange}
                />
                <button

                    onClick={this._handleSubmit}

                > Add! </button>
                <ul>
                    {values.map((val, idx) => <li
                        onDoubleClick={() => this._handleRemove(idx)}
                        key={idx}
                    >{val}</li>)}
                </ul>
            </div>
        )
    }
}