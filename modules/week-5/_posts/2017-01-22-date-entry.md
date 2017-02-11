---
title: Date Entry
module: 5
---

# The Date Entry Element

HTML5 includes a new data entry fields for "input elements". One such of these is the `type="date"`.
In browsers that do not support this type, a simple text box will be used. In those that do support it, the appearance will be dictated by the browser.

Try this is firefox, chrome, and opera (not safari).

```html
<form action="http://www.example.com/bookings/" method="post">
    <label for="departure-date">Departure date:</label>
    <input type="date" name="depart" id="departure-date" />
    <input type="submit" value="Submit" />
</form>
```

<div class="displayed_code_example">
<form action="#" method="post">
    <label for="departure-date">Departure date:</label>
    <input type="date" name="depart" id="departure-date" />
    <input type="submit" value="Submit" />
</form>
</div>
