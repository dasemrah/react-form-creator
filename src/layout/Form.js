import {Button,Form, Col, Container, Row,Jumbotron,Alert,Tab,ListGroup,Badge,Card} from "react-bootstrap";
import JSONFormatter from 'json-formatter-js'
import React from "react";
import ReactDOM from 'react-dom';
import Header from "./Header";
import Preview from "./preview";

import Footer from "./Footer";

import uniqid from "uniqid";
import AWS from 'aws-sdk';

let location='';
let scripturl='';
let scriptfile='';
const s3 = new AWS.S3({
	accessKeyId:'',
	secretAccessKey:''
});

const Prew = (props) =>{
    return(
        <Preview
        data={props}
        />
    )
}
const uploadData = (data) => {
	let buffData = Buffer.from(JSON.stringify(data));
	console.log('data'+buffData)
	const params = {
		Bucket:'veritabani-odev',
		Key: uniqid()+'.json',
		Body: buffData
	};
	s3.upload(params, function (s3Err, data) {
		if (s3Err) throw s3Err
		console.log(`data uploaded successfully at ${data.Location}`);
		location = data.Location;
		console.log('Location : ...................'+location)
		scriptfile= 'fetch("'+data.Location+'").then(function(e){return e.json()}).then(function(e){if(window.location.hostname&&window.location.href!==e.url)alert("Site farklı");else{var t=document.createElement("div");t.style.borderRadius="5px",t.style.backgroundColor=e.style.color,t.style.padding="20px",t.style.width=e.style.width+"%"-10,t.style.height=e.style.height+"%",t.style.fontFamily="Arial, Helvetica, sans-serif",t.style.fontSize="calc(14px + 7.5 * ((50vw - 800px) / 480))",t.onmouseover=function(){this.style.boxShadow="10px 10px 40px -20px rgba(0,0,0,0.75)"},t.onmouseleave=function(){this.style.boxShadow="12px 21px 124px -70px rgba(0,0,0,0.75)"};var n=document.createElement("form");n.style.textAlign="left",n.onsubmit=function(){return function(){var t=document.querySelectorAll("input");let l=[];return t.forEach((e,t)=>{var n={name:"",value:null,index:0};console.log(e.value),console.log(t),n.name=e.name,n.value=e.value,n.index=t,l[t]=n}),console.log("data:.......: ",l),fetch(e.formaction,{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{if(console.log("Success:",JSON.stringify(e)),e){var t=document.createElement("h5");t.style.fontFamily="Impact, Charcoal, sans-serif",t.style.fontSize="18px",t.innerHTML="Form Gönderildi"}else t.innerHTML="Bir hata oldu";n.appendChild(t)}).catch(e=>console.log("Error:",e)),!1}()};var l=document.createElement("h1");l.innerHTML=e.title,l.style.fontFamily="Impact, Charcoal, sans-serif";var o=document.createElement("div");if(o.setAttribute("class","row"),o.setAttribute("id","row"),o.style.display="table",o.style.clear="both",o.style.width="100%",t.appendChild(l),e.elements.map(function(e){var t=document.createElement("div"),n=document.createElement("div");t.style.width="25%",t.style.float="left",t.style.marginTop="6px",n.style.width="75%",n.style.float="right",n.style.marginTop="6px";var l=document.createElement("input");if(e.required&&l.setAttribute("required","true"),"color"===e.type||("file"===e.type?l.style.width="100%":"submit"===e.type?(l.style.position="relative",l.style.buttom="0",l.style.width="20%",l.style.height="40px",l.style.minWidth="85px",l.style.maxWidth="150px",l.style.marginLeft="%",l.style.marginTop="30px",l.style.border="0px solid",l.style.borderRadius="5px",l.style.backgroundColor="#03a9f4",l.style.fontFamily="Open Sans, sans-serif",l.style.textAlign="center",l.style.fontSize="18px",l.style.textTransform="capitalize",l.style.boxShadow="13px 13px 45px -13px rgba(0,0,0,0.75)",l.style.color="#fff",l.style.zIndex="3",l.setAttribute("class","submit"),l.setAttribute("type","button"),l.onmouseover=function(){this.style.backgroundColor="#1599D3",l.style.boxShadow="20px 22px 50px -20px rgba(0,0,0,0.75)"},l.onmouseleave=function(){l.style.backgroundColor="#15D3BA",l.style.boxShadow="13px 13px 45px -13px rgba(0,0,0,0.75)"}):"checkbox"===e.type?(l.style.margin="20px 6px",l.style.padding="10px 20px"):"date"===e.type?l.style.margin="20px 0px":"range"===e.type?(l.setAttribute("maxrange",e.max),l.setAttribute("minrange",e.min)):(l.style.width="100%",l.style.padding="12px 20px",l.style.margin="10px 0",l.style.background="#fff",l.style.textTransform="capitalize",l.style.float="center",l.style.display="inline-block",l.style.border="none",l.style.borderRadius="4px",l.style.boxSizing="border-box",l.style.boxShadow=" 1px 1px 20px rgba(0,0,0,.2)",l.onmouseover=function(){this.style.border="cubic-bezier(0.68, -0.55, 0.265, 1.55)"},l.onmouseleave=function(){this.style.border="none"})),l.setAttribute("placeholder",e.placeholder),"submit"!==e.type?l.setAttribute("type",e.type):l.setAttribute("type","submit"),l.setAttribute("id",e.name),l.setAttribute("name",e.name),"submit"!==e.type){var i=document.createElement("h1");i.style.marginTop="15px",i.innerHTML=e.name,t.appendChild(i),n.appendChild(l)}else o.appendChild(l);o.appendChild(n),o.appendChild(t)}),n.appendChild(o),t.appendChild(n),e.renderid&&document.getElementById(e.renderid))console.log(e.renderid),document.getElementById(e.renderid).appendChild(t);else document.body.appendChild(t)}});'
		uploadFile(scriptfile);
	});
};
const uploadFile = (data) => {
	let buffData = Buffer.from(data);
	console.log('script :.......'+buffData)
	console.log(data)
	const params = {
		Bucket:'veritabani-odev',
		Key: uniqid()+'.js',
		Body: buffData
	};
	s3.upload(params, function (s3Err, data) {
		if (s3Err) throw s3Err
		console.log(`File uploaded successfully at ${data.Location}`);
		console.log('script:........'+scripturl)
		scripturl = data.Location;
		const deneme = React.createElement('pre',{},

			'<script'+ ' src="'+scripturl+'"></script>');
		ReactDOM.render(deneme,
			document.getElementById('script'))
	});
};
class layout extends React.Component{
    constructor(props){
        super(props)
        this.state={
                elements    : [],
                color       : '',
                formaction  : '',
                width       : '',
                height      : '',
                min         : '',
                max         : '',
                checked     : false,
                chapta      : false,
                type        : 'text',
                placeholder : '',
                classname   : '',
                name        : '',
                required    : false,
                url         : '',
                renderid    : '',
                title       : ''
        };


        this.handleChange=this.handleChange.bind(this)
        this.plusEvent=this.plusEvent.bind(this)
        this.formatEvent=this.formatEvent.bind(this)
    }

    componentDidMount() {

    }

	plusEvent (e){
        e.preventDefault()
        const element={
            type        :this.state.type,
            placeholder :this.state.placeholder,
            classname   :this.state.className,
            name        :this.state.name,
            required    :this.state.required,
            min         :this.state.min,
            max         :this.state.max,
            checked     :this.state.checked
        }
        this.state.elements.push(element);

        this.setState({type:'text',placeholder:'',classname:'',name:'',required:false})

    }
    formatEvent(){
    	//////////JSon çıktısı alma
        let nesne={
            elements:this.state.elements,
            style:{
                color    :this.state.color,
                width    :this.state.width,
                height   :this.state.height,
            },
            chapta       :this.state.chapta,
            formaction   :this.state.formaction,
            url          :this.state.url,
            renderid     :this.state.renderid,
            title        :this.state.title
        }
         uploadData(nesne)





        var formatter = new JSONFormatter(nesne);
        document.getElementById('format').appendChild(formatter.render());



    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
                [name]:value
        });
    }


    render() {
        return(
      <div className="App">
       <Header/>
        <Jumbotron className="App">
            <Alert variant="info">"Eleman Ekle" bölümünde elemanları seçip ekleyiniz. Her eklediğiniz eleman ya da yaptığınız her güncelleme eş zamanlı olarak
                "Ön İzleme" kısmında yer alacak. Tüm işlemleri bitirdikten sonra aşağıdaki "Scripti Oluştur" butonuna tıklayın. Oluşan script'i formun yüklenmesini
                istediğiniz web sayfasında <pre> '&lt;body&gt;&lt;/body&gt;'  tag'leri arasına yapıştırın.</pre></Alert>
            <Container>
                <Row>

                    <Col lg="6" xs="12" md="12" >
                        <div className="kart">
                        <span className="display-4 text-info">Ön İzleme</span>
                        <Preview
                        data={this.state}
                        />
                        </div>
                    </Col>
                    <Col lg="6" xs="12" md="12" >
                        <div className="kart">


                        <span className="display-4 text-warning">Eleman Ekle</span>
                        <Card  className="siyah">

                                        <Tab.Container className="siyah" id="list-group-tabs-example" defaultActiveKey="#link1">
                                            <Row  className="siyah">
                                                <Col sm={4}>
                                                    <ListGroup  className="siyah">
                                                        <ListGroup.Item action href="#link1">
                                                          Eleman Ekle
                                                        </ListGroup.Item>
                                                        <ListGroup.Item action href="#link2">
                                                           Özellik Ekle
                                                        </ListGroup.Item>
                                                        <ListGroup.Item action href="#link3">
                                                            Style Ekle
                                                        </ListGroup.Item>
                                                        <ListGroup.Item action href="#link4">
                                                            Form Action
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Col>
                                                <Col sm={8}>
                                                    <Tab.Content  className="siyah">
                                                        <Tab.Pane eventKey="#link1"  className="siyah">
                                                            <Jumbotron  className="siyah">
                                                                <Col lg="12" xs="12" md="12"><Alert variant="dark">Input Ekle</Alert></Col>
                                                                <Col>
                                                                    <label>
                                                                        <Badge pill variant="info">
                                                                            Input Tipini Seç
                                                                        </Badge>
                                                                        <select name="type" value={this.state.type} onChange={this.handleChange}>
                                                                            <option  value="text">Text</option>
                                                                            <option value="number">Number</option>
                                                                            <option value="email">E-Mail</option>
                                                                            <option value="password">Password</option>
                                                                            <option value="submit">Submit Button</option>
                                                                            <option value="checkbox">Checkbox</option>
                                                                            <option value="color">Color</option>
                                                                            <option value="date">Date</option>
                                                                            <option value="file">File</option>
                                                                            <option value="radio">Radio</option>
                                                                            <option value="range">Range</option>
                                                                        </select>
                                                                    </label>

                                                                </Col>

                                                                {
                                                                    this.state.type ==='range' ?
                                                                        <>
                                                                            <Col> <Form.Control onChange={this.handleChange} name="name" value={this.state.name} type="text" placeholder="İsmini Gir" /></Col>
                                                                            <Col> <Form.Control onChange={this.handleChange} name="min" value={this.state.min} type="number" placeholder="Min Range" /></Col>
                                                                            <Col> <Form.Control onChange={this.handleChange} name="max" value={this.state.max} type="number" placeholder="Max Range" /></Col>
                                                                        </>
                                                                        : this.state.type ==='date' ?
                                                                             <Col> <Form.Control onChange={this.handleChange} name="name" value={this.state.name} type="text" placeholder="İsmini Gir" /></Col>
                                                                        : this.state.type ==='color' ?
                                                                             <Col> <Form.Control onChange={this.handleChange} name="name" value={this.state.name} type="text" placeholder="İsmini Gir" /></Col>
                                                                        : this.state.type ==='submit' ?
                                                                             <Col> <Form.Control onChange={this.handleChange} name="name" value={this.state.name} type="text" placeholder="Butonun İsmini Gir" /></Col>
                                                                        : this.state.type ==='file'  ?
                                                                             <Col> <Form.Control onChange={this.handleChange} name="name" value={this.state.name} type="text" placeholder="Açıklama Gir" /></Col>
                                                                        : this.state.type ==='checkbox' ?
                                                                            <>
                                                                              <Col> <Form.Control onChange={this.handleChange} name="name" value={this.state.name} type="text" placeholder="İsmini Gir" /></Col>
                                                                               <span>Checked ?</span>
                                                                              <Col><Form.Control onChange={this.handleChange} type="checkbox" name="checked" value={this.state.checked}/></Col>
                                                                            </>
                                                                         :
                                                                        <>
                                                                            <Col> <Form.Control onChange={this.handleChange} name="name" value={this.state.name} type="text" placeholder="İsmini Gir" /></Col>
                                                                            <Col> <Form.Control onChange={this.handleChange} name="placeholder" value={this.state.placeholder} type="text" placeholder="Place Holder Gir" /></Col>

                                                                        </>
                                                                }
                                                                {
                                                                    this.state.type !=='submit' ?
                                                                        <Col> <Alert variant="warning">
                                                                            Gerekli? :
                                                                            <input
                                                                                name="required"
                                                                                value="true"
                                                                                type="checkbox"
                                                                                checked={this.state.required}
                                                                                onChange={this.handleChange} />
                                                                        </Alert>
                                                                        </Col>
                                                                       :<></>
                                                                }
                                                                <Col x="12" md="12" lg="12"> <Button onClick={this.plusEvent} variant="warning" type="submit">Ekle</Button>
                                                                    <Alert variant="info">Yukarıdan elemanları, tiplerini seçip gerekli bilgileri girerek ekleyin. 'Submit Button' elemanını en son eklemeniz önerilir.</Alert>
                                                                </Col>

                                                            </Jumbotron>

                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="#link2">
                                                            <Jumbotron className="jumbo">
                                                                <Col> <Alert variant="warning">
                                                                    Chapta Gerekli ? :
                                                                    <input
                                                                        name="chapta"
                                                                        value="true"
                                                                        type="checkbox"
                                                                        checked={this.state.chapta}
                                                                        onChange={this.handleChange} />
                                                                </Alert>
                                                                </Col>
                                                                <Col> <Form.Control onChange={this.handleChange} name="url" value={this.state.url} type="text" placeholder="Formun çalışacağı website" />   </Col>
                                                                     <Alert variant="info">Formun çalışacağı web sayfasını yazın. (Eğer oluşan script farklı bir alan adındaki web sayfasına yazılırsa çalışmaması için bir çeşit güvenlik önlemi)</Alert>
                                                                <Col>
                                                                    <Form.Control onChange={this.handleChange} name="renderid" value={this.state.renderid} type="text" placeholder="Render id" />
                                                                    <Alert variant="success">Script sitede hangi alanda oluşacak ise o alandaki div'in id'sini yazın. Herhangi bir 'id' girilmezse rastgele bir alanda oluşabilir.</Alert>
                                                                </Col>
                                                                <Col>
                                                                    <Form.Control onChange={this.handleChange} name="title" value={this.state.title} type="text" placeholder="Form Başlığı" />
                                                                    <Alert variant ="dark">Form ne ile ilgili?</Alert>
                                                                </Col>

                                                            </Jumbotron>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="#link3">
                                                            <Jumbotron className="jumbo">

                                                                <label>
                                                                    <Badge pill variant="info">
                                                                       Renk Seç
                                                                    </Badge>
                                                                    <Form.Control name="color" value={this.state.color} onChange={this.handleChange} type="color"/>

                                                                </label>
                                                                <Col> <Form.Control onChange={this.handleChange} name="height" value={this.state.height} type="number" placeholder="Form Yüksekliği" /></Col>
                                                                <Col> <Form.Control onChange={this.handleChange} name="width" value={this.state.width} type="number" placeholder="Form Genişliği" />
                                                                  <Alert variant="info">Uzunluk ve genişlik '%' cinsinden alınıyor.</Alert>
                                                                </Col>
                                                                <Col> <textarea onChange={this.handleChange} name="custom" value={this.state.custom} rows="10" cols="30"  placeholder="Custom CSS Ekle" /></Col>

                                                            </Jumbotron>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="#link4">
                                                            <Jumbotron className="jumbo">
                                                                <Alert variant="alert-danger">
                                                                  Form Action Gir
                                                                </Alert>
                                                                <Col>
                                                                    <Form.Control value={this.state.formaction} onChange={this.handleChange} name="formaction" placeholder="https://www.alanadi.com/post" type="text"/>
                                                                    <Alert variant="info">Form submit olduktan sonra data'ların gönderileceği adres.(Data 'json' olarak herhangi bir 'headers' kullanmadan gönderiliyor.)</Alert>
                                                                </Col>
                                                            </Jumbotron>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Tab.Container>
                        </Card>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={12}>
	                    <Col>
		                    <Button variant="danger" onClick={this.formatEvent} >Scripti Oluştur</Button>
	                    </Col>
                        <Col>
	                        <Jumbotron className="jumbo">
		                       <Alert variant="dark"><div id="script"></div> </Alert>
		                        <Alert variant="light">   <div id="format"></div> <div id="create"></div> </Alert>

	                        </Jumbotron>

                        </Col>
	                   <Col>

	                   </Col>




                    </Col>
                </Row>
            </Container>
        </Jumbotron>
          <Footer/>

      </div>
        )
    }
}

export default layout
