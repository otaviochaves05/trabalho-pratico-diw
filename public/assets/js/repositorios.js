import { ApiService } from "../../../services/api-service.js";

async function carregaDados() {

    const apiService = new ApiService();

    try {
        const userData = await apiService.obterDados();
        const repos = await apiService.obterRepositorios();

        console.log(userData);
        console.log(repos);

        popularDadosUsuario(userData);


    } catch (error) {
        console.error(error);
        alert(error);
    }
}

function popularDadosUsuario(userData) {

    const nome = document.querySelector(".nome-perfil");
    nome.innerHTML = `<strong>${userData.name}</strong>`

    const descricao = document.querySelector("#descricao");
    descricao.innerText = userData.bio;

    const localizacao = document.querySelector("#localizacao");
    localizacao.innerHTML = `<strong>Localização: </strong>${userData.location}`;

    const minhaPaginaGit = document.querySelector("#minha-pagina");
    minhaPaginaGit.innerHTML = `Acesse minha pagina no Github clicando <strong><a href="${userData.html_url}">aqui</a></strong> ou no respectivo icone abaixo.`;

    const perfilIcones = document.querySelector("#container-perfil-4");
    perfilIcones.innerHTML =
        ` <a class="link" href="${userData.html_url}" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a class="link" href="https://www.instagram.com/otaviochaves__/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a class="link" href="${userData.blog}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`;

   const seguidores = document.querySelector(".icone-container-3");
   seguidores.innerHTML = `<i class="fa-regular fa-user"> ${userData.followers}</i>`      
}



function popularRepos(repos) {
    
}








window.addEventListener('load', () => {
    carregaDados();
});
