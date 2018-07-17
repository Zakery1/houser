import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';



export default class Wizard extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                Sell your house
                <button><Link to='/'>Cancel and go back</Link></button>
                <Route path='/Wizard/Step1' component={StepOne}/>
                <Route path='/Wizard/Step2' component={StepTwo}/>
                <Route path='/Wizard/Step3' component={StepThree}/>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return state;
// }

// export default connect(mapStateToProps)(Wizard);