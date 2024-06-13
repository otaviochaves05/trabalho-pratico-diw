const urlBase = '/colegas';

async function carregColegas() {

    try {
        const resposta = await fetch(urlBase);

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar os dados");
        }

        const colegas = await resposta.json();

        popularColegas(colegas);

    } catch (error) {
        alert(error);
    }
}

export function popularColegas(colegas) {

    const div = document.querySelector(".fotos");

    

}