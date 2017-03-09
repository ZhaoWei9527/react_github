import React , {Component} from 'react'
import axios from 'axios'

class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstOpen : true,
            loading : false,
            users : [],
            errorMsg : null
        }
    }
    componentWillReceiveProps(nextProps){
        console.log('改变了吗')
        this.setState({
            firstOpen : false,
            loading : true
        })
        const {SearchName} = nextProps
        const url = `https://api.github.com/search/users?q=${SearchName}`
        axios(url)
            .then(response => {
                const items = response.data.items
                const users = items.map( item => {
                    return {html_url:item.html_url, avatar_url: item.avatar_url, login:item.login}
                })
                this.setState({
                    loading : false,
                    users
                })

            })
            .catch(e => {
                this.setState({
                    loading : false,
                    errorMsg : e.message
                })
            })
    }
    render(){
        const {firstOpen , loading , users , errorMsg} = this.state

        if(firstOpen){
            return <h2>Enter name to search</h2>
        }else if(loading){
            return <h2>Loading</h2>
        }else if(errorMsg){
            return <h2>errorMsg</h2>
        }else{
            const items = users.map( (item , index) => {
                return <div className="card" key={index}>
                    <a href={item.html_url} target="_blank">
                        <img src={item.avatar_url} style={{width: '100px'}}/>
                    </a>
                    <p className="card-text">{item.login}</p>
                </div>
            })
            return (
                <div className="row">
                    {items}
                </div>
            )
        }

    }
}

export default List
