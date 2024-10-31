export default class Moeda {
  static format(
    value: number,
    location: string = "pt-BR",
    moeda: string = "BRL"
  ): string {
    return (value ?? 0).toLocaleString(location, {
      style: "currency",
      currency: moeda,
    });
  }
}
