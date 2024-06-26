import { ApiService } from "../../../services/api-service.js";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const id = params.get('id');

async function carregaDadosRepo() {
    const apiService = new ApiService();

    try {
        const repoData = await apiService.obterRepositorios();
        const repoFiltrado = repoData.find(repo => repo.id == id);
        if (repoFiltrado) {
            const repositorio = repoFiltrado;
            const dataCriacao = new Date(repositorio.created_at);
            popularInfoRepos(repositorio, dataCriacao);
        } else {
            console.error('Repositório não encontrado');
            alert("Repositório não encontrado.");
        }
    } catch (error) {
        console.error(error);
        alert("Erro ao buscar dados do repositório. Verifique o console para mais detalhes.");
    }
}

function formatarData(data) {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function popularInfoRepos(repositorio, dataCriacao) {

    const tituloRepo = document.querySelector("h2");
    tituloRepo.innerText = `Repositório: ${repositorio.name}`

    const descricaoRepo = document.querySelector("#container-perfil-2");
    descricaoRepo.innerHTML = `
    <p class="nome-perfil"><strong>Descrição</strong></p>
    <p>${repositorio.description}</p>`

    const repoInfo = document.querySelector("#repo-info");
    repoInfo.innerHTML = `                    
    <p class="nome-perfil"><strong>Data de Criação</strong></p>
    <p>${(formatarData(dataCriacao))}</p>
    <p class="nome-perfil"><strong>Linguagem</strong></p>
    <p>${repositorio.language}</p>
    <p class="nome-perfil"><strong>Link de acesso</strong></p>
    <p><a
            href="${repositorio.html_url}">${repositorio.html_url}</a>
    </p>
    <p class="nome-perfil"><strong>Tópicos</strong></p>
    <span class="badge text-bg-primary">BackEnd</span>
    <span class="badge text-bg-primary">${repositorio.language}</span>
    <span class="badge text-bg-primary">Algoritimos</span>
    <span class="badge text-bg-primary">Lógica de programação</span>`

    const divIcons = document.querySelector(".icone");
    divIcons.innerHTML = `
    <i class="fa-regular fa-star"> ${repositorio.stargazers_count}</i>
    <i class="fa-regular fa-user"> ${repositorio.watchers_count}</i>`

}

window.addEventListener('load', () => {
    carregaDadosRepo();
});




































// import { ApiService } from "../../../services/api-service.js";


// const url = new URL(window.location.href);
// const params = new URLSearchParams(url.search);
// const id = params.get('id');


// async function carregaDadosRepo() {

//     const apiService = new ApiService();


//     const repoData = await apiService.obterRepositorios();
//     const repoFiltrado = repoData.find(repoData => repoData.id == id);
//     const repositorio = repoFiltrado;
//     popularInfoRepos(repositorio, dataCriacao)

//     console.error(error);
//     alert("Erro ao buscar dados do usuário. Verifique o console para mais detalhes.");


//     const dataCriacao = new Date(repositorio.created_at);
//     function formatarData(data) {
//         const day = data.getDate().toString().padStart(2, '0');
//         const month = (data.getMonth() + 1).toString().padStart(2, '0');
//         const year = data.getFullYear();
//         return `${day}/${month}/${year}`
//     }

// }

// function popularInfoRepos(repositorio, dataCriacao) {

//     const nomeRepo = document.querySelector("#nome-repo");
//     nomeRepo.innerText = repositorio.name;

   

// }

// window.addEventListener('load', () => {
//     carregaDadosRepo();
//     popularInfoRepos();
// });
