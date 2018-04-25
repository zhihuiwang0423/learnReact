import React, {Component} from 'react';

export default class AppComponent extends Component{
    constructor(props){
        super(props);
        this.state=({
            opacity: 1,
            fontSize: '12px'
        })
    }
    render(){
        return (
            <div style={{opacity: this.state.opacity, fontSize: this.state.fontSize}}>React+webpack+ 46666666Es6从环境搭建到HEllo {this.props.name}</div>
        )
    }
    componentWillMount() {
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                opacity: .5,
                fontSize: '90px'
            })
        })
    }
}