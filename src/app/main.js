import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppComponent from '../components/Tab1';
import Hello from '../components/hello';
import '../assets/style/common.css';
ReactDOM.render(
<div>
    <Hello>W</Hello>
    <Hello>Z</Hello>
    <Hello>H</Hello>
    
    <AppComponent name="zhihui"/>
</div>
, document.getElementById('content'));