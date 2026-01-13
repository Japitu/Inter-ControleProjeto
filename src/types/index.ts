export type Area = 
"Engenharia" | 
"Campo" | 
"Parque" | 
"Outros";

export type Status = 
"Aguardando" | 
"Ativo" | 
"Concluído" | 
"Cancelado";

export interface Service {
        id: number;
        name: string;
        projectId: number;
        projectName: string;
        projectNumber: string;
        area: Area;
        status: Status;
        hoursSpent: string;
    }