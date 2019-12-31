
	fetch('https://veritabani-odev.s3.amazonaws.com/k4tfjvos.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
         if(window.location.hostname && window.location.href !== myJson.url){
               alert('Site farklı')
         }else{


       //divi oluştur
       var div = document.createElement('div')
       div.style.borderRadius='5px'

       div.style.backgroundColor=myJson.style.color
       div.style.padding='20px'
       div.style.width=myJson.style.width+'%'-10;
       div.style.height=myJson.style.height+'%'


       div.style.fontFamily='Arial, Helvetica, sans-serif'
       div.style.fontSize='calc(14px + 7.5 * ((50vw - 800px) / 480))'
       div.onmouseover = function (){
        this.style.boxShadow='10px 10px 40px -20px rgba(0,0,0,0.75)'
       }
       div.onmouseleave = function (){
        this.style.boxShadow='12px 21px 124px -70px rgba(0,0,0,0.75)'
       }
       //Formu oluştur
       var form =document.createElement('form')
       form.style.textAlign='left'
       form.onsubmit = function() {
        return post();
        }
        //Form aksiyonu ekle
        //Form başlığı
        var title = document.createElement('h1');
        title.innerHTML=myJson.title
        title.style.fontFamily='Impact, Charcoal, sans-serif'


        //row ekle
        var row = document.createElement('div');
        row.setAttribute('class','row')
        row.setAttribute('id','row');
        row.style.display='table';
        row.style.clear='both';
        row.style.width='100%'
        div.appendChild(title)
        myJson.elements.map(function(obj) {
            //Her bir eleman için bir column oluştur
            var col25 = document.createElement('div');
            var col75 = document.createElement('div');
            col25.style.width='25%'
            col25.style.float='left'
            col25.style.marginTop='6px'
            col75.style.width='75%'
            col75.style.float='right'
            col75.style.marginTop='6px'

            //Elemanları oluştur
            var input = document.createElement("input");
           //Inputu yapılandır
           if(obj.required){
             input.setAttribute('required','true')
           }
           //Obje color'sa
             if      (obj.type === 'color'){

            //Obje file'sa
           } else if (obj.type === 'file') {
            input.style.width='100%'

            //obje botunsa
           } else if (obj.type === 'submit'){
              input.style.position='relative'
              input.style.buttom='0';
              input.style.width='20%';
              input.style.height='40px';
              input.style.minWidth='85px'
              input.style.maxWidth='150px'
              input.style.marginLeft='%'
              input.style.marginTop='30px'
              input.style.border='0px solid'
              input.style.borderRadius='5px'
              input.style.backgroundColor='#03a9f4'
              input.style.fontFamily='Open Sans, sans-serif'
              input.style.textAlign='center'
              input.style.fontSize='18px'
              input.style.textTransform='capitalize'
              input.style.boxShadow='13px 13px 45px -13px rgba(0,0,0,0.75)'
              input.style.color='#fff'
              input.style.zIndex='3'
              input.setAttribute('class','submit')
            input.setAttribute('type','button')
            input.onmouseover =function(){
              this.style.backgroundColor='#1599D3'
              input.style.boxShadow='20px 22px 50px -20px rgba(0,0,0,0.75)'
            }
            input.onmouseleave=function(){
              input.style.backgroundColor='#15D3BA'
              input.style.boxShadow='13px 13px 45px -13px rgba(0,0,0,0.75)'
            }
           } else if (obj.type === 'checkbox'){
              input.style.margin='20px 6px'
              input.style.padding='10px 20px'

           } else if (obj.type === 'date'){
             input.style.margin='20px 0px'

           } else if (obj.type === 'range'){

             input.setAttribute('maxrange',obj.max);
             input.setAttribute('minrange',obj.min)
           }
            else{
            input.style.width='100%'
            input.style.padding='12px 20px'
            input.style.margin='10px 0'
            input.style.background='#fff'
            input.style.textTransform='capitalize'
            input.style.float='center'
            input.style.display='inline-block'
            input.style.border='none'
            input.style.borderRadius='4px'
            input.style.boxSizing='border-box'
            input.style.boxShadow=' 1px 1px 20px rgba(0,0,0,.2)'
            input.onmouseover = function (){
              this.style.border='cubic-bezier(0.68, -0.55, 0.265, 1.55)'
            }
            input.onmouseleave = function(){
              this.style.border='none'
            }

           }

           //Elemanları ayarla
            input.setAttribute('placeholder',obj.placeholder)
            if(obj.type !== 'submit'){
              input.setAttribute('type',obj.type)
            }else{
              input.setAttribute('type','submit')

            }

            input.setAttribute('id',obj.name)
            input.setAttribute('name',obj.name)
            //Inputları column'lara göm
           if(obj.type !== 'submit'){
            var t = document.createElement('h1');
            t.style.marginTop='15px'
            t.innerHTML=obj.name
            col25.appendChild(t);
            col75.appendChild(input);
           }else{
             row.appendChild(input)
           }


            //Columnları row'lara göm
            row.appendChild(col75)
            row.appendChild(col25)
        })

        form.appendChild(row)
        div.appendChild(form)
        if(myJson.renderid && document.getElementById(myJson.renderid)){
          console.log(myJson.renderid)
          var render=document.getElementById(myJson.renderid)
          render.appendChild(div)
        }else{
          document.body.appendChild(div);
        }
        function post() {
        var els = document.querySelectorAll('input')

        let data=[]
        els.forEach((e,index) =>{
          var s ={
            name:'',
            value:null,
            index:0
          }
        console.log(e.value);
        console.log(index)
        s.name=e.name;
        s.value=e.value
        s.index=index
        data[index]=s;

        })
        console.log('data:.......: ',data)
        fetch(myJson.formaction, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(response =>{
          console.log('Success:', JSON.stringify(response))
          if(response){
            var p = document.createElement('h5');
            p.style.fontFamily='Impact, Charcoal, sans-serif'
            p.style.fontSize='18px'
            p.innerHTML='Form Gönderildi'
          }else{
            p.innerHTML='Bir hata oldu'
          }
          form.appendChild(p)

        })
        .catch(error => console.log('Error:', error));
        return false;
      }
      }
      });



