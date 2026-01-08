export interface Contact {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    message: string;
    created_at?: Date;
}
