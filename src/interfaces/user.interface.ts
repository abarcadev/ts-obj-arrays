export interface UserInterface {
    id        : number;
    name      : string;
    status    : boolean;
    dateAdded : Date;
    skills    : SkillInterface[];
    department: DepartmentInterface;
}

interface SkillInterface {
    name: string
}

interface DepartmentInterface {
    id  : number;
    name: string;
}