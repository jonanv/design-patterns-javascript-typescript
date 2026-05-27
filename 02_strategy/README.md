# Strategy Pattern

El patrón de diseño **Strategy** es un patrón de comportamiento que permite definir una familia de algoritmos, encapsular cada uno de ellos y hacerlos intercambiables en tiempo de ejecución.

# 📌 Objetivo
Permitir cambiar el comportamiento de una clase dinámicamente sin modificar su código fuente.

# 🚨 Problema
Cuando una clase contiene múltiples condicionales para ejecutar diferentes algoritmos:

```python
if metodo_pago == "tarjeta":
    pagar_con_tarjeta()
elif metodo_pago == "paypal":
    pagar_con_paypal()
elif metodo_pago == "crypto":
    pagar_con_crypto()
```

Esto genera:

- Alto acoplamiento
- Código difícil de mantener
- Violación del principio Open/Closed
- Dificultad para agregar nuevos comportamientos

# ✅ Solución
El patrón Strategy encapsula cada algoritmo en una clase independiente y permite intercambiarlos dinámicamente.

# 🧠 Estructura del patrón
# Componentes

## Strategy
Define la interfaz común para todas las estrategias.

## Concrete Strategy
Implementaciones concretas del algoritmo.

## Context
Clase que utiliza una estrategia.

# 📊 Diagrama
```
                +------------------+
                |     Strategy     |
                |------------------|
                | ejecutar()       |
                +------------------+
                         ▲
          --------------------------------
          |              |              |
+----------------+ +----------------+ +----------------+
| Estrategia A   | | Estrategia B   | | Estrategia C   |
+----------------+ +----------------+ +----------------+
| ejecutar()     | | ejecutar()     | | ejecutar()     |
+----------------+ +----------------+ +----------------+

                 +------------------+
                 |     Context      |
                 +------------------+
                 | strategy         |
                 +------------------+
                 | ejecutar()       |
                 +------------------+
```

# 💻 Ejemplo en Python
```python
from abc import ABCMeta, abstractmethod


class EstrategiaPago(object):
    __metaclass__ = ABCMeta

    @abstractmethod
    def pagar(self, monto):
        pass


class PagoTarjeta(EstrategiaPago):

    def pagar(self, monto):
        print("Pagando {} con tarjeta".format(monto))


class PagoPaypal(EstrategiaPago):

    def pagar(self, monto):
        print("Pagando {} con PayPal".format(monto))


class PagoCrypto(EstrategiaPago):

    def pagar(self, monto):
        print("Pagando {} con Criptomonedas".format(monto))


class CarritoCompras(object):

    def __init__(self, estrategia):
        self.estrategia = estrategia

    def procesar_pago(self, monto):
        self.estrategia.pagar(monto)

Uso

carrito = CarritoCompras(PagoPaypal())
carrito.procesar_pago(100)

carrito.estrategia = PagoCrypto()
carrito.procesar_pago(250)
```

▶️ Salida
Pagando 100 con PayPal
Pagando 250 con Criptomonedas

# ✅ Ventajas
- Elimina grandes bloques de if/else
- Facilita agregar nuevos algoritmos
- Reduce el acoplamiento
- Permite cambiar comportamiento dinámicamente
- Mejora la mantenibilidad
- Cumple Open/Closed Principle

# ❌ Desventajas
- Incrementa la cantidad de clases
- Puede sobrecomplicar soluciones simples
- El cliente debe conocer las estrategias disponibles

# 📌 Cuándo usar Strategy
Usa Strategy cuando:

- Existan múltiples variantes de un algoritmo
- Tengas demasiados if/else
- Necesites cambiar comportamientos en tiempo de ejecución
- Quieras desacoplar lógica de negocio

# 🏗️ Casos de uso reales
- Métodos de pago
- Sistemas de autenticación
- Motores de descuentos
- Algoritmos de ordenamiento
- Cálculo de impuestos
- Estrategias de compresión
- Sistemas de envío

# 🎯 Conclusión
El patrón Strategy permite:

- desacoplar algoritmos
- simplificar lógica condicional
- cambiar comportamientos dinámicamente

Es uno de los patrones más utilizados en aplicaciones empresariales modernas.