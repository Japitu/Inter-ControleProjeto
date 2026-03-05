import { ENDPOINTS } from "../config/api";

export async function getUsers() {
    const response = await fetch(ENDPOINTS.USERS);

    if (!response.ok) {
        throw new Error("Erro ao buscar usuários");
    }

    return response.json();
}

