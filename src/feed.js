import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './style_android.css';

class Feed extends React.Component{

    state={
        selected_items:[]
    }
    searched_one=()=>{
        let str=this.props.filter_input;
        var selected_news=[]
        //console.log("==string==="+str);
        var org,i,j;
        selected_news=this.props.url.filter((item)=>
            {
                org=item.title;
                //console.log(org+str);
                org=org.toLowerCase();
                org = org.replace(/ +/g, "");
                console.log(org+"====="+str);
                    if(str=="")
                        return true;
                    else
                    {
                        i=0;
                        while(i<org.length)
                        {
                            j=0;
                            while(j<str.length)
                            {
                                console.log("******"+str)
                                if(org[i]!=str[j])
                                    break;
                                else
                                {
                                    i++;
                                    j++;
                                }
                                if(j==str.length)
                                    return true;    
                            }
                            i=i-j;
                            i++;
                        }
                    }          
                  
                
            })
            //this.setState({selected_items:selected_news});
            //console.log("==searched_news===="+selected_news)
            return selected_news;
        
    }
    


    render(){
        var c=this.searched_one();
        //console.log("==1===="+c);
        //console.log("==2==="+this.props.url);
        let news=c.map((item)=>{return(
        <div className='container'>
            <div className='feed'>
                <img className='img1'src={item.urlToImage}></img>
                <div className='text'>
                    <div className='title'>{item.title}</div>
                    <br></br>
                    <div classname='desc'><i>{item.description}</i></div>
                </div>    
            </div>
        </div>    )
        })

        return(
            <div className='totalnews'>
                {news}
            </div>
        );
    }
}


export default Feed;