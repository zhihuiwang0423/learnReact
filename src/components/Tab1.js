import React, {Component} from 'react';

export default class AppComponent extends Component{
    constructor(props){
        super(props);
        this.state=({
            opacity: 1,
            fontSize: '12px',
            inputContent: '',
            count: 1,
            value: ''
        })
        this.countPlus = this.countPlus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    countPlus(){
        this.setState({
            count: this.state.count + 1
        })
    }
    handleChange(e){
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
        // this.refs.nameC.value= e.target.value
    }
    render(){
        
        return (
            <div>
                <input type="text" name="name" onChange = {this.handleChange}/><span ref="nameC">{this.state.value}</span>
                <button onClick={this.countPlus}>plus</button>
                <span>{this.state.count}</span>
                <div style={{opacity: this.state.opacity, fontSize: this.state.fontSize}}>React+webpack+ 46666666Es6从环境搭建到HEllo {this.props.name}</div>
            </div>
        )
    }
    componentWillMount() {
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                opacity: .5,
                fontSize: '50px'
            })
        })
    }
}