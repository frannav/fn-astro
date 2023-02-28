---
author: Fran nav
pubDatetime: 2023-02-28T19:22:00Z
title: Consejos y buenas prácticas de HTML
postSlug: html-basics
draft: false
ogImage: ""
tags:
  - HTML
description: Consejos que nos serán de ayuda a la hora de crear sitios web bien estructurados y accesibles
references: [
]
---

# HTML consejos y buenas prácticas

HTML es el esqueleto de nuestra página web, por ello es importante seguir una serie de buenas prácticas para asegurarnos de crear webs accesibles, eficientes y fáciles de mantener.

# Estructura semántica

Debemos usar las etiquetas apropiadas para indicar el tipo de contenido que estamos presentando. Hay que evitar usar el `<div>` para todo y empezar a usar las etiquetas adecuadas. Por ejemplo, usar la etiqueta `<nav>` para la navegación, o la etiqueta `<article>` a la hora de presentar un artículo.

# Imágenes

Cuando agreguemos imágenes a una web, no debemos de olvidarnos de agregar un atributo `alt` a la etiqueta `<img>`. Este atributo proporciona un texto alternativo que se mostrará si la imagen no se puede cargar o si el usuario está utilizando un lector de pantalla. El texto alternativo también es importante para la accesibilidad y puede ayudar a mejorar el SEO de tu página. 

# Enlaces y botones

Los enlaces `<a>` y los botones `<button>` son elementos básicos de cualquier web, pero es muy importante utilizarlos de manera adecuada. Un enlace se encarga de llevar al usuario a otra página web o sección de la misma mientras que los botones sirven para llevar a cabo una acción. 

# Valida el HTML

Existen herramientas que nos sirven para validar que nuestro código HTML cumple con los estándares y recomendaciones actuales.
- <a href="https://validator.w3.org/" target="_blank">W3C validator </a>

# Scripts

La etiqueta `<script>` se utiliza para indicar que se va a ejecutar un script dentro del documento HTML.
Algunos atributos son:
- `defer` indica que el script va a cargarse una vez que el documento HTML ha sido procesado por el navegador.
- `async` este atributo booleano indica al navegador que el código se ejecute de forma asíncrona. (No es compatible con el 100% de los navegadores aún)
Los scripts sin el atributo `defer`o `async` son ejecutados inmediatamente antes de que el navegador continúe procesando la página.