import React , {Component} from 'react'
import PubSub from 'pubsub-js'

class Item extends Component{
    delete = () => {
        const {comment , index , remove} = this.props
        if(confirm(`确定要删除${comment.name}得评论吗？`)){
            // remove(index)
            PubSub.publish( 'delete', index);

        }
    }
    render(){
        const {comment , index , remove} = this.props
        return (
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="handle">
                            <a href="javascript:;" onClick={this.delete}>删除</a>
                        </div>
                        <p className="user"><span >{comment.name}</span><span>说:</span></p>
                        <p className="centence">{comment.content}</p>
                    </li>
                </ul>

        )
    }
}
export default Item
