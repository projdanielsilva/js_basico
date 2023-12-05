$(document).ready(function () {
    // Adicionando máscara ao campo de telefone
    $("#telefone").mask("(00)00000-0000");

    // Adicionando máscara ao campo de CPF
    $("#cpf").mask("000.000.000-00");

    // Adicionando máscara ao campo de data de nascimento
    $("#dataNascimento").mask("00/00/0000");
});

function validarFormulario() {

const nome = $("#nome").val();

const email = $("#email").val();

const dataNascimento = $("#dataNascimento").val();

const telefone = $("#telefone").val();

const cpf = $("#cpf").val();


    if (nome === "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }

    if (email === "" || validarEmail(email) ) {
        alert("Por favor, preencha o campo Email assim '@seunome'.");
        return false;
    }

    //  if (!validarEmail(email)) {
    //      alert("Email inválido. Por favor, insira um email válido.");
    //     return false;
    //  }

    if (dataNascimento === "" || !validardata(dataNascimento)) {
        alert("Por favor, preencha o campo data de nascimento.");
        return false;
    }
    

    if (telefone === "" || !validarTelefone(telefone)) {
        alert("Por favor, preencha o campo Telefone.");
        return false;
    }

    if (cpf === "" || !validarCPF(cpf)) {
        alert("CPF inválido. Por favor, insira um CPF válido.");
        return false;
    }

    return true;
}



function validarEmail(email) {
    // Verifica se o email está no formato correto
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarCPF(cpf) {
    // Verifica se o CPF está no formato correto
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

function validardata (dataNascimento){
    // Verifica se a data de nascimento está no formato correto (DD/MM/YYYY)
    const regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regexData.test(dataNascimento);
}

function validarTelefone(telefone) {
    // Verifica se o telefone está no formato correto
    return /^\(\d{2}\)\d{5}-\d{4}$/.test(telefone);
}

function redirecionar() {
    if (validarFormulario()) {

        // se o formulário for válido, leva para outra página.

        window.location.href = 'index.html';
    }
}

/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
