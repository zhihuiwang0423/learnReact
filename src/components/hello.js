import React from 'react';
export default class Hello extends React.Component{
    render(){
        return (
            <div class="letter">{this.props.children}</div>
        )
    }
}