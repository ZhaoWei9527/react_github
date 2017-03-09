import React , {Component} from 'react'
import List from './list'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            comments : [
                {
                    name : '赵伟',
                    content : '我喜欢你'
                },
                {
                    name : '高培林',
                    content : '我不喜欢你'
                }
            ]
        }
    }

    add = (comment) => {
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }

    remove = (index) => {
        const {comments} = this.state
        comments.splice(index , 1)
        this.setState({comments})
    }
    render () {
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <List comments={this.state.comments} add={this.add} remove={this.remove}/>
            </div>
        )
    }
}
export default App