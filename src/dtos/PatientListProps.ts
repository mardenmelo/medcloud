export interface PatientListProps {
    id: number;
    name: string;
    birthDate: string;
    email: string;
    phone?: string;
    address: {
        street: string;
        houseNumber: string;
        district: string;
        city: string;
        state: string;
        zipCode: string
    } 
}