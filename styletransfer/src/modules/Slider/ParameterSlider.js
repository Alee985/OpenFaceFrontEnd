import React, {Component} from 'react';
import Slider from 'react-rangeslider';

class ParameterSlider extends Component {
    constructor(props, context) {
        super(props, context)
        this.props = props
        this.state = {
            paramValue: 0
        }
    }

    handleOnChange = (value) => {
        this.setState({
            paramValue: value
        })
    }

    render() {
        let {paramValue} = this.state
        return (
            <div>
                <span className='flex flex-row justify-start text-md font-semibold text-gray-700'>
                    {this.props.sliderLabel}
                </span>
                <Slider 
                    value={paramValue}
                    orientation="horizontal"
                    onChange={this.handleOnChange}
                />
            </div>
        )
    }
}

export default ParameterSlider;