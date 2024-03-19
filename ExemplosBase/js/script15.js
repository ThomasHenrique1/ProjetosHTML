// JavaScript Document
let xhrDoc;
let xhr;

function criaObjetoXHR(){
    if (window.XMLHttpRequest) { 
        xhr = new XMLHttpRequest();
     }
     else {
        alert('A solicitação HTTP não poderá ser efetuada!');     
     }	
}

function carregaXML(){	
    url = "xml/menu.xml";
    xhr.open('GET', url, true); 
    xhr.onreadystatechange = processaRetorno; 
    xhr.responseType = 'document';
    xhr.withCredentials = true;
    xhr.send(null); 
}

function processaRetorno(){
	if (xhr.readyState == 4) {
    	if (xhr.status == 200) {			
            xhrDoc = xhr.response; 
			exibirMenu();
		}
	}
}

function exibirMenu() {
		
}

