import React from 'react'
import {Button,Form, Col, Container, Row,Jumbotron,Alert,Tab,ListGroup,Badge,Card} from "react-bootstrap";
class Preview extends React.Component{

constructor(props){
    super(props)
    this.state={
        elements:[]
    }

}

render() {
    return(
        <>
                <Col lg={12} xs={12} md={12}>
                     <Jumbotron className="jumbo">
                         <h4 className="display-4">{this.props.data.title}</h4>

                        {this.props.data.elements.map(element =>
                            <Card style={{ backgroundColor:this.props.data.color,width: this.props.data.width+'%',height:this.props.data.height+'%'}}>
                              <Row>
                                   <Col lg={12} md={12} xs={12}><span className="text-dark"><Badge variant="info">Input Name: </Badge>{element.name}</span></Col>
                                    { element.type ==='range'   ?

                                    <Col lg={12} md={12} xs={12}><input type="range"  min={element.min} max={element.max}/></Col>
                                    : element.type ==='checkbox' ?
                                            <Col lg={12} md={12} xs={12}>Checked:   <input type="checkbox" value={element.checked} checked={element.checked}/></Col>
                                    : element.type ==='submit' ?
                                            <Col  lg={3} md={3} xs={3}>  <input type="submit" value={element.name}/></Col>
                                    : element.type ==='color' ?
                                            <Col  lg={3} md={3} xs={3}>  <input type="color"/></Col>
                                    :
                                          <Col lg={12} md={12} xs={12}> <Form.Control  name={element.name} value={element.value} type={element.type} placeholder={element.placeholder} /></Col>}

                                {
                                    element.required ?
                                        <Col lg={12} md={12} xs={12}>
                                            <Alert variant="warning">
                                                Gerekli? :
                                                <input name="required" value={element.required} type="checkbox" checked={element.required}/>
                                            </Alert>
                                        </Col>
                                    :<></>
                                }

                                <Col xs={12} md={12} lg={12}>
                                    <label>
                                        <Badge pill variant="info">
                                            Input Type
                                        </Badge>
                                        <select name="type" value={element.type}>
                                            <option  selected value={element.type}>{element.type}</option>
                                        </select>
                                    </label>
                                </Col>
                              </Row>
                            </Card>
                        )}
                     </Jumbotron>
                </Col>

                <Col lg={12} md={12} xs={12}>
                    <Alert variant="light">
                        <div>Genişlik: %{this.props.data.width}</div>
                        <div>Yükseklik: %{this.props.data.height}</div>
                    </Alert>

                        {
                            this.props.data.chapta ?
                                <Alert variant="success">
                                    Doğrulama Etkin
                                </Alert>
                                :<></>
                        }


                </Col>
                <Col xs={12} lg={12} md={12}>
                    <Alert variant="light">
                        <div>Form Action: {this.props.data.formaction}</div>
                    </Alert>
                </Col>



        </>
    )
}


}
export default Preview