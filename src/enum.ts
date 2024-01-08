export enum CustomerType {
  REGULAR = 2,
  GOLD = 1,
  PLATINUM = 0,
}

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};
