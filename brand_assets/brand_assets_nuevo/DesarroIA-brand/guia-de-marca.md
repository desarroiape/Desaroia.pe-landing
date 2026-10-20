# DesarroIA

Sistema de marca de DesarroIA.pe, agencia de inteligencia artificial y automatización en Lima, Perú. Base para rediseñar desarroiape.com y todo lo que salga con la marca.

**Idea central:** blanco y negro como base, un solo acento azul cobalto. Se ve técnico por la tipografía geométrica y el detalle monoespaciado, y formal por la sobriedad: mucho espacio en blanco, nada de degradados ni efectos.

## El logo: D · Bucle

Una "D" trazada como una flecha que vuelve sobre sí misma (automatización: procesos que se repiten solos) con una chispa en el centro (la inteligencia artificial que los mueve).

- **Logo horizontal** (`desarroia-logo-horizontal-negro` / `-blanco`): la versión por defecto. Header de la web, firmas de correo, propuestas.
- **Logo vertical** (`desarroia-logo-vertical-*`): espacios cuadrados, portadas, merch.
- **Símbolo solo** (`desarroia-simbolo-*`): cuando la marca ya está presente o el espacio es pequeño.
- **Ícono de app** (`desarroia-app-icon-negro` / `-azul`): foto de perfil de WhatsApp, Instagram, LinkedIn y Google Business.
- **Favicon** (`favicon.svg` / `favicon.png`): la pestaña del navegador.

Reglas de uso:

- Área de respeto: alrededor del logo deja libre como mínimo la altura de la chispa.
- Tamaño mínimo: logo horizontal 120px de ancho en pantalla; símbolo solo 20px.
- Sobre fondos claros usa la versión negra; sobre `surface-inverse` o fotos oscuras, la blanca.
- El símbolo azul (`accent`) es solo para piezas digitales de acento; el logo completo siempre va en negro o blanco.
- No lo rotes, no le pongas sombras ni degradados, no cambies la tipografía del nombre.

El nombre se escribe **DesarroIA** en texto corrido. En el logo va en minúsculas como `desarroIA.pe`, con "IA" en negrita y ".pe" en gris.

## Color

Neutros primero. La página es blanca (`surface-0`) con texto `ink`; `surface-1` alterna secciones y `surface-inverse` (negro) marca los momentos fuertes: hero, CTA final y footer.

`accent` (#2B44FF) es el único color de marca. Se reserva para la acción principal (el botón "Agendar llamada"), los enlaces, el foco del teclado y un dato destacado por sección. Si en una pantalla hay más de dos elementos azules, sobra alguno. `accent-tint` sirve para chips y fondos suaves, siempre con texto `accent` encima.

`success` solo indica estados (confirmado, en vivo, enviado), nunca decora.

Todas las combinaciones de texto cumplen 4.5:1 en ambos temas: `accent` sobre blanco da 6.2:1 e `ink-muted` sobre blanco 6.7:1.

## Tipografía

- **Space Grotesk** (`display`) para titulares: geométrica, con carácter técnico. Titulares cortos, en frase normal; las mayúsculas quedan para el antetítulo.
- **Inter** (`sans`) para todo el texto corrido: neutra y muy legible.
- **JetBrains Mono** (`mono`) solo para antetítulos (`eyebrow`), métricas y etiquetas tipo "app · nueva cotización". Es el guiño de "esto está hecho con código".

Las tres se cargan desde Google Fonts.

## Espacio y forma

Escala de espacio: 4, 8, 16, 24, 40, 96. Las secciones respiran (`space-6` en escritorio). Las esquinas son suaves pero no redondas: `radius-md` (12px) en botones y tarjetas, `radius-lg` en bloques grandes. Nada de pills salvo chips. Para separar se usan bordes `line`, no sombras.

## Voz

Directa, concreta y sin jerga. Se habla de resultados del cliente, no de tecnología: "Lista en minutos, con precios correctos" en vez de "Optimizamos con modelos de lenguaje". Se trata de **tú** al cliente. Las cifras van en `mono` cuando son datos ("2 sem.", "0 errores").

## Iconografía

Íconos de trazo de 1.5–2px, con esquinas redondeadas, en `ink` o `ink-muted`; se recomienda Lucide. No uses emojis en la web.
