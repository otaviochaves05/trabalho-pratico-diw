import { ApiService } from "../../../services/api-service.js";

async function carregaDados() {
    const apiService = new ApiService();

    try {
        const userData = await apiService.obterDados();
        const repos = await apiService.obterRepositorios();

        console.log(userData);
        console.log(repos);

        popularHTMLRepo(repos);
    
        // const idRepo = repos.id;

        // console.log(idRepo);

    } catch (error) {
        console.error(error);
        alert("Erro ao buscar dados do usuário. Verifique o console para mais detalhes.");
    }
}

function popularHTMLRepo(repos) {

    
    for (let i = 1; i < 2; i++) {
        
        // const id = repos[i].id;
        // console.log(id);
        // console.log(repos[i].name)
        const tituloRepo = document.querySelector("h2");
        tituloRepo.innerText = `Repositório: ${repos[i].name}`

        // const createdAt = repos[i].created_at;
        // const formattedDate = format(parseISO(createdAt), 'dd/MM/yyyy HH:mm:ss');

        const descricaoRepo = document.querySelector("#container-perfil-2");
        descricaoRepo.innerHTML = `
        <p class="nome-perfil"><strong>Descrição</strong></p>
        <p>${repos[i].description}</p>`

        const repoInfo = document.querySelector("#repo-info");
        repoInfo.innerHTML = `                    
        <p class="nome-perfil"><strong>Data de Criação</strong></p>
        <p>${repos[i].created_at}</p>
        <p class="nome-perfil"><strong>Linguagem</strong></p>
        <p>${repos[i].language}</p>
        <p class="nome-perfil"><strong>Link de acesso</strong></p>
        <p><a
                href="${repos[i].html_url}">${repos[i].html_url}</a>
        </p>
        <p class="nome-perfil"><strong>Tópicos</strong></p>
        <span class="badge text-bg-primary">BackEnd</span>
        <span class="badge text-bg-primary">${repos[i].language}</span>
        <span class="badge text-bg-primary">Algoritimos</span>
        <span class="badge text-bg-primary">Lógica de programação</span>
        <span class="badge text-bg-primary">Arquivos</span>`

        const divIcons = document.querySelector(".icone");
        divIcons.innerHTML = `
        <i class="fa-regular fa-star"> ${repos[i].stargazers_count}</i>
        <i class="fa-regular fa-user"> 1</i>`
    }

}

window.addEventListener('load', () => {
    carregaDados();
});
