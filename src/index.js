import React from 'react'
import ReactDom from 'react-dom'
/*
function tick(){
    const element= (
        <div>
            <h1>Hello World ! </h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
    
        </div>
    );
    ReactDom.render(
        element,
        document.getElementById('root')
    );

}
setInterval(tick,1000);
*/
class Clock extends React.Component { 
    constructor(props){
        super(props);
        this.state={
           date: new Date().toLocaleTimeString()
        };
    }
    render(){
        return(
            <div>
                <h1>Hello World ! </h1>
                <h2>It is {this.state.date}.</h2>
            </div>
        )
    }
}
ReactDom.render(
    <Clock />,
    document.getElementById('root')
);
