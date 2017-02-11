---
title: Submit Button
module: 5
---

# The Submit Button

The submit button is used to send a form to a server.

This is the one form type that does not require a name attribute.

The value="" attribute is used to specify the text that appears on the button. It is good practice to always specify this, as opposed to allowing the browser to use its default "submit query" text.

The appearance of submit buttons is dictated by individual browsers. However, these can be styles using CSS.

```html
<form action="http://www.example.com/subscribe.php">
    <p>Subscribe to our email list:</p>
    <input type="text" name="email" />
    <input type="submit" name="subscribe" value="Subscribe" />
</form>
```

<div class="displayed_code_example">
<form action="#">
    <p>Subscribe to our email list:</p>
    <input type="text" name="email" />
    <input type="submit" name="subscribe" value="Subscribe" />
</form>
</div>
