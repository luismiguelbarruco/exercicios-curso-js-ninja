/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

(function(){
    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    let pessoa = {
        name: 'Luis Miguel',
        lastName: 'Barruco Amorim',
        age: 26
    };

    console.log( 'Propriedades de "person":' );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log(pessoa);

    /*
    Crie um array vazio chamado `books`.
    */
    let books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push({name: 'Livro 1', pages: 250});
    books.push({name: 'Livro 2', pages: 350});
    books.push({name: 'Livro 3', pages: 450});

    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */
    books.forEach(book => {
        console.log(book);
    });

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log(books[books.length -1]);
    books.pop();

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    books.forEach(book => {
        console.log(book);
    });

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    // ?
    console.log( '\nLivros em formato string:' );
    let stringBooks = JSON.stringify(books);

    /*
    Mostre os livros nesse formato no console:
    */
    console.log(stringBooks);

    /*
    Converta os livros novamente para objeto.
    */
    let jsonBooks = JSON.parse(stringBooks);
    console.log( '\nAgora os livros são objetos novamente:' );
    console.log(jsonBooks);

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    books.forEach(book => {
        console.log(`[${book.name}]: [${book.pages}]`);
    });

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    let myName = [ "L", "u", "i", "s", " ", "M", "i", "g", "u", "e", "l"];
    console.log( '\nMeu nome é:' );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''));

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myName.reverse(myName.join('')).join(''));

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
   console.log(myName.reverse().sort());
})();