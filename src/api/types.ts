export type OrderId = number;
export type ReportId = number;
export type LocationId = number;

export type PizzaTotals = {
  raised: number;
  donors: number;
  costs: number;
  pizzas: number;
  meals: number;
  orders: number;
  locations: number;
  states: number;
};

export enum OrderTypes {
  pizzas = "pizzas",
  donuts = "donuts",
}

export enum OrderTypeMealCounts {
  pizzas = 14,
  donuts = 12,
}

export type OrderInfo = {
  id: OrderId;
  meals: number;
  quantity: number;
  orderType: OrderTypes;
  pizzas: number;
  restaurant: string;
  createdAt: Date;
};

/**
 * /orders/{id}
 */
export type OrderDetails = OrderInfo & {
  location: LocationInfo;
  reports: ReportInfo[];
};

export type LocationInfo = {
  id: LocationId;
  city: string;
  state: string;
  zip: string;
  address: string;
  fullAddress: string;
  lat: string;
  lng: string;
  validatedAt: Date;
  stateName: string;
};

export type ReportInfo = {
  id: ReportId;
  createdAt: Date;
  reportURL: string;
  waitTime: string;
};

/**
 * /locations/{address}
 */
export type LocationStatus = LocationInfo & {
  hasTruck: boolean;
  reports: any[];
  orders: OrderInfo[];
};

/**
 * /orders
 */
export type OrderQueryResults = {
  results: OrderDetails[];
  count: number;
};
