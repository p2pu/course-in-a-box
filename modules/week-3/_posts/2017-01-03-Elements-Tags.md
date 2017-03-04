---
title: Elements & Tags
module: 3
---
# Elements & Tags in HTML

**HTML** (_Hypyertext Markup Language_) is a language that describes the structure of a document intended for viewing through a browser.
The browser's processor identifies _elements_ of the document by looking for _tags_ embedded directly in the text.
These elements are then parsed into the _Document Object Model_ (DOM).

## Elements
An HTML document is composed of a tree of HTML elements. An **element** is an individual component of an HTML document. Elements denote to the processor structure and semantic meaning of the document. Elements may also be nested or encapsulated within other elements.

## Tags
Elements are identified in a document through tags. A **tag** is code that is syntactically unique from the text content of the document. In HTML, all tags include a less than and greater than sign, with the tag typed between.

```html
<html>
```

### Closing Tag
Most elements include an "opening" and "closing" tag that the processor uses to identify the beginning and end of the element with. Closing tags are identical to opening tags, except that they contain a forward-slash between the less than sign and the tag text.

```html
<html>
    <openingTag>
    </closingTag>
</html>
```

## Attributes
Attributes provide additional information about an HTML element. This may include information such as languages (us-english vs. french), URL links for text, the size to display a picture, or ways of identifying specific elements.

Attributes are always placed inside the opening tag for the element they refer to. Attributes are always provided in a key=“value” pair. The _key_ is an identifier the the browser processor will recognize. These keys are defined by the w3 consortium that defined HTML5 specification. The _value_ provides information about the attribute. The value is always surrounded by double quotations. (One reason for this is that it allows for spaces to be used within the value for an attribute.) Furthermore, the attribute will have one space placed between the tag label and the attribute, as well as between any subsequent attributes.

```html
<html lang="en-US" class="htmlElem class2">
```

# { TODO: }
Read pages 12-28 in chapter 1 of the Duckett book.
