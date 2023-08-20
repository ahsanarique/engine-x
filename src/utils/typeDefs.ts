export type typeMinMaxData = {
    title: string;
    minValue: number | undefined;
    maxValue: number | undefined;
}

export type typeProjectData = {
    projectName: string;
    projectDescription?: string;
    clientName: string;
    contractorName: string;
}

export type typeTableData = {
    header: string[];
    data: number[][];
}