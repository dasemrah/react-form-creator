import React, { Component } from 'react';
import { Form,Input,InputGroup,InputGroupAddon,Button,Container,Row,Col,Alert,Jumbotron } from 'react-bootstrap';
import ReactDOM from 'react-dom';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import layout from '../layout/Form'
//Preview oluştur
const lay            = React.createElement(layout,{});


//Dış iskeleti ekle
ReactDOM.render(lay,
    document.getElementById('index')
    );
///Form yapısını ekle


class index extends Component{
    constructor(props){
        super(props)
        this.state={
            elements:[],
        }
    }
   render() {
        return (
            <>
                </>
        )
   }


}
export default index