import { Review } from "./review";

export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  discountPercentage: number;
  rating: number;
  price: number;
  stock?: number;
  brand?: string;
  quantity?: number;
  reviews: Review[];
}