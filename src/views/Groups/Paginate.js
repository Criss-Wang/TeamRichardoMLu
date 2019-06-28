import React, {Component} from 'react';
import { Button } from 'reactstrap';
// Note that the Pushing Sequence for the List is Reversed because of the float:right Styling.
class Pagecomponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1, //当前页码
            totalPage:10, //总页数
        }
    }

    componentDidMount() {
        this.setState({
            currentPage: this.props.currentPage,
            totalPage: this.props.totalPage
        })
    }
    

    //上一页事件
    prePageHandeler() {
        
        let {currentPage} = this.state
        const getCurrentPage = this.props.paginate;
        if (--currentPage === 0) {
            return false
        }
        getCurrentPage(currentPage)
        this.setState({
            currentPage: currentPage,
        })
    }
 //   


    //下一页事件
    nextPageHandeler() {
        let {currentPage,totalPage} = this.state
        const getCurrentPage = this.props.paginate;
        if (++currentPage > totalPage) {
            return false
        }
        getCurrentPage(currentPage)
        this.setState({
            currentPage: currentPage,
        })
    }
    render() {
        return (
            <span>
                <Button color="primary" 
                        outline 
                        className={this.state.currentPage >= 2 ? "nomore mr-2 float-right" : "mr-2 float-right" } 
                        onClick={this.nextPageHandeler.bind(this)} 
                        size='sm'>
                <i className='fa fa-chevron-right'></i>
                </Button>
                <Button color="primary" 
                        outline 
                        className={this.state.currentPage === 1 ? "nomore mr-2 float-right" : "mr-2 float-right" } 
                        onClick={this.prePageHandeler.bind(this)} 
                        size='sm'>
                <i className='fa fa-chevron-left'></i>
                </Button>
            </span>
        )
    }
}

export default Pagecomponent