export interface Transfer {
  id?: number | string;
  bank: string;
  agency: number;
  account: number | string;
  document: number | string;
  accountCredited: string;
  value: number;
  data?: Date;
}
