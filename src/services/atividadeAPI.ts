import { ENDPOINTS } from "../config/api";
import type { ActivityProps } from "../types";

export async function getActivities(): Promise<ActivityProps[]> {
    const response = await fetch(ENDPOINTS.ACTIVITY);

    if (!response.ok) {
        throw new Error("Erro ao buscar atividades");
    }
    return await response.json();
}