import { ENDPOINTS } from "../config/api";

// Função para buscar TODOS usuários

export async function getProjects() {
    const response = await fetch(ENDPOINTS.PROJECTS);

    if (!response.ok) {
        throw new Error("Erro ao buscar projetos");
    }
    return response.json();
}