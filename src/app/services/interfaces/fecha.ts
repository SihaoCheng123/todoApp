export interface Fecha {
    mes: string;
    diasSemana: string[];
    dias: (number|null)[];
}

export interface Evento{
    nombreEvento: string,
    descripcionEvento: string,
    fechaEvento: string,
    iconoEvento: string,
}

export interface Semana{
    diaSemana: string,
}

