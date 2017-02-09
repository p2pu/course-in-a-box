---
title: Document Elements
module: 3
---
# Main Document Elements

Everything is HTML is described through elements. This includes the larger structure of the main document.

## Document Type
`<!DOCTYPE>`
The document type element is the first element in an HTML document, and should be placed on the first line in a document. This element tells the browser's processor what type of HTML document it is.

## Root Element
`<html>...</html>`
The _Root element_ of an HTML document contains all other elements and text. This element is necessary and should always be placed outside of all content.

## Head Element
`<head>...</head>`
The _head_ element is a container for processing information and document metadata. This will include elements that may link to other files, hold the author information, and pass the name of the page to the processor.

## Body Element
`<body>...</body>`
The _body_ element is a container for all of the content and data that is intended to be displayed on a browser’s page.

## Standard Document Structure
These elements will always be nested as follows for an HTML document:

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- Meta data and information about your site -->
    </head>

    <body>
        <!-- Content for your web page or site -->
    </body>
</html>
```
