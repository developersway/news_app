import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './style_android.css';

class Country extends React.Component{

    render(){
        return(
            <div className='country'>
                <button onClick={()=>{this.props.choice(this.props.state1.india); }}><b>India</b></button>
                <button onClick={()=>{this.props.choice(this.props.state1.united_states); }}><b>United States</b></button>
                <button onClick={()=>{this.props.choice(this.props.state1.australia); }}><b>Australia</b></button>
                <button onClick={()=>{this.props.choice(this.props.state1.new_zealand); }}><b>New Zealand</b></button>
                <button onClick={()=>{this.props.choice(this.props.state1.norway); }}><b>Norway</b></button>
                <button onClick={()=>{this.props.choice(this.props.state1.russia); }}><b>Russia</b></button>
                <button onClick={()=>{this.props.choice(this.props.state1.morocco); }}><b>Morocco</b></button>
                <button onClick={()=>{this.props.choice(this.props.state1.south_africa); }}><b>South Africa</b></button>
                <button onClick={()=>{this.props.choice(this.props.state1.singapore); }}><b>Singapore</b></button>
                <button onClick={()=>{this.props.choice(this.props.state1.thailand); }}><b>Thailand</b></button>
            </div>
        );
    }
}



export default Country;