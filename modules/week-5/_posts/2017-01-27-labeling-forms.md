---
title: Labeling Form Elements
module: 5
---

# Label Form Elements

Each form control should have its own label element. _This makes the form accessible to vision impaired users._

## Wrapped Labels

Labels can be applied by wrapping them around both the text description and the form input.

```html
<form action="http://www.example.com/subscribe.php">
    <label>
        Age:
        <input type="text" name="age" />
    </label>
</form>
```

## ID'd Labels

Labels can also be included by using the `for=""` attribute. The value for this attribute should be the `id` assigned to each form element.

NOTICE: This also expands the clickable area available to the user.

```html
<form action="http://www.example.com/subscribe.php">
    <p>
        Gender:
        <input id="female" type="radio" name="gender" value="f">
        <label for="female">Female</label>
        <input id="male" type="radio" name="gender" value="m">
        <label for="male">Male</label>
    </p>
</form>
```

<div class="displayed_code_example">
<form action="#">
    <p>
        Gender:
        <input id="female" type="radio" name="gender" value="f">
        <label for="female">Female</label>
        <input id="male" type="radio" name="gender" value="m">
        <label for="male">Male</label>
    </p>
</form>
</div>



## Note:

As a rule of thumb, labels should be placed 'above or to the left' of the input area for test, select boxes, and file uploads (this is the same idea presented earlier with `<p>...</p>`).

Labels should be placed to the right of individual checkboxes and radio buttons.
