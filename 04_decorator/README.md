# Decorator Pattern

El patrón de diseño **Decorator** es un patrón estructural que permite agregar funcionalidades adicionales a un objeto dinámicamente sin modificar su estructura original.

# 📌 Objetivo
Extender el comportamiento de un objeto de manera flexible y reutilizable sin alterar su código fuente.

# 🚨 Problema
Cuando se necesitan múltiples combinaciones de funcionalidades, la herencia puede generar:
- demasiadas clases
- estructuras complejas
- duplicación de lógica
- baja flexibilidad

Ejemplo problemático:

```text id="0g8d7s"
Cafe
CafeConLeche
CafeConAzucar
CafeConLecheYAzucar
CafeConChocolate
CafeConChocolateYLeche
CafeConChocolateLecheAzucar
```
La cantidad de clases crece rápidamente.

# ✅ Solución
El patrón Decorator:

- encapsula funcionalidades adicionales
- envuelve objetos dinámicamente
- permite combinar comportamientos
- evita explosión de clases por herencia

# 🧠 Estructura del patrón
# Componentes

## Component
Interfaz común para objetos y decoradores.

## Concrete Component
Objeto base que recibirá funcionalidades adicionales.

## Decorator
Clase abstracta que mantiene referencia al componente.

## Concrete Decorator
Agrega funcionalidades específicas.

# 📊 Diagrama
```
           +------------------+
           |    Component     |
           +------------------+
           | + operacion()    |
           +------------------+
                    ▲
         -----------------------
         |                     |
+------------------+   +------------------+
| ConcreteComponent|   |    Decorator     |
+------------------+   +------------------+
| + operacion()    |   | - component      |
+------------------+   | + operacion()    |
                       +------------------+
                                ▲
                    -----------------------
                    |                     |
          +----------------+   +----------------+
          | DecoratorA     |   | DecoratorB     |
          +----------------+   +----------------+
```

# 💻 Ejemplo en Python
```python
class Cafe(object):

    def costo(self):
        return 5


class DecoradorCafe(object):

    def __init__(self, cafe):
        self.cafe = cafe

    def costo(self):
        return self.cafe.costo()


class Leche(DecoradorCafe):

    def costo(self):
        return self.cafe.costo() + 2


class Azucar(DecoradorCafe):

    def costo(self):
        return self.cafe.costo() + 1


class Chocolate(DecoradorCafe):

    def costo(self):
        return self.cafe.costo() + 3


# Uso

pedido = Cafe()
pedido = Leche(pedido)
pedido = Chocolate(pedido)
pedido = Azucar(pedido)

print("Costo total:", pedido.costo())
```

▶️ Salida
Costo total: 11

# 💻 Ejemplo real: Sistema de logs
```python
class Logger(object):

    def log(self, mensaje):
        print(mensaje)


class LoggerDecorator(object):

    def __init__(self, logger):
        self.logger = logger

    def log(self, mensaje):
        self.logger.log(mensaje)


class TimestampLogger(LoggerDecorator):

    def log(self, mensaje):

        from datetime import datetime

        mensaje = "[{}] {}".format(datetime.now(), mensaje)

        self.logger.log(mensaje)


class UpperLogger(LoggerDecorator):

    def log(self, mensaje):
        self.logger.log(mensaje.upper())


logger = Logger()

logger = TimestampLogger(logger)
logger = UpperLogger(logger)

logger.log("Sistema iniciado")
```

▶️ Salida
[2026-05-27 10:00:00] SISTEMA INICIADO

# ✅ Ventajas
- Agrega funcionalidades dinámicamente
- Evita explosión de clases por herencia
- Cumple Open/Closed Principle
- Permite combinar comportamientos
- Alta flexibilidad
- Reutilización de componentes

# ❌ Desventajas
- Puede generar muchos objetos pequeños
- Mayor complejidad de debugging
- El orden de decoradores puede afectar resultados
- Más difícil de entender en sistemas grandes

# 📌 Cuándo usar Decorator
Usa Decorator cuando:

- necesites agregar funcionalidades dinámicamente
- quieras evitar herencia excesiva
- existan múltiples combinaciones de comportamiento
- necesites composición flexible

# 🚫 Cuándo evitarlo
Evita Decorator cuando:

- el comportamiento sea estático
- la solución simple sea suficiente
- el sistema pueda volverse demasiado complejo

# 🏗️ Casos de uso reales
- Middleware
- Sistemas de logging
- Streams
- Compresión de archivos
- Encriptación
- Validaciones
- UI Components
- HTTP Request Handlers

# 🎯 Conclusión
El patrón Decorator permite:

- extender funcionalidades dinámicamente
- evitar herencia excesiva
- construir sistemas flexibles y reutilizables

Es uno de los patrones estructurales más utilizados en arquitecturas modernas.