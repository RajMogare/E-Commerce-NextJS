export type Product={
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:{
        rate:number;
        count:number;
    }
}

export type OrderDetails={
    id: string;
    status: string;
    purchase_units: Array<{
      amount: {
        currency_code: string;
        value: string;
      };
    }>;
    payer: {
      email_address: string;
      name: {
        given_name: string;
        surname: string;
      };
    };
  }
  