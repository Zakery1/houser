import React, {Component}from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class StepTwo extends Component {
    constructor(){
        super(); 
        this.state = {
            imageUrl: '',
        }
    }
    changeInputImage = (val) => {
        this.setState({
            imageUrl: val
        })
    }

    render() {
        return(
            <div className='secondPage'>
                    <p>Image URL</p>
                    <input placeholder='Insert Image Here' onChange={e => this.changeInputImage(e.target.value)}></input>
                    <div className='secondPageFooter'>
                        <Link to='/Wizard/Step1'><button>Previous Step</button></Link>
                        <Link to='/Wizard/Step3'><button>Next Step</button></Link>
                    </div>
            </div>
        )
    }
}
export default StepTwo;