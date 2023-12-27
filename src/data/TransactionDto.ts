export interface TransactionDto {
    tid:      number;
    buyer_id: number;
    datetime: Date;
    total:    number;
    status:   string;
    items:    Item[];
}

export interface Item {
    tpid:     number;
    product:  Product;
    subtotal: number;
    quantity: number;
}

export interface Product {
    pid:         number;
    name:        string;
    description: string;
    imageUrl:    string;
    price:       number;
    stock:       number;
}