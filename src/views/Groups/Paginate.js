import React, {Component} from 'react';
import { Button } from 'reactstrap';

// Note that the Pushing Sequence for the List is Reversed because of the float:right Styling.
// Very similar to the pattern in pagination component for contact.js.

class Pagecomponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            totalPage:10, 
        }
    }

    componentDidMount() {
        this.setState({
            currentPage: this.props.currentPage,
            totalPage: this.props.totalPage
        })
    }
    
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