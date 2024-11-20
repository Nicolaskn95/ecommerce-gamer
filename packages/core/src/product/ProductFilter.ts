import Produto from "./Product";

export default class ProductFilter {
  execute(search: string, product: Produto[]): Produto[] {
    const words = search.toLowerCase().split(" ");
    return product.filter((product) => {
      const texto = `
                ${product.name}
                ${product.description}
                ${Object.values(product.especification).join(" ")}
                ${product.brand}
            `.toLowerCase();
      return words.every((word) => texto.includes(word));
    });
  }
}
