(function(win, doc) {
	'use strict';

	/*
	Vamos estruturar um pequeno app utilizando módulos.
	Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
	A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
	seguinte forma:
	- No início do arquivo, deverá ter as informações da sua empresa - nome e
	telefone (já vamos ver como isso vai ser feito)
	- Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
	um formulário para cadastro do carro, com os seguintes campos:
		- Imagem do carro (deverá aceitar uma URL)
		- Marca / Modelo
		- Ano
		- Placa
		- Cor
		- e um botão "Cadastrar"

	Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
	carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
	aparecer no final da tabela.

	Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
	empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
	Dê um nome para a empresa e um telefone fictício, preechendo essas informações
	no arquivo company.json que já está criado.

	Essas informações devem ser adicionadas no HTML via Ajax.

	Parte técnica:
	Separe o nosso módulo de DOM criado nas últimas aulas em
	um arquivo DOM.js.

	E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
	que será nomeado de "app".
	*/

	function app(){
		let $form = new DOM('[data-js="form"]')

		let cars = [];
		$form.on('submit', handleFormSubmit);

		
		function handleFormSubmit(e){
			e.preventDefault();

			let urlImage = doc.querySelector('[data-js="urlImage"]').value;
			let brand = doc.querySelector('[data-js="brand"]').value;
			let year = doc.querySelector('[data-js="year"]').value;
			let plaque = doc.querySelector('[data-js="plaque"]').value;
			let color = doc.querySelector('[data-js="color"]').value; 

			let obj = {
				urlImage: urlImage,
				brand: brand,
				year: year,
				plaque: plaque,
				color: color
			};

			cars.push(obj);

			addProductInnerHTML(obj);
		}

		function addProductInnerHTML(obj){

			let cards = document.querySelector('.cards');
			let divCard = doc.createElement('div');
			let img = doc.createElement('img');
			let divcontainer = doc.createElement('div');

			let brand = doc.createElement('p');
			brand.textContent = `Brand: ${obj.brand}`;
			divcontainer.appendChild(brand);

			let year = doc.createElement('p');
			year.textContent = `Year: ${obj.year}`;
			divcontainer.appendChild(year);

			let plaque = doc.createElement('p');
			plaque.textContent = `Plaque: ${obj.plaque}`;
			divcontainer.appendChild(plaque);

			let color = doc.createElement('p');
			color.textContent = `Color: ${obj.color}`;
			divcontainer.appendChild(color);
			
			img.src = obj.urlImage;
			divCard.className = "card";
			divcontainer.className = "container";

			divCard.appendChild(img);
			divCard.appendChild(divcontainer);
			cards.appendChild(divCard);
		}
	}

	app();

})(window, document);
