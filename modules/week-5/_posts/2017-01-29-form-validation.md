---
title: Form Validation
module: 5
---

# Form Validation

It is possible to use HTML5 to inform users if they have entered information correctly. This is known as "form validation".

Traditionally, form validation occurred with JavaScript, but HTML5 has added this feature.

Validation helps ensure the user enters information correctly and with the correct "types" of data. Validation before submitting a form to a server reduces server load and enables users to more quickly see if there are errors in their form.

An example of form validation is the `required` attribute.

This is not yet supported on all browsers (i.e. Safari), so it may be necessary to also include other types of form validation (Such as with JavaScript).

#### { TODO: }

Try hitting the submit button without entering details into all of the fields. (Make sure you do this in something other then Safari.)


```html
<form action="http://www.example.com/login/" method="post">
    <label for="username">Username:</label>
    <input type="text" name="username" id="username" required /><br />
    <label for="password">Password:</label>
    <input type="password" name="password" id="password" required />
    <input type="submit" value="Submit" />
</form>
```

<div class="displayed_code_example">
<form action="#" method="get">
    <label for="username">Username:</label>
    <input type="text" name="username" id="username" required="required" /><br />
    <label for="password">Password:</label>
    <input type="password" name="password" id="password" required />
    <input type="submit" value="Submit" />
</form>
</div>
