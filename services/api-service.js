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

export class JsonService{

    constructor() {

        this.urlBase = "http://localhost:3000";

    }

    async obterJson(e) {
        
        const respostaDados = await fetch(`${this.urlBase}/${e}`);

        if (!respostaDados.ok) {
            throw new Error ("Não foi possível buscar os dados deste usuário");
        } else {
            return respostaDados.json();
        }

    }

}



// export const getDbJson = async (e) => {
//     const endpoint = `http://localhost:3000/colegas`
//     const response = await fetch(endpoint);
//     if (!response.ok){
//         console.log("Erro ao carregar os dados.")
//     }
//     const data = await response.json();
//     return data
// }