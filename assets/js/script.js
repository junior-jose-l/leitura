
// seleciona o icone de tema
const themeIcon = document.getElementById("theme-icon");

//seleciona o arquivo css do tema escuro
const darkTheme = document.getElementById("dark-theme");


//detecta um clique no icone de tema e com isso define se o tema escuro esta ativo ou desativo
themeIcon.addEventListener('click',() => {
    darkTheme.disabled=!darkTheme.disabled;
    if (darkTheme.disabled) {
        themeIcon.innerHTML = "";
        document.cookie = "darkTheme=0; SameSite=Lax; path=/";
    } else {
        themeIcon.innerHTML = "";
        document.cookie = "darkTheme=1; SameSite=Lax; path=/";
    }

});

themeIcon.addEventListener('mouseover',() => {
    if (darkTheme.disabled) {
        themeIcon.innerHTML = "";
    } else {
        themeIcon.innerHTML = "";
    }
});

themeIcon.addEventListener('mouseleave', () => {
    if (darkTheme.disabled) {
        themeIcon.innerHTML = "";
    } else {
        themeIcon.innerHTML = "";
    }
});

var pox = document.cookie.indexOf('darkTheme');
let darkThemeCookie = document.cookie.slice(pox,pox + 11);

console.log(darkThemeCookie);

//detecta se o cookie de tema escuro existe, se nao existe faz o if
if (darkThemeCookie == "") {

    //se falso o navegador nao suporta essa funcao
    if (window.matchMedia) {
    
        //ao entrar na pagina detecta se o usurio esta com o tema claro ativo, retornando "true" se ativo e "false" se inativo
        const query = window.matchMedia('(prefers-color-scheme: light)').matches;
    
            // se verdadeiro "true" desabilita o tema escuro;
        if (query) {
            darkTheme.disabled=true;
            themeIcon.innerHTML = "";
        } else {
            themeIcon.innerHTML = "";
            darkTheme.disabled=false;
        }
    }

} else {

    console.log(darkThemeCookie.split("=")[1]);

    //detecta se o cookie de tema existe e se o tema escuro esta ativo, se 0 inativo.
    if (darkThemeCookie.split("=")[1] == 0) {
        darkTheme.disabled = true;
        themeIcon.innerHTML = "";
    } else {
        darkTheme.disabled = false;
        themeIcon.innerHTML = "";
    }
}


if (document.querySelector("#showContent")) {
    const showContent = document.querySelector("#showContent");
    const showContentButton = document.querySelector("#showContentButton");

    content = document.querySelector(".capitulos-content");

    var isContentActive = false;

    showContent.addEventListener('click',() => {
    
        content.classList.toggle("d-none");
        isContentActive = !isContentActive;

        if (isContentActive) {
            showContentButton.innerHTML = "";
        } else {
            showContentButton.innerHTML = "";
        }
    });
}

const headerProfilePecture = document.querySelector(".header-profile-picture");
const headerDropdowMenu = document.querySelector(".header-dropdow-menu");

headerProfilePecture.addEventListener('click',()=> {
    headerDropdowMenu.classList.toggle("d-none");
});

document.addEventListener('click',(event) => {
    if (!event.composedPath().includes(headerDropdowMenu) && !event.composedPath().includes(headerProfilePecture)) {
        headerDropdowMenu.classList.add("d-none");
    }
});