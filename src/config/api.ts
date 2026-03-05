export const API_URL = import.meta.env.VITE_API_URL;

export const ENDPOINTS = {
    SERVICES: `${API_URL}/servico`,
    PROJECTS: `${API_URL}/projeto`,
    USERS: `${API_URL}/usuario`,
    CLIENTS: `${API_URL}/cliente`,
    ACTIVITY: `${API_URL}/atividade`
};
