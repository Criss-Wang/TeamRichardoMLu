import React, { Component } from 'react';
import axios from 'axios';

export class Analysis extends Component {
    constructor(props){
        super(props);
        this.grouplist=this.grouplist.bind(this);
        this.state ={
            data: []
        };
    }


    componentDidMount(){
        axios.get('http://localhost:5000/groups/getgroup')
             .then(response => {
                 console.log(response.data[0])
                 this.setState({data: response.data})
             });
    };

    grouplist(){
        return this.state.data.map((group, i)=>{
            return <div key = {i}>{group.GroupName}</div>
        })
    }

    render() {
        return (
            <div>
                {this.grouplist()}
            </div>
        )
    }
}

export default Analysis
