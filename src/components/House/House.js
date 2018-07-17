import React from 'react';
// import deleteButton from '../../images/delete_button.png';

export default function House(props) {
    const {id, name, address, city, state, zip} = props
    return(
        <div>
            <p>Property Name:{name}</p>
            <p>Address:{address}</p>
            <p>City:{city}</p>
            <p>State:{state}</p>
            <p>Zip:{zip}</p>
            {/* <img src={deleteButton} alt='Shape X for deleting property' */}
            onClick={() => props.deleteHouse(id)}/>
        </div>
    )
}