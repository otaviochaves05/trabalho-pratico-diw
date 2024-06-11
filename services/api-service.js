export class ApiService{

    constructor(){
        
        this.urlBase = "https://api.github.com"

    }

    async obterRepositorios(){

        const resposta = await fetch(`${this.urlBase}/users/otaviochaves05/repos`);

        if (!resposta) {
            /*"Error" é nativo?*/
            throw new Error ("Não foi possível buscar os repositórios deste usuário");
        } else {
            /*json() é uma funcao que converte os dados em estrutura json?*/
            return resposta.json();
        }

    }    


}