import React, {Component} from 'react';
// Note that the Pushing Sequence for the List is Reversed because of the float:right Styling.
class Pagecomponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1, //当前页码
            groupCount: 4, //页码分组，显示7个页码，其余用省略号显示
            startPage: 1,  //分组开始页码
            totalPage:10, //总页数
            itemsPerpage:10, 
            totalItem: 500,
        }
        this.createNav = this.createNav.bind(this);
    }

    componentDidMount() {
        this.setState({
            totalItem: this.props.totalItem,
            currentPage: this.props.currentPage,
            itemsPerpage : this.props.itemsPerpage,
            totalPage: this.props.totalPage
        })
        //this.props.paginate(this.state.currentPage);
    }

    createNav() {
        //const {totalPage} = this.props.pageConfig;
        const {currentPage, groupCount, totalPage} = this.state;
        var {startPage} = this.state;
        let pages = []
        //下一页
        pages.push(<li className={currentPage === totalPage ? "nomore" : null}
                       onClick={this.nextPageHandeler.bind(this)}
                       key={totalPage + 1}><i className='fa fa-chevron-right'></i></li>)

        if (totalPage <= 6) {
            /*总页码小于等于6时，全部显示出来*/
            for (let i = totalPage; i >= 1; i--) {
                pages.push(<li key={i} onClick={this.pageClick.bind(this, i)}
                               className={currentPage === i ? "activePage" : null}>{i}</li>)
            }
        } else {
            /*总页码大于6时，部分显示*/

            //最后一页
            pages.push(<li className={currentPage === totalPage ? "activePage" : null} key={totalPage}
                           onClick={this.pageClick.bind(this, totalPage)}>{totalPage}</li>)
            
            //后面省略号
            if (startPage + groupCount < totalPage) {
                pages.push(<li className="ign" key={-2}>···</li>)
            }
            // Adjust innerLast  
            let innerLast = 0;
            if (currentPage < groupCount + 1){
                innerLast = groupCount + 1;
                startPage = 2;
            } else {
                innerLast = groupCount + startPage -1;}

            if (startPage + groupCount >= totalPage) {
                innerLast = totalPage -1;
                startPage = totalPage - groupCount;
            } else {
                innerLast = groupCount + startPage -1;
            }
            
            //非第一页和最后一页显示
            for (let i = innerLast ; i >= startPage; i--) {
                if (i <= totalPage - 1 && i > 1) {
                    pages.push(<li className={currentPage === i ? "activePage" : null} key={i}
                                   onClick={this.pageClick.bind(this, i)}>{i}</li>)
                }
            }

            if (currentPage >= groupCount + 1){
                pages.push(<li className="ign" key={-1}>···</li>)
            }//前面省略号(当当前页码比分组的页码大时显示省略号)

            //第一页
            pages.push(<li className={currentPage === 1 ? "activePage" : null} key={1}
                           onClick={this.pageClick.bind(this, 1)}>1</li>)
        }
                //上一页
        pages.push(<li className={currentPage === 1 ? "nomore" : null} onClick={this.prePageHandeler.bind(this)}
                        key={0}><i className='fa fa-chevron-left'></i></li>)
        
        return pages;

    }

    //页码点击
    pageClick(clickedPage) {
        const {groupCount} = this.state
        const getCurrentPage = this.props.paginate;
        //当 当前页码 大于 分组的页码 时，使 当前页 前面 显示 两个页码
        if (clickedPage-1 >= groupCount) {
            this.setState({
                startPage: clickedPage - 2,
            })
        }
        if (clickedPage-1 < groupCount) {
            this.setState({
                startPage: 1,
            })
        }
        //第一页时重新设置分组的起始页
        if (clickedPage === 1) {
            this.setState({
                startPage: 1,
            })
        }
        this.setState({
            currentPage: clickedPage,
        })
        //将当前页码返回父组件
        getCurrentPage(clickedPage)
    }

    //上一页事件
    prePageHandeler() {
        let {currentPage} = this.state
        if (--currentPage === 0) {
            return false
        }
        this.pageClick(currentPage)
    }

    //下一页事件
    nextPageHandeler() {
        let {currentPage,totalPage} = this.state
        if (++currentPage > totalPage) {
            return false
        }
        this.pageClick(currentPage)
    }
    render() {
        const pageList = this.createNav();
        return (
            <ul className="page-container">
                {pageList}
            </ul>
        )
    }
}

export default Pagecomponent