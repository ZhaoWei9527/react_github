import React , {Component} from 'react'
import Search from './search'
import List from './list'

class App extends Component{
    constructor(props){
        super(props)
        this.state ={
            SearchName : null
        }
    }
    setSearchName = (SearchName) => {
        this.setState({SearchName})
    }
    render(){
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <Search setSearchName={this.setSearchName}/>
                </section>
                    <List SearchName={this.state.SearchName}/>
                </div>
        )
    }
}
export default App
