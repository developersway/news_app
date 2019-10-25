import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './style_android.css';

class Content extends React.Component{
    render(){
        return(
            <div className="content_container">
                <div className='content content_title'>Category:</div>
                <div className='content' onClick={()=>{this.props.choice(this.props.state1.country.business);}}>Business</div>
                <div className='content' onClick={()=>{this.props.choice(this.props.state1.country.entertainment);}}>Entertainment</div>
                <div className='content' onClick={()=>{this.props.choice(this.props.state1.country.health);}}>Health</div>
                <div className='content' onClick={()=>{this.props.choice(this.props.state1.country.science);}}>Science</div>
                <div className='content' onClick={()=>{this.props.choice(this.props.state1.country.sports);}}>Sports</div>
                <div className='content' onClick={()=>{this.props.choice(this.props.state1.country.technology);}}>Technology</div>
            </div>
        )
    }
}

export default Content;