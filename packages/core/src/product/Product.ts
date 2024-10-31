import type Especification from "./Especification";
import type Pricing from "./Pricing";

export default interface Product extends Pricing {
  id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  image: string;
  grade: number;
  videoReview: string;
  tags: string[];
  especification: Especification;
}
