(function(win, doc){
	'use strict';

	function app(){
		let $formCep = new DOM('[data-js="form-cep"]');
		let $inputCep = new DOM('[data-js="input-cep"]');
		let ajax = new XMLHttpRequest();
	
		$formCep.on('submit', handleFormSubmit);
	
		function handleFormSubmit(e){
			e.preventDefault();
	
			ajax.open('GET', getClearUrl());
			ajax.send();
			ajax.addEventListener('readystatechange', handleStatechange)
		}
	
		function handleStatechange(){
			if(isRequestOk())
				fillCEPFields();
		}
	
		function parseData() {
			let result;
			
			try {
				result = JSON.parse(ajax.responseText);
			}
			catch(e) {
				result = null;
			}
	
			return result;
		}
	
		function fillCEPFields(){
			let data = parseData();
	
			if(data.status !== 200){
				DOM.appendTextToField('[data-js="error"]', data.message);
				return;
			}
	
			DOM.appendTextToField('[data-js="field-adress"]', data.address);
			DOM.appendTextToField('[data-js="field-district"]', data.district);
			DOM.appendTextToField('[data-js="field-city"]', data.city);
			DOM.appendTextToField('[data-js="field-state"]', data.state);
		}
	
		let isRequestOk = () => ajax.readyState === 4 && ajax.status === 200 ? true : false;
	
		let getClearUrl = () => `http://apps.widenet.com.br/busca-cep/api/cep.json?code=${getCEP()}`;
	
		let getCEP = () => $inputCep.get()[0].value.replace(/\D+/g, '');
	};

	app();
})(window, document);