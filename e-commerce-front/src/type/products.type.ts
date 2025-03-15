export type TProduct = {
  title: string;
  id: number;
  img: string;
  cat_prefix?: string;
  price: number;
  quantity?: number;
  max: number;
  total?: number;
  like: boolean;
};
