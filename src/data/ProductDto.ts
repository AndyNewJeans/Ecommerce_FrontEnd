export interface ProductDto{
    pid:       number;
    name:      string;
    image_url: string;
    price:     number;
    has_stock: boolean;
}

export interface ProductDetailDto{
    name:        string;
    description: string;
    image_url:   string;
    price:       number;
    stock:       number;
}