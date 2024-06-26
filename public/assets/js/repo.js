import { ApiService } from "../../../services/api-service.js";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const id = params.get('id');

async function carregaDadosRepo() {
    const apiService = new ApiService();

    try {
        const repoData = await apiService.obterRepositorios();
        const repoFiltrado = repoData.find(repo => repo.id == id);
            const repositorio = repoFiltrado;
            const dataCriacao = new Date(repositorio.created_at);
            popularInfoRepos(repositorio, dataCriacao);
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
    </p>`

    const topicos = document.querySelector("#topicos");
    for (let i = 0; i < repositorio.topics.length; i++){
        topicos.innerHTML += `<span class="badge text-bg-primary">${repositorio.topics[i]}</span>`
    }
    
    const divIcons = document.querySelector(".icone");
    divIcons.innerHTML = `
    <i class="fa-regular fa-star"> ${repositorio.stargazers_count}</i>
    <i class="fa-regular fa-user"> ${repositorio.watchers_count}</i>`
    
}

window.addEventListener('load', () => {
    carregaDadosRepo();
});

{/* <span class="badge text-bg-primary">BackEnd</span> */}































