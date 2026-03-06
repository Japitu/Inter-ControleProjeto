import { ENDPOINTS } from "../config/api";
import type { CreateServiceDTOProps, ServiceProps } from "../types";

// Função para buscar TODOS serviços

export async function getServices(): Promise<ServiceProps[]> {
    const response = await fetch(ENDPOINTS.SERVICES);

    if (!response.ok) {
        throw new Error("Erro ao buscar serviços");
    }

    return response.json();
}

// Função para criar um novo serviço

export async function createService(service: CreateServiceDTOProps): Promise<ServiceProps> {
    const response = await fetch(ENDPOINTS.SERVICES, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(service)
    });
    if (!response.ok) {
        throw new Error("Erro ao criar serviço");
    }

    return response.json();
}

// Função para deletar um serviço

export async function deleteService(id: number): Promise<void> {
    const response = await fetch(`${ENDPOINTS.SERVICES}/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error("Erro ao deletar serviço");
    }
}
