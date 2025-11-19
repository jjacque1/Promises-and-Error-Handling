"use strict";
//==========Part 4: Custom Error Classes====================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductReviews = exports.fetchProductCatalog = exports.DataError = exports.NetworkError = void 0;
exports.fetchSalesReport = fetchSalesReport;
class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }
}
exports.NetworkError = NetworkError;
class DataError extends Error {
    constructor(message) {
        super(message);
        this.name = "DataError";
    }
}
exports.DataError = DataError;
// =====================Part 2: API Simulation Functions====================
//=======================FETCH PRODUCT CATALOG====================
const fetchProductCatalog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            }
            else {
                reject(new NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};
exports.fetchProductCatalog = fetchProductCatalog;
// -====================fetchProductReviews()========================
const fetchProductReviews = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve([
                    {
                        id: 1,
                        product: "Desktop",
                        user: "jjacque",
                        review: "This prouct is NOT worth the price.",
                        price: "$200.00,",
                    },
                    {
                        id: 2,
                        product: "laptop",
                        user: "BobbyJoe",
                        review: "I liked the product, it was exactly what was expected.",
                        price: "$1200",
                    },
                ]);
            }
            else {
                reject(new DataError(`Failed to fetch reviews for product ID: ${productId}`));
            }
        }, 1500);
    });
};
exports.fetchProductReviews = fetchProductReviews;
//===============TESTING TESTING TESTING====================
(0, exports.fetchProductReviews)(0)
    .then((reviews) => {
    console.log("Reviews success:", reviews);
})
    .catch((error) => {
    console.log("Review Error:", error);
});
//======================FETCH SALES REPORT=======================
function fetchSalesReport() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve([
                    {
                        totalSales: "$5,000",
                        unitSold: "5 units",
                        averagePrice: "$1,000",
                    },
                ]);
            }
            else {
                reject(new NetworkError("Failed to fetch sales report"));
            }
        }, 1000);
    });
}
//===============TESTING TESTING TESTING====================
fetchSalesReport()
    .then((report) => {
    console.log("Report success:", report);
})
    .catch((error) => {
    console.log("Report Error:", error);
});
//# sourceMappingURL=apiSimulator.js.map