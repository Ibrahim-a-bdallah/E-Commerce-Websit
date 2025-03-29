export type TProduct = {
  title: string;
  _id: number;
  img: string;
  cat_prefix?: string;
  price: number;
  quantity?: number;
  max: number;
  total?: number;
  like: boolean;
};
