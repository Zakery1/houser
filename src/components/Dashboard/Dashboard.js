import React, { Component } from 'react';
import axios from 'axios';
import House from '../House/House.js'
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }
    }

    deleteHouse = (id) => {
        axios.delete(`/api/houses/${id}`).then(response => {
          this.setState({
              houses: response.data
            })
          console.log(response)
        });
      }

    //   deleteHouse = (id) => {
    //     axios.delete(`${baseUrl}/${id}`).then(response => {
    //         this.setState({
    //             houses: response.data
    //         })
    //         this.getHouses();
    //     }).catch(error => {
    //         console.log('Axios Error with deleteHouse', error)
    //     }) 
    // }
      

    componentDidMount() {
        axios.get('/api/houses').then(res => {
            console.log(res.data)
            this.setState({
                houses: res.data
            });
        });
    }

    render() {

        let theHouses = this.state.houses.map(house => {
                return <div className="houses">
                        {house.name} <br/>
                        {house.address} <br/>
                        {house.city} 
                        {house.state}
                        {house.zip} <br/>
                        <img className="house-image" src={house.image_url} alt=""/> <br/>
                        <div>Mortgage amount: {house.mortgage_amount}</div>
                        <div>Monthy rent:{house.monthly_rent}</div>
                        </div>
            }
        )


        return (
        <div>
                <p>Dashboard</p>
                {theHouses}
                 <House/> 
                 <form>
                 <button><Link to='/wizard/Step1'>Go to Wizard</Link></button>
                 {this.state.houses.map((house,i) => <div key={i}><House {...house} deleteHouse={this.deleteHouse}/></div>)}
                 </form>
        </div>
        )
    }
}