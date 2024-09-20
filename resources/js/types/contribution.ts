import { Resident } from "./resident";

export type Contribution = {
    id: string;
    amount: number;
    payment_date: string;
    resident: Resident;
};
