# Builder Pattern

El patrón de diseño **Builder** es un patrón creacional que permite construir objetos complejos paso a paso, separando el proceso de construcción de la representación final del objeto.


# 📌 Objetivo
Separar la construcción de un objeto complejo de su representación para que el mismo proceso pueda crear diferentes representaciones.

# 🚨 Problema
Cuando un objeto tiene:
- muchos atributos
- múltiples configuraciones
- combinaciones complejas
- constructores enormes

el código se vuelve difícil de mantener.

Ejemplo problemático:

```python
usuario = Usuario(
    nombre,
    apellido,
    email,
    telefono,
    direccion,
    ciudad,
    pais,
    codigo_postal,
    rol,
    permisos,
    configuracion,
    preferencias
)
```

# Problemas:
- constructores gigantes
- baja legibilidad
- errores de orden de parámetros
- dificultad para extender

# ✅ Solución
El patrón Builder:

- construye objetos paso a paso
- desacopla creación y representación
- mejora legibilidad
- facilita configuraciones complejas

# 🧠 Estructura del patrón
# Componentes

## Product
Objeto complejo que será construido.

## Builder
Interfaz que define pasos de construcción.

## Concrete Builder
Implementación concreta del proceso de construcción.

## Director
Controla el orden de construcción.

# 📊 Diagrama
```
+------------------+
|     Director     |
+------------------+
| + construir()    |
+------------------+
          |
          ▼
+------------------+
|     Builder      |
+------------------+
| + buildParteA()  |
| + buildParteB()  |
| + getResult()    |
+------------------+
          ▲
          |
+------------------------+
|   ConcreteBuilder      |
+------------------------+
| + buildParteA()        |
| + buildParteB()        |
| + getResult()          |
+------------------------+
          |
          ▼
+------------------+
|     Product      |
+------------------+
```

# 💻 Ejemplo en Python
```python
class Computador(object):

    def __init__(self):
        self.cpu = None
        self.ram = None
        self.disco = None

    def mostrar(self):

        print("CPU:", self.cpu)
        print("RAM:", self.ram)
        print("Disco:", self.disco)


class ComputadorBuilder(object):

    def __init__(self):
        self.computador = Computador()

    def agregar_cpu(self, cpu):
        self.computador.cpu = cpu
        return self

    def agregar_ram(self, ram):
        self.computador.ram = ram
        return self

    def agregar_disco(self, disco):
        self.computador.disco = disco
        return self

    def build(self):
        return self.computador


# Uso

pc = (
    ComputadorBuilder()
    .agregar_cpu("Intel i9")
    .agregar_ram("32GB")
    .agregar_disco("1TB SSD")
    .build()
)

pc.mostrar()
```

▶️ Salida
CPU: Intel i9
RAM: 32GB
Disco: 1TB SSD

# 💻 Ejemplo real: Creación de solicitudes HTTP
```python
class HttpRequest(object):

    def __init__(self):
        self.url = None
        self.method = None
        self.headers = {}
        self.body = None

    def mostrar(self):

        print("URL:", self.url)
        print("METHOD:", self.method)
        print("HEADERS:", self.headers)
        print("BODY:", self.body)


class HttpRequestBuilder(object):

    def __init__(self):
        self.request = HttpRequest()

    def set_url(self, url):
        self.request.url = url
        return self

    def set_method(self, method):
        self.request.method = method
        return self

    def add_header(self, key, value):
        self.request.headers[key] = value
        return self

    def set_body(self, body):
        self.request.body = body
        return self

    def build(self):
        return self.request


request = (
    HttpRequestBuilder()
    .set_url("/api/users")
    .set_method("POST")
    .add_header("Authorization", "Bearer token")
    .set_body("{ 'name': 'Juan' }")
    .build()
)

request.mostrar()
```

▶️ Salida
URL: /api/users
METHOD: POST
HEADERS: {'Authorization': 'Bearer token'}
BODY: { 'name': 'Juan' }

# ✅ Ventajas
- Mejora legibilidad
- Facilita creación de objetos complejos
- Reduce constructores gigantes
- Permite construcción paso a paso
- Favorece inmutabilidad
- Cumple Single Responsibility Principle

# ❌ Desventajas
- Incrementa número de clases
- Puede ser innecesario para objetos simples
- Mayor complejidad inicial

# 📌 Cuándo usar Builder
Usa Builder cuando:

- el objeto tenga muchos parámetros
- existan configuraciones complejas
- quieras construir objetos paso a paso
- necesites objetos inmutables
- existan múltiples representaciones

# 🚫 Cuándo evitarlo
Evita Builder cuando:

- el objeto sea simple
- tenga pocos atributos
- la construcción no sea compleja

# 🏗️ Casos de uso reales
- Construcción de consultas SQL
- Configuración de objetos HTTP
- Generación de documentos
- Creación de UI Components
- Configuración de aplicaciones
- ORMs
- APIs Fluent

# 🎯 Conclusión
El patrón Builder permite:

- construir objetos complejos paso a paso
- mejorar legibilidad
- evitar constructores enormes
- crear APIs más limpias y mantenibles

Es uno de los patrones creacionales más utilizados en aplicaciones modernas.