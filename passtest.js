//===========NEW FEATURE SCRIPT============\\
//O código foi comentado em português para faciltiar o entendimento!

const input = document.querySelector('#user-password');
const btn = document.querySelector('#btn-verificate');

input.addEventListener('input', ()=>{
    if(input.value != ''){
    btn.style.backgroundColor = '#3EB72B'
    btn.setAttribute('onclick', 'checkSecurity()')
} 
    else{
        btn.style.backgroundColor = 'grey';
        btn.removeAttribute('onclick')
    }
}) // Esse listener vai impedir que o usuário valide uma senha vazia. Ela é realizada toda vez que o usuário mexe no input


function checkSecurity(){
    const userPassword = document.querySelector('#user-password').value; // Captura o valor colocado no input
    const responseArea = document.querySelector('#response-area');

    let passwordValue = 0; // Esse vai ser o nível de qualificação da senha 


    const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const numbers = '1234567890'.split('');
    const symbols = '!@#$%¨&*(){}[]'.split('');
    //O split cria um array onde cada posição é um carater das strings

    function exist(item){
        return userPassword.includes(item) // verifica se o caracter existe dentro da senha
    }
    function verificate(array){
        if(array.some(exist) == true){ 
        passwordValue++
        // Basicamente o .some vai realizar a verificação pra cada elemento das listas de caracteres. Se o retorno for true, o nível de qualificação da senha sobe +1
    } 
}


    verificate(upperCaseAlphabet)
    verificate(numbers)
    verificate(symbols)
    //Aqui ele vai fazer a verificação de letras maiúsculas, números e simbolos

    if(passwordValue === 1 || passwordValue === 0){
        responseArea.innerHTML = '<h3>Sua senha é fraca!</h3>'
        setTimeout(()=>{
            responseArea.innerHTML += '<h4>Você deveria ter uma senha mais forte. Que tal utilizar nosso gerador? <a href="index.html">Clique aqui</a> e proteja melhor as suas contas'
        }, 1000)
        
    }
    else if(passwordValue == 2){
        responseArea.innerHTML = '<h3>Sua senha é mediana.</h3>'
        setTimeout(()=>{
            responseArea.innerHTML += '<h4>Você poderia ter uma senha melhor ainda. Você pode conseguir isso usando nosso gerador. <a href="index.html">Clique aqui</a> e tenha mais segurança em suas contas'
        }, 1000)
    }
    else if(passwordValue == 3){
        console.log('Congratulations! Your passowrd is safety')
        responseArea.innerHTML = '<h3>Parabens! Sua senha é segura.</h3>'

    }

}


// Fim.
