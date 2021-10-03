interface ICharge {
    price: number;
    unit: string;
}

interface IEv {
    operator: string;
    address: string;
    charges: ICharge[];
    isAvailable: boolean;
    imageUrl: string;
    id: string;
}