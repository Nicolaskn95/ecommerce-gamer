import Produto from "./Product";

export default class ProductFilter {
  execute(search: string, product: Produto[]): Produto[] {
    const words = search.toLowerCase().split(" ");
    return product.filter((product) => {
      const text = `
                ${product.name}
                ${product.description}
                ${Object.values(product.especification).join(" ")}
                ${product.brand}
            `.toLowerCase();
      return words.every((word) => text.includes(word)); //every: usa para iterar sobre cada palavra (word) no array words
    });
  }
}
