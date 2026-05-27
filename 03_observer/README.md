# Observer Pattern

El patrón de diseño **Observer** es un patrón de comportamiento que define una dependencia uno-a-muchos entre objetos, de modo que cuando un objeto cambia de estado, todos sus observadores son notificados automáticamente.

# 📌 Objetivo
Permitir que múltiples objetos sean notificados automáticamente cuando ocurra un cambio en otro objeto.

# 🚨 Problema
Cuando varios objetos dependen del estado de otro objeto, normalmente se generan:
- alto acoplamiento
- dependencias rígidas
- dificultad para mantener el sistema
- llamadas manuales repetitivas

Ejemplo problemático:

```python
usuario.actualizar_email()

servicio_notificaciones.notificar()
servicio_logs.registrar()
servicio_estadisticas.actualizar()
servicio_cache.refrescar()
```

Cada vez que cambia el objeto principal hay que actualizar manualmente todos los sistemas relacionados.

# ✅ Solución
El patrón Observer:

- desacopla el objeto principal de sus dependencias
- permite registrar observadores dinámicamente
- notifica automáticamente cambios de estado

# 🧠 Estructura del patrón
# Componentes

## Subject (Observable)

## Objeto principal que:
- almacena observadores
- registra observadores
- elimina observadores
- notifica cambios

## Observer
Interfaz común para todos los observadores.

## Concrete Observer
Implementaciones concretas que reaccionan a eventos.

# 📊 Diagrama
```
+----------------------+
|       Subject        |
+----------------------+
| + attach()           |
| + detach()           |
| + notify()           |
+----------------------+
           ▲
           |
+----------------------+
|   ConcreteSubject    |
+----------------------+

        notifica
           |
           ▼

+----------------------+
|      Observer        |
+----------------------+
| + update()           |
+----------------------+
           ▲
   -----------------
   |               |
+-----------+ +-----------+
| ObserverA | | ObserverB |
+-----------+ +-----------+
```

# 💻 Ejemplo en Python
```python
class Observer(object):

    def update(self, mensaje):
        pass


class EmailObserver(Observer):

    def update(self, mensaje):
        print("Email recibido: {}".format(mensaje))


class SMSObserver(Observer):

    def update(self, mensaje):
        print("SMS recibido: {}".format(mensaje))


class Subject(object):

    def __init__(self):
        self.observers = []

    def attach(self, observer):
        self.observers.append(observer)

    def detach(self, observer):
        self.observers.remove(observer)

    def notify(self, mensaje):

        for observer in self.observers:
            observer.update(mensaje)


# Uso

subject = Subject()

email = EmailObserver()
sms = SMSObserver()

subject.attach(email)
subject.attach(sms)

subject.notify("Nuevo pedido generado")
```

▶️ Salida
Email recibido: Nuevo pedido generado
SMS recibido: Nuevo pedido generado

# 💻 Ejemplo real: Sistema de notificaciones
```python
class UsuarioObserver(object):

    def update(self, evento):
        print("Usuario notificado: {}".format(evento))


class LogObserver(object):

    def update(self, evento):
        print("Log registrado: {}".format(evento))


class SistemaPedidos(object):

    def __init__(self):
        self.observers = []

    def agregar_observer(self, observer):
        self.observers.append(observer)

    def notificar(self, evento):

        for observer in self.observers:
            observer.update(evento)

    def crear_pedido(self):

        print("Pedido creado")
        self.notificar("Pedido exitoso")


sistema = SistemaPedidos()

sistema.agregar_observer(UsuarioObserver())
sistema.agregar_observer(LogObserver())

sistema.crear_pedido()
```

▶️ Salida
Pedido creado
Usuario notificado: Pedido exitoso
Log registrado: Pedido exitoso

# ✅ Ventajas
- Reduce acoplamiento
- Permite comunicación desacoplada
- Facilita extensibilidad
- Soporta múltiples observadores
- Cumple Open/Closed Principle
- Favorece arquitecturas orientadas a eventos

# ❌ Desventajas
- Puede generar muchas notificaciones
- Difícil rastrear flujo de eventos
- Riesgo de memory leaks si no se eliminan observers
- Complejidad en sistemas grandes

# 📌 Cuándo usar Observer
Usa Observer cuando:

- múltiples objetos dependan de cambios de estado
- necesites arquitectura basada en eventos
- quieras desacoplar componentes
- existan sistemas reactivos

# 🚫 Cuándo evitarlo
Evita Observer cuando:

- el sistema sea muy pequeño
- las dependencias sean simples
- no existan múltiples suscriptores
- la sobrecarga de eventos sea innecesaria

# 🏗️ Casos de uso reales
- Sistemas de notificaciones
- Eventos GUI
- Chat en tiempo real
- Brokers de mensajería
- WebSockets
- Event Bus
- Sistemas de suscripción
- Arquitecturas reactivas

# 🎯 Conclusión
El patrón Observer permite:

- crear sistemas reactivos
- desacoplar componentes
- manejar eventos dinámicamente

Es uno de los patrones más importantes en arquitecturas modernas orientadas a eventos.