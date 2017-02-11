---
title: The Input Element
module: 5
---

# Input Element for Forms

The "Input Element" is used to collect data from users. This is an element that you will likely use often as a web developer. The data collected by this element can be sent as part of a bunch of data in a form element to a server. This element can also be accessed through client-side javascript, allowing developers to create ways of getting data they can process on the client-computer.

The "input" element is an 'empty element'; therefore, the element only requires a single tag. (`<input />`).

## Attributes

### `type`

By itself, the "input element" will not do anything. The "input element" requires the `type=""` to define the type of data it will collect, as well as how it will be displayed.

### `name`

Each form control requires a `name=""` attribute. This information is sent as part of a "name:value" pair to the server.

For example, an "input element" with the name attribute set to "username" (i.e. `name="username"`) might collect the data "Michael", which would then be sent to the server as `username:Michael`.

### `id`

As with many other elements in HTML, you should assign a unique element ID that can be used by other languages to refer to the specific form.

This `id` attribute allows javascript to use data from a form element. (This is of course in addition to the use of the `id` attribute by the styling engine; discussed later in the course.)

## Example

The following code shows an "input" element, wrapped in a "form" element, along with the three _required_ attributes.

```html
<form class="formClass" id="exampleForm" action="index.html" method="post">
    <input type="text" name="username" id="username_input" />
</form>
```


## Input `type`'s

The following pages will discuss some of the possible input element `type`'s possible in HTML5.
