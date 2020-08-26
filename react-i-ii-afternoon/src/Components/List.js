import React, {Component} from "react";
import './App.css';
import data from './data.js'

export default class ListItem extends Component{
constructor(){
    super();
    this.state={
        data: data
    }
}
render(){
        const PageDisplay= this.state.data.map(function(data, index){ console.log(data)
        return <ListItem key={index} data={data}/>
        })

        return(
            <div className='Data-List'>
                {PageDisplay}
            </div>
        )
}}
