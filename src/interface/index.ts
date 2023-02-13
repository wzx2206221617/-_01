interface ITabItem {
  label: string;
  name: string;
}
export type ITable = ITabItem[];
export interface ITableItem {
  id: number;
  img: string;
  good_name: string;
  title: string;
  variety: number | string; //种类
  reality_price: number | string; //实际价格
  discounts_price?: number | string; //优惠价格
}
export type IGoodItem = ITableItem[];
