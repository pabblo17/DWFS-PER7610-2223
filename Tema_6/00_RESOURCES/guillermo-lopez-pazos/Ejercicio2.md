**Ejercicicio 2: Calculadora**

**Recursos**
- Suma, resta, multiplicación, división, raíz, potencia

**Operaciones**

| Método HTTP | URI | Body | Respuesta | Explicación |
| ----------- | --- | ---- | --------- | ----------- |
| GET | /resultado | N/A | 200 OK, 404 NF | Obtener resultado |
| GET | /operacion | N/A | 200 OK, 404 NF | Obtener cadena de operación |
| POST | /suma | [n1, n2, ...] | 200 OK, 400 BR | Sumar array de valores |
| POST | /resta | [n1, n2, ...] | 200 OK, 400 BR | Restar array de valores |
