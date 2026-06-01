# State Pattern

El patrón de diseño **State** es un patrón de comportamiento que permite que un objeto modifique su comportamiento cuando cambia su estado interno. Desde el exterior, parece que el objeto cambia de clase.

# 📌 Objetivo
Permitir que un objeto altere su comportamiento dinámicamente según su estado interno, evitando grandes estructuras condicionales.

# 🚨 Problema
Cuando una clase tiene múltiples comportamientos dependiendo de su estado, normalmente aparecen grandes bloques de código como:

```python
if estado == "borrador":
    guardar_borrador()

elif estado == "revision":
    enviar_revision()

elif estado == "publicado":
    mostrar_publicacion()

elif estado == "archivado":
    bloquear_edicion()
```

# Problemas:
- muchos if/else
- alta complejidad
- difícil mantenimiento
- violación del principio Open/Closed
- código difícil de extender

# ✅ Solución
El patrón State:

- encapsula cada estado en una clase independiente
- delega el comportamiento al estado actual
- permite cambiar de estado dinámicamente
- elimina grandes bloques condicionales

# 🧠 Estructura del patrón
# Componentes

## Context
Objeto principal que mantiene una referencia al estado actual.

## State
Interfaz común para todos los estados.

## Concrete State
Implementaciones concretas que representan comportamientos específicos.

# 📊 Diagrama
```
+------------------+
|      State       |
+------------------+
| + manejar()      |
+------------------+
          ▲
          |
----------------------------
|                          |
▼                          ▼
+---------------+   +---------------+
| Estado A      |   | Estado B      |
+---------------+   +---------------+
| + manejar()   |   | + manejar()   |
+---------------+   +---------------+

          ▲
          |
+------------------+
|     Context      |
+------------------+
| - estado         |
+------------------+
| + request()      |
| + cambiarEstado()|
+------------------+
```

# 💻 Ejemplo en Python
```python
class Estado(object):

    def manejar(self):
        pass


class EstadoAbierto(Estado):

    def manejar(self):
        print("La puerta está abierta")


class EstadoCerrado(Estado):

    def manejar(self):
        print("La puerta está cerrada")


class Puerta(object):

    def __init__(self):
        self.estado = EstadoCerrado()

    def cambiar_estado(self, estado):
        self.estado = estado

    def mostrar_estado(self):
        self.estado.manejar()

# Uso

puerta = Puerta()

puerta.mostrar_estado()

puerta.cambiar_estado(EstadoAbierto())

puerta.mostrar_estado()
```

▶️ Salida
La puerta está cerrada
La puerta está abierta

# 💻 Ejemplo real: Pedido de e-commerce
```python
class EstadoPedido(object):

    def procesar(self):
        pass


class Generado(EstadoPedido):

    def procesar(self):
        print("Pedido generado")


class Pagado(EstadoPedido):

    def procesar(self):
        print("Pedido pagado")


class Enviado(EstadoPedido):

    def procesar(self):
        print("Pedido enviado")


class Pedido(object):

    def __init__(self):
        self.estado = Generado()

    def cambiar_estado(self, estado):
        self.estado = estado

    def mostrar_estado(self):
        self.estado.procesar()


pedido = Pedido()

pedido.mostrar_estado()

pedido.cambiar_estado(Pagado())
pedido.mostrar_estado()

pedido.cambiar_estado(Enviado())
pedido.mostrar_estado()
```

▶️ Salida
Pedido generado
Pedido pagado
Pedido enviado

# ✅ Ventajas
- Elimina grandes bloques de if/else
- Facilita mantenimiento
- Permite agregar nuevos estados fácilmente
- Cumple Open/Closed Principle
- Reduce complejidad del contexto
- Mejora legibilidad

# ❌ Desventajas
- Incrementa número de clases
- Puede ser excesivo para pocos estados
- Requiere diseño inicial más elaborado

# 📌 Cuándo usar State
Usa State cuando:

- un objeto tenga múltiples estados
- el comportamiento cambie según el estado
- existan muchos condicionales dependientes del estado
- los cambios de estado sean frecuentes

# 🚫 Cuándo evitarlo
Evita State cuando:

- existan pocos estados
- la lógica sea muy simple
- el costo de crear clases adicionales no se justifique

# 🏗️ Casos de uso reales
- Pedidos de e-commerce
- Máquinas expendedoras
- Workflow de documentos
- Estados de tickets
- Procesos bancarios
- Videojuegos
- Reproductores multimedia
- Máquinas de estados finitos (FSM)

# 🎯 Conclusión
El patrón State permite:

- modelar ciclos de vida complejos
- eliminar estructuras condicionales extensas
- encapsular comportamientos dependientes del estado
- facilitar la evolución del sistema

Es uno de los patrones de comportamiento más utilizados para representar procesos que cambian dinámicamente a lo largo del tiempo.