export class ApiService{

    constructor() {

        this.urlBase = "https://api.github.com";

    }

    async obterDados() {
        
        const respostaDados = await fetch(`${this.urlBase}/users/otaviochaves05`);

        if (!respostaDados.ok) {
            throw new Error ("Não foi possível buscar os dados deste usuário");
        } else {
            return respostaDados.json();
        }

    }

    async obterRepositorios() {

        const respostaRepositorios = await fetch(`${this.urlBase}/users/otaviochaves05/repos`);

        if (!respostaRepositorios.ok) {
            /*"Error" é nativo?*/
            throw new Error ("Não foi possível buscar os repositórios deste usuário");
        } else {
            /*json() é uma funcao que converte os dados em estrutura json?*/
            return respostaRepositorios.json();
        }

    } 
}

