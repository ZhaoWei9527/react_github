import React , {Component} from 'react'
import {Link} from 'react-router'
class Repos extends Component{
    constructor(props){
        super(props)
        this.state = {
            repos : [
                {username : 'google' , repoName : 'angular'},
                {username : 'baidu' , repoName : 'baidu-map'},
                {username : 'ant' , repoName : 'antd'},
                {username : 'facebook' , repoName : 'react'},
                {username : 'souGou' , repoName : '搜狗输入法'},
            ]
        }
    }
    render(){
        const lis = this.state.repos.map( (repo , index) => {
            return <li key={index}><Link activeClassName="active" to={`repos/${repo.username}/${repo.repoName}`}>{repo.repoName}</Link></li>
        })
        return (
            <div>
                <ul>
                    {lis}
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default Repos