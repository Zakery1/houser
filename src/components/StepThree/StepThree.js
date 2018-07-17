import React, {Component}from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const baseUrl = '/api/houses';
class StepThree extends Component {
    constructor(){
        super(); 
        this.state = {
            mortgage: 0,
            rent: 0
        }
    }
    changeInputMortgage = (val) => {
        this.setState({
            mortgage: val
        })
    }
    changeInputRent = (val) => {
        this.setState({
            rent: val
        })
    }

    submitHouse = () => {
        const {name, address, city, state, zip} = this.props
        axios.post(baseUrl, {name, address, city, state, zip}).then(response => {
        }).catch(error => {
            console.log('Axios Error with submitHouse', error)
        })
    }
    render() {
        return(
            <div className='thirdPage'>
                    <p>Recommended Rent:</p>
                    <p>Monthly Mortgage Amount</p>
                    <input onChange={e => this.changeInputMortgage(e.target.value)}></input>
                    <p>Desired Monthly Rent</p>
                    <input onChange={e => this.changeInputRent(e.target.value)}></input>
                    <div className='thirdPageFooter'>
                        <Link to='/Wizard/Step2'><button>Previous Step</button></Link>
                        <Link to='/'><button onClick={() => this.submitHouse()}>Complete</button></Link>   
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {name, address, city, stateName, zip} = state
   return {
    name,
    address,
    city, 
    stateName,
    zip
   }
}

export default connect(mapStateToProps)(StepThree);
