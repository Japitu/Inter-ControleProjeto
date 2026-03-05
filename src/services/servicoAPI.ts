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

    return response.json();
}