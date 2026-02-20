# Lab2PrimerComputo

**Tabla de selectores**

| Tipo de selector | Elemento afectado | Descripción de la tarea |
|---|---|---|
| `getElementById` | `h1#titulo`       | Clic para alternar la clase `resaltado` (resaltar/no resaltar). |
| `querySelector` | `.parrafo` (primer) | Clic cambia su texto a un mensaje simple. |
| `querySelectorAll` | `p.parrafo` | Aplica color a todos los párrafos con la clase. |
| `getElementsByClassName` | `li.item` | Clic en cada `li` muestra su texto con `alert`. |
| `getElementsByTagName` | `button` | El primer `button` alterna la visibilidad de `.caja`. |
| `getElementById` | `img#imagen` | Clic cambia la imagen por otra sencilla. |
| `getElementById` | `select#selector` | `change` actualiza el texto del primer párrafo. |
| `getElementById` | `input#entrada` / `span#valor` | `input` muestra el valor escrito en el `span`. |
| `getElementById` | `form#formu` / `textarea#coment` | `submit` muestra el comentario en un `alert`.

**Respuestas**

- ¿Cuál es la ventaja de utilizar `getElementById` frente al `querySelector`?

  `getElementById` está pensado para buscar por `id` y suele ser más directo y rápido cuando conoces el `id`. `querySelector` permite cualquier selector CSS. `getElementById` devuelve un `Element` o `null`.

- ¿En qué situación es preferible usar `querySelectorAll` en lugar de `querySelector`?

  Cuando necesitas todos los elementos que coinciden con un selector para iterar y aplicar cambios a cada uno. `querySelector` devuelve solo el primer elemento.

- ¿Qué tipo de dato devuelve cada uno?

  - `getElementById(id)` → `Element` o `null`.
  - `querySelector(selector)` → primer `Element` que coincide o `null`.
  - `querySelectorAll(selector)` → `NodeList` (estático).
  - `getElementsByClassName(className)` → `HTMLCollection` (en vivo).
  - `getElementsByTagName(tagName)` → `HTMLCollection` (en vivo).
