## Singleton Pattern
El patrón de diseño Singleton es un patrón creacional que garantiza que una clase tenga una única instancia y proporciona un punto global de acceso a ella.

Características principales del patrón Singleton
1. Una sola instancia
    - Solo puede existir un objeto de esa clase durante toda la ejecución de la aplicación.

Ejemplo típico:

Conexión a base de datos
Logger
Configuración global
Caché compartida

2. Acceso global
   - La instancia se obtiene desde cualquier parte del sistema mediante un método estático o global.
3. Constructor restringido
4. Inicialización controlada
5. Estado compartido
    - Todos los módulos usan exactamente el mismo objeto y comparten el mismo estado.

#### Ventajas
- Evita múltiples instancias innecesarias
- Centraliza recursos compartidos
- Ahorra memoria
- Útil para configuraciones globales

#### Desventajas
- Introduce acoplamiento global
- Dificulta pruebas unitarias
- Puede causar problemas de concurrencia
- Viola parcialmente el principio de responsabilidad única