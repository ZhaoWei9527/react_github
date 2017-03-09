import React , {Component} from 'react'


class Repo extends Component{
    render(){
        return <div>公司名：{this.props.params.username}---发布：{this.props.params.repoName}</div>
    }
}
export default Repo