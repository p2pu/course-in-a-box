---
title: Image Button
module: 5
---

# The Image Button

You can use an image for a submit button. Use the `type="image"`.

NOTE: This element will then need to follow good image use practice. This means it should include the `alt`, `width`, and `height` attributes following the `src` attribute.

```html
<form action="http://www.example.org/subscribe.php">
    <p>Subscribe to our email list:</p>
    <input type="text" name="email" />
    <input type="image" src="images/subscribe.jpg" alt="subscribe button image" width="100" height="20" />
</form>
```

<div class="displayed_code_example">
<form action="#">
    <p>Subscribe to our email list:</p>
    <input type="text" name="email" />
    <input type="image" src="../imgs/subscribe.jpg" alt="subscribe button image" width="100" height="20" />
</form>
</div>
