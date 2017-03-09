import React , {Component} from 'react'


class Search extends Component{
    Search = () => {
        const SearchName = this.refs.SearchName.value
        this.props.setSearchName(SearchName)
    }
    render(){
        return (
            <div>
                <input type="text" placeholder="enter the name you search" ref="SearchName"/>
                <button onClick={this.Search}>Search</button>
            </div>
        )
    }
}
export default Search