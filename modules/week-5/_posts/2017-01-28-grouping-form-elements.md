---
title: Grouping Form Elements
module: 5
---

# Grouping Form Elements with the Fieldset Element

Use the 'fieldset' (`<fieldset>...</fieldset>`) element to group form data areas together!

Most browsers will display these groups with a line around the edge. This presentation of this grouping can be altered with CSS and also helps clarify data groups to users.

## The Legend Elements

The legend element (`<legend>...</legend>`) comes directly after the fieldset element tag. The caption should help identify the purpose of this form group.

<br />

```html
<form action="http://www.example.com/subscribe.php">
    <fieldset>
        <legend>Contact details</legend>
        <label>Email:<br /><input type="text" name="email" /></label><br />
        <label>Mobile:<br /><input type="text" name="mobile" /></label><br />
        <label>Telephone:<br /><input type="text" name="telephone" /></label>
    </fieldset>
</form>
```

<div class="displayed_code_example">
<form action="#">
    <fieldset>
        <legend>Contact details</legend>
        <label>Email:<br /><input type="text" name="email" /></label><br />
        <label>Mobile:<br /><input type="text" name="mobile" /></label><br />
        <label>Telephone:<br /><input type="text" name="telephone" /></label>
    </fieldset>
</form>
</div>
