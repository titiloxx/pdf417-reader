/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listaIngresos = /* GraphQL */ `
  query ListaIngresos {
    listaIngresos {
      idingresos
      nombreyape
      edad
      nacionalidad
      ciudad
      dni
      menores
      mayores
      carpas
      trailers
      fechaSalida
      fechaIngreso
      checkout
      precio
      parcelas
      vehiculos {
        marca
        tipo
        patente
      }
    }
  }
`;
export const ingreso = /* GraphQL */ `
  query Ingreso($id: String) {
    ingreso(id: $id) {
      idingresos
      nombreyape
      edad
      nacionalidad
      ciudad
      dni
      menores
      mayores
      carpas
      trailers
      fechaSalida
      fechaIngreso
      checkout
      precio
      parcelas
      vehiculos {
        marca
        tipo
        patente
      }
    }
  }
`;
