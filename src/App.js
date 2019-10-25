import React from 'react';
import ReactDOM from 'react-dom'
import Content from './content';
import Feed from './feed';
import Country from './country';

import './style.css';
import './style_android.css';

class App extends React.Component{


  state={
      india:{
        business:"https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",
        entertainment:"https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",
        health:"https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",
        science:"https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",
        sports:"https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",
        technology:"https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"
      },
      united_states:{
        business:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",
        entertainment:"https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",
        health:"https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",
        science:"https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",
        sports:"https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",
        technology:"https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"
      },
      australia:{
        business:"https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",
        entertainment:"https://newsapi.org/v2/top-headlines?country=au&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",
        health:"https://newsapi.org/v2/top-headlines?country=au&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",
        science:"https://newsapi.org/v2/top-headlines?country=au&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",
        sports:"https://newsapi.org/v2/top-headlines?country=au&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",
        technology:"https://newsapi.org/v2/top-headlines?country=au&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"
      },
      new_zealand:{
        business:"https://newsapi.org/v2/top-headlines?country=nz&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",
        entertainment:"https://newsapi.org/v2/top-headlines?country=nz&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",
        health:"https://newsapi.org/v2/top-headlines?country=nz&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",
        science:"https://newsapi.org/v2/top-headlines?country=nz&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",
        sports:"https://newsapi.org/v2/top-headlines?country=nz&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",
        technology:"https://newsapi.org/v2/top-headlines?country=nz&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"  
      },
      norway:{
        business:"https://newsapi.org/v2/top-headlines?country=no&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",
        entertainment:"https://newsapi.org/v2/top-headlines?country=no&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",
        health:"https://newsapi.org/v2/top-headlines?country=no&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",
        science:"https://newsapi.org/v2/top-headlines?country=no&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",
        sports:"https://newsapi.org/v2/top-headlines?country=no&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",
        technology:"https://newsapi.org/v2/top-headlines?country=no&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"
      },
      russia:{
        business:"https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",
        entertainment:"https://newsapi.org/v2/top-headlines?country=ru&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",
        health:"https://newsapi.org/v2/top-headlines?country=ru&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",
        science:"https://newsapi.org/v2/top-headlines?country=ru&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",
        sports:"https://newsapi.org/v2/top-headlines?country=ru&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",
        technology:"https://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"
      },
      morocco:{
        business:"https://newsapi.org/v2/top-headlines?country=ma&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",
        entertainment:"https://newsapi.org/v2/top-headlines?country=ma&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",
        health:"https://newsapi.org/v2/top-headlines?country=ma&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",
        science:"https://newsapi.org/v2/top-headlines?country=ma&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",
        sports:"https://newsapi.org/v2/top-headlines?country=ma&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",
        technology:"https://newsapi.org/v2/top-headlines?country=ma&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"
      },
      south_africa:{
        business:"https://newsapi.org/v2/top-headlines?country=za&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",
        entertainment:"https://newsapi.org/v2/top-headlines?country=za&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",
        health:"https://newsapi.org/v2/top-headlines?country=za&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",
        science:"https://newsapi.org/v2/top-headlines?country=za&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",
        sports:"https://newsapi.org/v2/top-headlines?country=za&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",
        technology:"https://newsapi.org/v2/top-headlines?country=za&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"
      },
      singapore:{
        business:"https://newsapi.org/v2/top-headlines?country=sg&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",
        entertainment:"https://newsapi.org/v2/top-headlines?country=sg&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",
        health:"https://newsapi.org/v2/top-headlines?country=sg&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",
        science:"https://newsapi.org/v2/top-headlines?country=sg&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",
        sports:"https://newsapi.org/v2/top-headlines?country=sg&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",
        technology:"https://newsapi.org/v2/top-headlines?country=sg&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"
      },
      thailand:{
        business:"https://newsapi.org/v2/top-headlines?country=th&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",
        entertainment:"https://newsapi.org/v2/top-headlines?country=th&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",
        health:"https://newsapi.org/v2/top-headlines?country=th&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",
        science:"https://newsapi.org/v2/top-headlines?country=th&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",
        sports:"https://newsapi.org/v2/top-headlines?country=th&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",
        technology:"https://newsapi.org/v2/top-headlines?country=th&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"
      },
      choice:"",
      url:[],
      country:{},
      display:'none',
      input:"",
      filter_input:"",
      
   }



   choicee=(item)=>{
    
    var config={
      headers:{
        accept:"application/json"
      },
      method:"GET"     
  }
    this.setState({display:'block'})

     this.setState({choice:item.business,country:item},
      ()=>fetch(this.state.choice,config).then((response)=>{
      return response.json();}).then((data)=>{
        this.setState({url:data.articles,display:'none'})}).catch((error)=>{
          console.log(error);
      }))
    }

    content_choicee=(item)=>{
    
      var config={
        headers:{
          accept:"application/json"
        },
        method:"GET"     
    }
      
    this.setState({display:'block'})
  
       this.setState({choice:item},
        ()=>fetch(this.state.choice,config).then((response)=>{
        return response.json();}).then((data)=>{
          this.setState({url:data.articles,display:'none'})}).catch((error)=>{
            console.log(error);
        }))
      }
     
   
      componentDidMount(){
        var config={
          headers:{
            accept:"application/json"
          },
          method:"GET" 
        }
        
        this.setState({country:this.state.india},()=>fetch(this.state.india.business,config).then((response)=>{
          return response.json();}).then((data)=>{
            this.setState({url:data.articles});}).catch((error)=>{
              console.log(error);
            }))        

            
      } 

      inputbox=(event)=>{
          this.setState({input:event.target.value})
      }


      inputchange=()=>{
        this.setState({filter_input:this.state.input})
      }


   
      

      
      
        
      
      

  render(){
    return(<div>
     <div className='searchfield'>
          <h3 className='news'>News App</h3>
          <h1>Headlines</h1>
          <div className='input_field'><input type='text' placeholder='Search For News' onChange={this.inputbox}/><button onClick={this.inputchange}>Search</button></div>
          
       </div>

    <div className='linePreloader' style={{display:this.state.display}}></div>
    <div className='structure'>
    <div className='input_field1'><input type='text' placeholder='Search For News' onChange={this.inputbox}/><button onClick={this.inputchange}>Search</button></div>
      <p className='navbar'><span>&#9776;</span>
      <Content choice={this.content_choicee} state1={this.state} /></p>
      <Content choice={this.content_choicee} state1={this.state} />
      <Feed url={this.state.url} filter_input={this.state.filter_input}/>
      <Country choice={this.choicee} state1={this.state}/>
    </div>
    </div>);
  }
}

export default App;
