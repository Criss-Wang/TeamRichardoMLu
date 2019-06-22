import React, {Component} from 'react';
import Pagecomponent from './Pagecomponent';
import Axios from 'axios';


//This is for illustration
class Pagecontainer extends Component {
    constructor() {
        super()
        this.state = {
            dataList:[],
            pageConfig: {
                totalPage: 0 //总页码
            },
            data:[],
        }
        this.getCurrentPage = this.getCurrentPage.bind(this)
        this.getData=this.getData.bind(this)
    }

    getData(){
        Axios.get('https://jsonplaceholder.typicode.com//comments?postId=1')
            .then(json =>{
                console.log(json.data)
                this.setState(
                  { data: json.data,
                    pageConfig: {
                        totalPage: json.data.length, 
                    }
                })
            })
            .catch(err =>{
                console.log(err);
            })
    }

    getCurrentPage(currentPage) {
        let Data = this.state.data;
        this.setState({
            dataList:Data[currentPage-1].name
        })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.dataList}
                </div>
                <Pagecomponent pageConfig={this.state.pageConfig}
                               pageCallbackFn={this.getCurrentPage}/>
            </div>

        )
    }
}
export default Pagecontainer