export interface CartItemDto{
    user:     User;
    product:  Product;
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
export interface User {
    uid:         number;
    firebaseUid: string;
    email:       string;
}