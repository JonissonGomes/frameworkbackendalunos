type Pasteis = {
  id: number;
  quantidade: number;
};

export default class CreatePedidoDTO {
  public idCliente: number;
  public pasteis: Pasteis[];
}
