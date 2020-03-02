/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const checkout = /* GraphQL */ `
  mutation Checkout($id: Int, $bool: Boolean) {
    checkout(id: $id, bool: $bool)
  }
`;
export const nuevoIngreso = /* GraphQL */ `
  mutation NuevoIngreso(
    $modificar: Boolean
    $idingresos: String
    $nombreyape: String!
    $edad: Int!
    $nacionalidad: String!
    $dni: String!
    $menores: Int!
    $mayores: Int!
    $ciudad: String!
    $carpas: Int!
    $trailers: Int!
    $fechaSalida: String!
    $fechaIngreso: String!
    $checkout: String!
    $precio: Int!
    $parcelas: [String]
    $vehiculos: [Vehiculo]!
  ) {
    nuevoIngreso(
      modificar: $modificar
      idingresos: $idingresos
      nombreyape: $nombreyape
      edad: $edad
      nacionalidad: $nacionalidad
      dni: $dni
      menores: $menores
      mayores: $mayores
      ciudad: $ciudad
      carpas: $carpas
      trailers: $trailers
      fechaSalida: $fechaSalida
      fechaIngreso: $fechaIngreso
      checkout: $checkout
      precio: $precio
      parcelas: $parcelas
      vehiculos: $vehiculos
    )
  }
`;
