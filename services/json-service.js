// export class ApiService {
//     constructor() {
//         this.urlBase = "http://localhost:3000";
//     }

//     async obterDados() {
//         const respostaDados = await fetch(`${this.urlBase}/users/1`);
//         if (!respostaDados.ok) {
//             throw new Error("Não foi possível buscar os dados deste usuário");
//         } else {
//             return respostaDados.json();
//         }
//     }

//     async obterRepositorios() {
//         const respostaRepositorios = await fetch(`${this.urlBase}/repos`);
//         if (!respostaRepositorios.ok) {
//             throw new Error("Não foi possível buscar os repositórios deste usuário");
//         } else {
//             return respostaRepositorios.json();
//         }
//     }
// }

// export function oi(){
//     console.log("oi");
// }
