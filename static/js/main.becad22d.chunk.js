(this.webpackJsonpnews_app=this.webpackJsonpnews_app||[]).push([[0],[,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),s=a.n(o),i=(a(15),a(1)),r=a(2),p=a(4),l=a(3),h=a(5),u=(a(7),a(8),function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"content_container"},c.a.createElement("div",{className:"content content_title"},"Category:"),c.a.createElement("div",{className:"content",onClick:function(){e.props.choice(e.props.state1.country.business)}},"Business"),c.a.createElement("div",{className:"content",onClick:function(){e.props.choice(e.props.state1.country.entertainment)}},"Entertainment"),c.a.createElement("div",{className:"content",onClick:function(){e.props.choice(e.props.state1.country.health)}},"Health"),c.a.createElement("div",{className:"content",onClick:function(){e.props.choice(e.props.state1.country.science)}},"Science"),c.a.createElement("div",{className:"content",onClick:function(){e.props.choice(e.props.state1.country.sports)}},"Sports"),c.a.createElement("div",{className:"content",onClick:function(){e.props.choice(e.props.state1.country.technology)}},"Technology"))}}]),t}(c.a.Component)),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={selected_items:[]},a.searched_one=function(){var e,t,n,c=a.props.filter_input;return a.props.url.filter((function(a){if(e=(e=a.title).toLowerCase(),c=c.toLowerCase(),e=e.replace(/ +/g,""),console.log(e+"====="+c),""==c)return!0;for(t=0;t<e.length;){for(n=0;n<c.length&&(console.log("******"+c),e[t]==c[n]);)if(t++,++n==c.length)return!0;t-=n,t++}}))},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.searched_one().map((function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"feed"},c.a.createElement("img",{className:"img1",src:e.urlToImage}),c.a.createElement("div",{className:"text"},c.a.createElement("div",{className:"title"},e.title),c.a.createElement("br",null),c.a.createElement("div",{classname:"desc"},c.a.createElement("i",null,e.description)))))}));return c.a.createElement("div",{className:"totalnews"},e)}}]),t}(c.a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"country"},c.a.createElement("button",{onClick:function(){e.props.choice(e.props.state1.india)}},c.a.createElement("b",null,"India")),c.a.createElement("button",{onClick:function(){e.props.choice(e.props.state1.united_states)}},c.a.createElement("b",null,"United States")),c.a.createElement("button",{onClick:function(){e.props.choice(e.props.state1.australia)}},c.a.createElement("b",null,"Australia")),c.a.createElement("button",{onClick:function(){e.props.choice(e.props.state1.new_zealand)}},c.a.createElement("b",null,"New Zealand")),c.a.createElement("button",{onClick:function(){e.props.choice(e.props.state1.norway)}},c.a.createElement("b",null,"Norway")),c.a.createElement("button",{onClick:function(){e.props.choice(e.props.state1.russia)}},c.a.createElement("b",null,"Russia")),c.a.createElement("button",{onClick:function(){e.props.choice(e.props.state1.morocco)}},c.a.createElement("b",null,"Morocco")),c.a.createElement("button",{onClick:function(){e.props.choice(e.props.state1.south_africa)}},c.a.createElement("b",null,"South Africa")),c.a.createElement("button",{onClick:function(){e.props.choice(e.props.state1.singapore)}},c.a.createElement("b",null,"Singapore")),c.a.createElement("button",{onClick:function(){e.props.choice(e.props.state1.thailand)}},c.a.createElement("b",null,"Thailand")))}}]),t}(c.a.Component),d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={india:{business:"https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",entertainment:"https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",health:"https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",science:"https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",sports:"https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",technology:"https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"},united_states:{business:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",entertainment:"https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",health:"https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",science:"https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",sports:"https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",technology:"https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"},australia:{business:"https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",entertainment:"https://newsapi.org/v2/top-headlines?country=au&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",health:"https://newsapi.org/v2/top-headlines?country=au&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",science:"https://newsapi.org/v2/top-headlines?country=au&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",sports:"https://newsapi.org/v2/top-headlines?country=au&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",technology:"https://newsapi.org/v2/top-headlines?country=au&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"},new_zealand:{business:"https://newsapi.org/v2/top-headlines?country=nz&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",entertainment:"https://newsapi.org/v2/top-headlines?country=nz&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",health:"https://newsapi.org/v2/top-headlines?country=nz&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",science:"https://newsapi.org/v2/top-headlines?country=nz&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",sports:"https://newsapi.org/v2/top-headlines?country=nz&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",technology:"https://newsapi.org/v2/top-headlines?country=nz&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"},norway:{business:"https://newsapi.org/v2/top-headlines?country=no&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",entertainment:"https://newsapi.org/v2/top-headlines?country=no&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",health:"https://newsapi.org/v2/top-headlines?country=no&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",science:"https://newsapi.org/v2/top-headlines?country=no&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",sports:"https://newsapi.org/v2/top-headlines?country=no&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",technology:"https://newsapi.org/v2/top-headlines?country=no&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"},russia:{business:"https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",entertainment:"https://newsapi.org/v2/top-headlines?country=ru&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",health:"https://newsapi.org/v2/top-headlines?country=ru&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",science:"https://newsapi.org/v2/top-headlines?country=ru&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",sports:"https://newsapi.org/v2/top-headlines?country=ru&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",technology:"https://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"},morocco:{business:"https://newsapi.org/v2/top-headlines?country=ma&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",entertainment:"https://newsapi.org/v2/top-headlines?country=ma&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",health:"https://newsapi.org/v2/top-headlines?country=ma&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",science:"https://newsapi.org/v2/top-headlines?country=ma&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",sports:"https://newsapi.org/v2/top-headlines?country=ma&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",technology:"https://newsapi.org/v2/top-headlines?country=ma&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"},south_africa:{business:"https://newsapi.org/v2/top-headlines?country=za&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",entertainment:"https://newsapi.org/v2/top-headlines?country=za&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",health:"https://newsapi.org/v2/top-headlines?country=za&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",science:"https://newsapi.org/v2/top-headlines?country=za&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",sports:"https://newsapi.org/v2/top-headlines?country=za&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",technology:"https://newsapi.org/v2/top-headlines?country=za&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"},singapore:{business:"https://newsapi.org/v2/top-headlines?country=sg&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",entertainment:"https://newsapi.org/v2/top-headlines?country=sg&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",health:"https://newsapi.org/v2/top-headlines?country=sg&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",science:"https://newsapi.org/v2/top-headlines?country=sg&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",sports:"https://newsapi.org/v2/top-headlines?country=sg&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",technology:"https://newsapi.org/v2/top-headlines?country=sg&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"},thailand:{business:"https://newsapi.org/v2/top-headlines?country=th&category=business&apiKey=004eca4b17954d71975517b62a3fc46c",entertainment:"https://newsapi.org/v2/top-headlines?country=th&category=entertainment&apiKey=004eca4b17954d71975517b62a3fc46c",health:"https://newsapi.org/v2/top-headlines?country=th&category=health&apiKey=004eca4b17954d71975517b62a3fc46c",science:"https://newsapi.org/v2/top-headlines?country=th&category=science&apiKey=004eca4b17954d71975517b62a3fc46c",sports:"https://newsapi.org/v2/top-headlines?country=th&category=sports&apiKey=004eca4b17954d71975517b62a3fc46c",technology:"https://newsapi.org/v2/top-headlines?country=th&category=technology&apiKey=004eca4b17954d71975517b62a3fc46c"},choice:"",url:[],country:{},display:"none",input:"",filter_input:""},a.choicee=function(e){var t={headers:{accept:"application/json"},method:"GET"};a.setState({display:"block"}),a.setState({choice:e.business,country:e},(function(){return fetch(a.state.choice,t).then((function(e){return e.json()})).then((function(e){a.setState({url:e.articles,display:"none"})})).catch((function(e){console.log(e)}))}))},a.content_choicee=function(e){var t={headers:{accept:"application/json"},method:"GET"};a.setState({display:"block"}),a.setState({choice:e},(function(){return fetch(a.state.choice,t).then((function(e){return e.json()})).then((function(e){a.setState({url:e.articles,display:"none"})})).catch((function(e){console.log(e)}))}))},a.inputbox=function(e){a.setState({input:e.target.value})},a.inputchange=function(){a.setState({filter_input:a.state.input})},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={headers:{accept:"application/json"},method:"GET"};this.setState({country:this.state.india},(function(){return fetch(e.state.india.business,t).then((function(e){return e.json()})).then((function(t){e.setState({url:t.articles})})).catch((function(e){console.log(e)}))}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"searchfield"},c.a.createElement("h3",{className:"news"},"News App"),c.a.createElement("h1",null,"Headlines"),c.a.createElement("div",{className:"input_field"},c.a.createElement("input",{type:"text",placeholder:"Search For News",onChange:this.inputbox}),c.a.createElement("button",{onClick:this.inputchange},"Search"))),c.a.createElement("div",{className:"linePreloader",style:{display:this.state.display}}),c.a.createElement("div",{className:"structure"},c.a.createElement("div",{className:"input_field1"},c.a.createElement("input",{type:"text",placeholder:"Search For News",onChange:this.inputbox}),c.a.createElement("button",{onClick:this.inputchange},"Search")),c.a.createElement("p",{className:"navbar"},c.a.createElement("span",null,"\u2630"),c.a.createElement(u,{choice:this.content_choicee,state1:this.state})),c.a.createElement(u,{choice:this.content_choicee,state1:this.state}),c.a.createElement(y,{url:this.state.url,filter_input:this.state.filter_input}),c.a.createElement(b,{choice:this.choicee,state1:this.state})))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.becad22d.chunk.js.map