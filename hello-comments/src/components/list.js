import React , {Component} from 'react'
import Item from './item'

class List extends Component{


    addComment = () => {
        const comment = {
            name : this.refs.name.value.trim(),
            content : this.refs.content.value.trim()
        }
        if(comment.name === '' || comment.content === ''){
            alert(`两项都需要添加合法得内容`)
        }else{
            this.refs.name.value = ''
            this.refs.content.value = ''
            this.props.add(comment)
        }
    }

    render(){
        const {comments , remove} = this.props
        const item = comments.map( (comment , index) => {
            return <Item comment={comment} key={index} index={index} remove={remove}/>
        })
        const display = comments.length > 0 ? 'none' : 'block'

        return (
            <div className="container">
                <div className="col-md-4">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label>用户名</label>
                            <input type="text" className="form-control" placeholder="用户名" ref="name"/>
                        </div>
                        <div className="form-group">
                            <label>评论内容</label>
                            <textarea className="form-control" rows="6" placeholder="评论内容" ref="content"></textarea>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-8">
                    <h3 className="reply">评论回复：</h3>
                    <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                {item}
                </div>
            </div>
        )
    }
}
export default List