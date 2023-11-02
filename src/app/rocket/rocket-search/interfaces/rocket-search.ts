export interface Stage {
    id: number;
    name: string;
    code: string;
    created_at: string;
    updated_at: string;
    rocket: number;
  }
  
  export interface Rocket {
    id: number;
    name: string;
    code: string;
    height: number;
    mass: number;
    stages: Stage[];
  }
  