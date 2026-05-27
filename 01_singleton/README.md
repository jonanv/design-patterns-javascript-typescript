# Singleton Pattern

El patrón de diseño **Singleton** es un patrón creacional que garantiza que una clase tenga una única instancia y proporciona un punto global de acceso a ella.

# 📌 Objetivo
Asegurar que solo exista una instancia de una clase durante toda la ejecución de la aplicación.

# 🚨 Problema
En algunos casos se necesita que un recurso sea único y compartido globalmente.

Ejemplos:
- Logger
- Configuración global
- Conexión a base de datos
- Caché
- Pool de conexiones

Si múltiples instancias son creadas:
- puede haber inconsistencias
- consumo innecesario de memoria
- conflictos de estado
- problemas de sincronización

# ✅ Solución
El patrón Singleton:
- restringe la creación de instancias
- controla el acceso al objeto
- devuelve siempre la misma instancia

---

# 🧠 Estructura del patrón
# Componentes

### Singleton
Clase responsable de:
- almacenar su única instancia
- controlar la creación del objeto
- proporcionar acceso global


# 📊 Diagrama

```text id="q70z6v"
+----------------------+
|      Singleton       |
+----------------------+
| - instancia          |
+----------------------+
| + getInstance()      |
| + operacion()        |
+----------------------+
```

# 💻 Ejemplo en Python
```python
class Singleton(object):

    _instance = None

    def __new__(cls):

        if cls._instance is None:
            cls._instance = super(Singleton, cls).__new__(cls)

        return cls._instance


# Uso

a = Singleton()
b = Singleton()

print(a is b)
```

▶️ Salida
True

# ✅ Ventajas
- Controla acceso global
- Evita múltiples instancias
- Ahorra memoria
- Centraliza recursos compartidos
- Útil para configuraciones globales

# ❌ Desventajas
- Introduce estado global
- Incrementa el acoplamiento
- Dificulta pruebas unitarias
- Puede causar problemas de concurrencia
- Viola parcialmente el principio de responsabilidad única

# 📌 Cuándo usar Singleton
Usa Singleton cuando:

- Deba existir una única instancia
- El estado deba ser compartido globalmente
- Se necesite acceso centralizado a recursos

# 🚫 Cuándo evitarlo
Evita Singleton cuando:

- Necesites bajo acoplamiento
- Quieras facilitar testing
- Existan problemas de concurrencia
- El estado global pueda generar errores

# 🏗️ Casos de uso reales
- Loggers
- Configuración de aplicaciones
- Pools de conexiones
- Drivers de impresoras
- Cachés
- Gestores de sesiones
- Configuración de frameworks

# 🎯 Conclusión
El patrón Singleton permite:

- controlar instancias únicas
- compartir estado global
- centralizar recursos importantes

Aunque es ampliamente utilizado, debe aplicarse cuidadosamente para evitar problemas de acoplamiento y testing.