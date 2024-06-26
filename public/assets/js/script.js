import { ApiService, JsonService } from "../../../services/api-service.js";


async function carregaDados() {
    const apiService = new ApiService();
    const jsonService = new JsonService();

    try {
        const userData = await apiService.obterDados();
        const repos = await apiService.obterRepositorios();
        const colegas = await jsonService.obterJson("colegas");
        const conteudo = await jsonService.obterJson("conteudos");


        // console.log(userData);
        console.log(repos);
        // console.log(colegas);
        // console.log(conteudo);

        popularDadosUsuario(userData);
        popularRepos(repos);
        popularConteudo(conteudo);
        popularColegas(colegas);

    } catch (error) {
        console.error(error);
        alert("Erro ao buscar dados do usuário. Verifique o console para mais detalhes.");
    }
}

function popularDadosUsuario(userData) {

    // console.log(userData.email);

    const nome = document.querySelector(".nome-perfil");
    nome.innerHTML = `<strong>${userData.name}</strong>`;

    const descricao = document.querySelector("#descricao");
    descricao.innerHTML = userData.bio;

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
    seguidores.innerHTML = `<i class="fa-regular fa-user"> ${userData.followers}</i>`;
}

function popularRepos(repos) {

    const reposSection = document.querySelector("#conteudo-repositorios");
    for (let i = 0; i < repos.length; i++) {

        reposSection.innerHTML += `
        <div class="col">
        <a class="link" href="repositorios.html?id=${repos[i].id}">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${repos[i].name}</h5>
                    <p class="card-text">${repos[i].description}</p>
                </div>
                <div class="card-footer">
                    <i class="fa-regular fa-star"> ${repos[i].stargazers_count}</i>
                    <i class="fa-regular fa-user"> ${repos[i].watchers_count}</i>
                </div>
            </div>
            </a>
        </div>`;

    }

}

function popularConteudo(conteudo) {

        let content = "";
        for(let i = 0; i < conteudo.length; i++){
            if(i==0){
            content += `
            <div class="carousel-item active">
                <a href="${conteudo[i].urlSite}">
                    <img src="${conteudo[i].urlFoto}" class="d-block w-100" style="opacity: 75%; max-height: 600px;" alt="s">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${conteudo[i].titulo}</h5>
                        <p>${conteudo[i].descricao}</p>
                    </div>
                </a>
              </div>`
            } else{
              content += `
              <div class="carousel-item">
                <a href="${conteudo[i].urlSite}">
                    <img src="${conteudo[i].urlFoto}" class="d-block w-100" style="opacity: 75%; max-height: 600px;" alt="s">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${conteudo[i].titulo}</h5>
                        <p>${conteudo[i].descricao}</p>
                    </div>
                </a>
              </div>`
            }
        }
        document.getElementById("carousel").innerHTML = content;
}

function popularColegas(colegas){

    let content = "";
    for (let i =0; i < colegas.length; i++){ 
        content += `
            <a href="${colegas[i].urlGitHub}">
                <img src="${colegas[i].urlFoto}" alt="">
            </a>
            <p>${colegas[i].nome}</p>`
    }
    document.getElementById("fotos").innerHTML = content;
}


window.addEventListener('load', () => {
    carregaDados();
});
