import React , {Component} from 'react'
import { Card } from 'antd';
import './img.css'

class Img extends Component{
    render(){
        return (
            <div className="img">
                <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                    <div className="custom-image">
                        <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </div>
                    <div className="custom-card">
                        <h3>Europe Street beat</h3>
                        <p>www.instagram.com</p>
                    </div>
                </Card>
            </div>
        )
    }
}
export default Img