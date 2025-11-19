//==========Part 4: Custom Error Classes====================================

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

export class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}


// =====================Part 2: API Simulation Functions====================

//=======================FETCH PRODUCT CATALOG====================

export const fetchProductCatalog = (): Promise<
  { id: number; name: string; price: string | number }[]
> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 },
        ]);
      } else {
        reject(new NetworkError("Failed to fetch product catalog"));
      }
    }, 1000);
  });
};

// -====================fetchProductReviews()========================

export const fetchProductReviews = (
  productId: number
): Promise<
  { id: number; product: string; user: string; review: string; price: string | number }[]
> => {
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
      } else {
        reject(new DataError(`Failed to fetch reviews for product ID: ${productId}`));
      }
    }, 1500);
  });
};

//===============TESTING TESTING TESTING====================

fetchProductReviews(0)
.then((reviews) => {
    console.log("Reviews success:", reviews)
})
.catch((error) => {
    console.log("Review Error:", error)
})



//======================FETCH SALES REPORT=======================

export function fetchSalesReport(): Promise<
  {
    totalSales: string | number;
    unitSold: string | number;
    averagePrice: string | number;
  }[]
> {
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
      } else {
        reject(new NetworkError("Failed to fetch sales report"));
      }
    }, 1000);
  });
}


//===============TESTING TESTING TESTING====================

fetchSalesReport()
.then((report) => {
    console.log("Report success:", report)
})
.catch((error) => {
    console.log("Report Error:", error)
})
