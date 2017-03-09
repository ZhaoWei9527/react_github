import React, {Component} from 'react'
import {Link} from 'react-router'
export default class Repos extends Component {
    constructor(props){
        super(props)
        this.state = {
            repos : [
                {username : 'facebook' , reponame : 'react'},
                {username : 'google' , reponame : 'angular'},
                {username : '甲骨文' , reponame : 'JAVA'},
                {username : 'facebook' , reponame : 'react-dom'},

            ]
        }
    }
    render() {
        const lis = this.state.repos.map( (repo , index) => {
            return <li key={index}><Link to={`repos/${repo.username}/${repo.reponame}`}>{repo.reponame}</Link></li>
        })
        return (
            <div>
                <h3>Repos</h3>
                <ul>
                    {lis}
                </ul>
                {this.props.children}
            </div>
        )
    }
}