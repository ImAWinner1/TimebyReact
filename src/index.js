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
    render(){
        return(
            <div>
                <h1>Hello World ! </h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
ReactDom.render(
    <Clock />,
    document.getElementById('root')
);
