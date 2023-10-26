export interface GenericType {
    [key:string]: any;
}

export interface CargoType {
    location: string;
    cargo_type: string;
    cargo_weight: number;
    dimensions?: GenericType,
}

export interface MenuType {
    label: string;
    url: string;
}

