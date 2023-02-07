export interface Ides {}
export interface IFromItem {
  goodType?: number | string;
  goodPrice?: number | string[];
}
interface ITabItem {
  label: string | number;
  name: string | number;
}
export type ITable = ITabItem[];
