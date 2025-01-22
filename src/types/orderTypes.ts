type Product = {
    quantity: number;
    color: string;
    id: string;
  };
  
  type OrderDetails = {
    zipCode: string;
    address: string;
    city: string;
    phone: string;
    fullName: string;
    country: string;
  };
  
 export type OrderTypes = {
    orderId: string;
    products: Product[];
    details: OrderDetails;
    userId: string;
    _createdAt: string; 
  };
  