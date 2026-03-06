export type Area = 
"Engenharia" | 
"Campo" | 
"Parque";

export type Status = 
"Aguardando" | 
"Ativo" | 
"Concluído" | 
"Cancelado";

export interface UserProps {
    id: number;
    nome: string;
}

interface ClientProps {
    id: number;
    nome: string;
}

export interface ProjectProps {
    id: number;
    nome: string;
    numero: string;
    cliente: ClientProps;
}

export interface ServiceProps {
    id: number;
    nome: string;
    numero: string;
    area: Area;
    statusServico: Status;
    projeto: ProjectProps;
    usuario: UserProps;
    horasTotal: string | null;
}

export interface CreateServiceDTOProps {
    nome: string;
    numero: string;
    area: Area;
    statusServico: Status;
    projeto: { id: number };
    usuario: { id: number };
}

export interface EditServiceDTOProps {
    id: number;
    nome: string;
    numero: string;
    area: Area;
    statusServico: Status;
    projeto: { id: number };
    usuario: { id: number };
}

export interface ActivityProps {
    id: number;
    nome: string;
    descricao: string;
    data: string;
    horaInicio: string;
    horaFim: string;
    tempoGasto: string;
    servico: ServiceProps;
    usuario: UserProps;
}