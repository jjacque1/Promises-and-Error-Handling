export declare class NetworkError extends Error {
    constructor(message: string);
}
export declare class DataError extends Error {
    constructor(message: string);
}
export declare const fetchProductCatalog: () => Promise<{
    id: number;
    name: string;
    price: string | number;
}[]>;
export declare const fetchProductReviews: (productId: number) => Promise<{
    id: number;
    product: string;
    user: string;
    review: string;
    price: string | number;
}[]>;
export declare function fetchSalesReport(): Promise<{
    totalSales: string | number;
    unitSold: string | number;
    averagePrice: string | number;
}[]>;
//# sourceMappingURL=apiSimulator.d.ts.map