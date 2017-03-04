---
title: Hidden Input
module: 5
---

# The Hidden Input Form Element


There is a hidden input element (`type="hidden"`) for form control. These form controls are not shown on the page (although you can see them if you use the browsers "View Source" option).

This input type allows web page authors/developers to add values to forms that users cannot see, but which will be sent along with the form to the server.

For example, a web page author might use a hidden field to indicate which page the user was on when they submitted a form.

```html
<form action="http://www.example.com/add.php">
    <input type="hidden" name="bookmark" value="lyrics" />
</form>
```
