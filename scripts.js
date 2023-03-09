var listaFilmes = [ "https://m.media-amazon.com/images/M/MV5BMTU4Mzk3ODIyOF5BMl5BanBnXkFtZTgwODgyNzk2NjE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjAxMTI1Njk3OF5BMl5BanBnXkFtZTgwNjkzODk4NTE@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZTZkMTY4N2MtODI5Mi00ZDA0LTg3NmUtZDkwNTAxZGY1MDliXkEyXkFqcGdeQXVyMjU5OTg5NDc@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMGZhNDhmYTktYTM4YS00NDViLTllYTMtZjQ1MGZiNjc3YzlhXkEyXkFqcGdeQXVyNTIyODk4NTg@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNWVmNWQ2OTQtNzJlNC00ZmQwLTg4ZTktZTNmM2IxZTlkOGM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BY2JhMTJmYjYtNTVkYi00OWE3LWJlMjEtOWI4MTFkMjJhMmQ3XkEyXkFqcGdeQXVyNzY1NDgwNjQ@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BM2ZiOGJiZWUtNDEyNi00NmFiLTgxYmMtODI5ZTQyODA3YjNhXkEyXkFqcGdeQXVyNjY2Mjk1OTE@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BYzQxZmRiMDgtNDg4ZS00ODE2LTlkZGMtYWNkZmE4ZjJjNzMzXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNTYzMmFmNjYtYzJmMy00ZGViLTlkNjItYjMwYzA3ZjRkZTBkXkEyXkFqcGdeQXVyNjI1Mjk4MTg@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BYjlhNWE3MjMtNTE4My00YzkwLTgyZWYtODkzZDRjNzA1YzliXkEyXkFqcGdeQXVyNjI1Mjk4MTg@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMjU3ZTgzMjQtZDBhMS00ZmRlLTliM2ItOTE1MmEzOWRkZTIzXkEyXkFqcGdeQXVyNzY1NDgwNjQ@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BY2VjYWFiZmYtZWVlYi00Y2RmLWFjNjktOGFhMDkyN2NlN2Q3XkEyXkFqcGdeQXVyMDUyOTUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNjRkOGEwYTUtY2E5Yy00ODg4LTk2ZWItY2IyMzUxOGVhMTM1XkEyXkFqcGdeQXVyNDk0MDg4NDk@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNDhiMDQzYzYtNWVlMC00YzRkLTg4ZGItN2M2MGNjOTllNWVmXkEyXkFqcGdeQXVyNjI1Mjk4MTg@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMWFmMDgxMzctYzYyMy00YTNmLWJhMjUtMmUwODRkYmFmYmNhXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNjAzZDA2MWItZDdjMi00NTBlLTg5OTItYWQ1YTA1NGNiMGVhL2ltYWdlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"]

/* array-Usado para armazenar vários valores em uma variável */
var listaNomes =["Pinocchio","Fantasia","Swiss Family Robinson","The Reluctant Dragon","Dumbo","Bambi","Victory Through Air Power","Saludos Amigos","The Three Caballeros","Make Mine Music","Song of the South","Fun and Fancy Free","Miracle on 34th Street","Melody Time","So Dear to My Heart","The Adventures of Ichabod and Mr. Toad"]

var listaString = '';

/* For - repetição - 3 parametros - inicialização, condição,incrementação  */
for(var i=0; i<listaNomes.length; i++){
  if(listaString == '' ){
    listaString = listaNomes[i];
  }else{
    listaString = listaString + ', ' + listaNomes[i];
  }
}

var escolha = prompt('Qual Filme Disney da decada de 40 gostaria de Adicionar?' + " " + listaString);

var filmeEncontrado = false;

for(var i=0; i<listaNomes.length; i++){  /* For - repetição - 3 parametros - inicialização, condição,incrementação  */
  if(escolha.toUpperCase() == listaNomes[i].toUpperCase()){ 
    /* touppercase - Converte a string em letras maiúsculas*/
    document.write('<p>'+ listaNomes[i] + '</p>');
    document.write("<img src=" + listaFilmes[i] + ">");
    filmeEncontrado = true;
  }
}

if (filmeEncontrado == false){
  alert('Filme não encontrado,verificar escrita');
}
