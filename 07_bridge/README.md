# Bridge Pattern

El patrón de diseño **Bridge** es un patrón estructural que desacopla una abstracción de su implementación para que ambas puedan evolucionar independientemente.

# 📌 Objetivo
Separar una abstracción de su implementación para evitar una explosión de clases cuando ambas dimensiones pueden variar de forma independiente.

# 🚨 Problema
Supongamos que tenemos una jerarquía de dispositivos:

```text
Dispositivo
├── TV
├── Radio
└── Computador
```

Y además queremos soportar múltiples controles remotos:

```text
ControlBasico
ControlAvanzado
ControlVoz
```

Si utilizamos herencia, terminamos con:

```text
TVControlBasico
TVControlAvanzado
TVControlVoz

RadioControlBasico
RadioControlAvanzado
RadioControlVoz

ComputadorControlBasico
ComputadorControlAvanzado
ComputadorControlVoz
```

Problemas:
- explosión de clases
- mantenimiento difícil
- bajo nivel de reutilización
- fuerte acoplamiento

# ✅ Solución
El patrón Bridge divide el problema en dos jerarquías independientes:

### Abstracción
Representa el concepto principal.

### Implementación
Representa la forma concreta de ejecutar las operaciones.

Ambas jerarquías se comunican mediante composición.

# 🧠 Estructura del patrón

## Componentes

### Abstraction
Define la interfaz de alto nivel.

### Refined Abstraction
Extiende la abstracción.

### Implementor
Define la interfaz de implementación.

### Concrete Implementor
Implementaciones concretas.

# 📊 Diagrama

```text
                 +----------------------+
                 |     Abstraction      |
                 +----------------------+
                 | - implementor        |
                 +----------------------+
                 | + operacion()        |
                 +----------------------+
                            |
                            ▼
                 +----------------------+
                 |     Implementor      |
                 +----------------------+
                 | + operacionImpl()    |
                 +----------------------+
                          ▲
               -------------------------
               |                       |
               ▼                       ▼
    +------------------+   +------------------+
    | ImplementacionA  |   | ImplementacionB  |
    +------------------+   +------------------+

               ▲
               |
    +-----------------------+
    | RefinedAbstraction    |
    +-----------------------+
```

# 💻 Ejemplo en Python
```python
class Dispositivo(object):

    def encender(self):
        pass

    def apagar(self):
        pass


class TV(Dispositivo):

    def encender(self):
        print("TV encendida")

    def apagar(self):
        print("TV apagada")


class Radio(Dispositivo):

    def encender(self):
        print("Radio encendida")

    def apagar(self):
        print("Radio apagada")


class ControlRemoto(object):

    def __init__(self, dispositivo):
        self.dispositivo = dispositivo

    def encender(self):
        self.dispositivo.encender()

    def apagar(self):
        self.dispositivo.apagar()


tv = TV()

control = ControlRemoto(tv)

control.encender()
control.apagar()
```

▶️ Salida

```text
TV encendida
TV apagada
```

# 💻 Ejemplo real: Sistema de notificaciones
```python
class CanalNotificacion(object):

    def enviar(self, mensaje):
        pass


class Email(CanalNotificacion):

    def enviar(self, mensaje):
        print("Email:", mensaje)


class SMS(CanalNotificacion):

    def enviar(self, mensaje):
        print("SMS:", mensaje)


class Notificacion(object):

    def __init__(self, canal):
        self.canal = canal

    def enviar(self, mensaje):
        self.canal.enviar(mensaje)


class NotificacionUrgente(Notificacion):

    def enviar(self, mensaje):
        self.canal.enviar("[URGENTE] {}".format(mensaje))


notificacion = NotificacionUrgente(Email())

notificacion.enviar("Servidor caído")
```

▶️ Salida

```text
Email: [URGENTE] Servidor caído
```

# ✅ Ventajas
- Reduce explosión de clases
- Favorece composición sobre herencia
- Permite evolución independiente
- Incrementa reutilización
- Facilita mantenimiento
- Cumple Open/Closed Principle

# ❌ Desventajas
- Incrementa complejidad inicial
- Introduce más clases e interfaces
- Puede ser excesivo para sistemas simples

# 📌 Cuándo usar Bridge
Usa Bridge cuando:

- existan múltiples dimensiones de variación
- quieras evitar herencia compleja
- abstracción e implementación deban evolucionar independientemente
- existan muchas combinaciones posibles

# 🚫 Cuándo evitarlo
Evita Bridge cuando:

- solo exista una implementación
- el sistema sea pequeño
- la herencia simple sea suficiente

# 🏗️ Casos de uso reales

- Sistemas de notificaciones
- Drivers de bases de datos
- Interfaces gráficas multiplataforma
- Motores de renderizado
- Integraciones con proveedores externos
- Sistemas de almacenamiento
- Gateways de pago

# ⚖️ Bridge vs Adapter

| Bridge | Adapter |
|----------|----------|
| Diseñado desde el inicio | Aplicado después |
| Separa abstracción e implementación | Convierte interfaces incompatibles |
| Previene problemas futuros | Corrige incompatibilidades existentes |

# ⚖️ Bridge vs Strategy

| Bridge | Strategy |
|----------|----------|
| Separa jerarquías | Cambia algoritmos |
| Relación permanente | Relación dinámica |
| Enfocado en estructura | Enfocado en comportamiento |

# ⚖️ Bridge vs Decorator

| Bridge | Decorator |
|----------|----------|
| Separa abstracción e implementación | Agrega funcionalidades |
| Modifica estructura | Modifica comportamiento |
| Evita explosión de clases | Evita herencia excesiva |

# 🔥 Buenas prácticas
- Favorecer composición sobre herencia
- Mantener abstracciones independientes
- Definir interfaces claras
- Evitar acoplamiento entre capas

# ⚠️ Problemas comunes

## Sobreingeniería
Aplicar Bridge cuando existe una única implementación puede introducir complejidad innecesaria.

## Implementaciones demasiado acopladas
```python
class TV(object):

    def usar_control_basico(self):
        pass
```

Esto rompe el propósito del patrón porque la implementación comienza a depender de la abstracción.

## Jerarquías mal definidas
Si las responsabilidades no están bien separadas, el patrón pierde efectividad.

# 📚 Ejemplos en frameworks

## Django

Backends de almacenamiento:

```python
FileSystemStorage
S3Storage
AzureStorage
```

La aplicación utiliza la misma abstracción independientemente del proveedor.


## Spring Boot
Implementaciones de servicios desacopladas mediante interfaces.

## Angular
Servicios intercambiables mediante Dependency Injection.

## Java JDBC
La API JDBC funciona como abstracción mientras que los drivers concretos implementan la comunicación con cada base de datos.

# 🎯 Conclusión
El patrón Bridge permite:

- desacoplar abstracción e implementación
- evitar explosión de clases
- facilitar mantenimiento
- mejorar reutilización
- permitir evolución independiente de componentes

Es uno de los patrones estructurales más útiles cuando existen múltiples dimensiones de cambio dentro de una aplicación y se desea mantener una arquitectura flexible y escalable.