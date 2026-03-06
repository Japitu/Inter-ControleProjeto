import { ENDPOINTS } from "../config/api";

// Função para buscar TODOS usuários

export async function getUsers() {
    const response = await fetch(ENDPOINTS.USERS);

    if (!response.ok) {
        throw new Error("Erro ao buscar usuários");
    }
    return response.json();
}
