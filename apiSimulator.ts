//================FETCH PRODUCT CATALOG========================

const fetchProductCatalog = function (): Promise<
  { id: number; name: string; price: number }[]
> {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 },
        ]);
      } else {
        reject("Failed to fetch product catalog");
      }
    }, 1000);
  });
};


//=================FETCH PRODUCT REVIEW=========================

const fetchProductReviews = function (
  productId: number
): Promise<{ Id: number; ratings: number; review: string }[]> {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.7) {
        resolve([
          { Id: productId, ratings: 5, review: "Above adverage product" },
          { Id: productId, ratings: 4, review: "Below Adverage product" },
        ]);
      } else {
        reject(`Failed to fetch reviews for product ID ${productId}`);
      }
    }, 1500);
  });
};


//==================FETCH SALES REPORT==============================


const fetchSalesReport = function (
  salesReport: number
): Promise<{ totalSales: string; unitSold: number; averagePrice: string }[]> {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.7) {
        resolve([
          {
            totalSales: `$${salesReport * 1000}`,
            unitSold: salesReport * 10,
            averagePrice: `$${(salesReport * 1000) / (salesReport * 10)}`,
          },
        ]);
      } else {
        reject(`Failed to fetch sales report`);
      }
    }, 1500);
  });
};


