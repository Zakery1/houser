import React, {Component}from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  updateFirstPage } from '../../ducks/reducer';

class StepOne extends Component {
    constructor(){
        super(); 
        this.state = {
            name: '',
            address: '',
            city: '', 
            stateName: '',
            zip: 0
        }
    }
    changeInputName = (val) => {
        this.setState({
            name: val
        })
    }
    changeInputAddress = (val) => {
        this.setState({
            address: val
        })
    }
    changeInputCity = (val) => {
        this.setState({
            city: val
        })
    }
    changeInputStateName = (val) => {
        this.setState({
            stateName: val
        })
    }
    changeInputZip = (val) => {
        this.setState({
            zip: val
        })
    }

    render() {
        const { updateFirstPage } = this.props
        const {name, address, city, stateName, zip} = this.state;
        return(
            <div className='firstPage'>
                    <p>Property Name</p>
                    <input placeholder='Insert Name Here' onChange={e => this.changeInputName(e.target.value)}></input>
                    <p>Address</p>
                    <input placeholder='Insert Address Here' onChange={e => this.changeInputAddress(e.target.value)}></input>
                    <p>City</p>
                    <input placeholder='Insert City Here' onChange={e => this.changeInputCity(e.target.value)}></input>
                    <p>State</p>
                    <input placeholder='Insert State Here' onChange={e => this.changeInputStateName(e.target.value)}></input>
                    <p>Zipcode</p>
                    <input placeholder='Insert Zipcode Here' onChange={e => this.changeInputZip(e.target.value)}></input>
                    <div className='firstPageFooter'>
                        <Link to='/Wizard/Step2'><button onClick={() => updateFirstPage(name, address, city, stateName, zip)}>Next Step</button></Link>
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

export default connect(mapStateToProps, { updateFirstPage })(StepOne);