---
title: Radio Buttons
module: 5
---

# Radio Buttons

Radio Buttons (`type="radio"`) allow users to select one of a handful of predetermined choices.

Radio buttons need to be grouped together. This tells the browser that only "one of the choices" of this group can be selected. To group radio button elements together the developer provides the same `name=""` attribute value for each possible choice. As with all elements, this name attribute will be sent along with the returned data.

Notice in the code example below, that this element, like the text box, will likely be placed in a `<p>...</p>`. This makes it easy to add information or "choice" text around the elements.

NOTE: A radio button set cannot be 'deselected'.


## `value`

Unlike text boxes, where the user enters unique data, radio buttons provide discrete options/data. To set the data that might be returned from this element, use the `value=""` attribute. This is a required attribute for the checkbox element.


## Additional Optional Attributes

### `checked`

The checked="checked" attribute can be used with one of the radio button elements to 'pre-select' an option that will be displayed when the page loads.



```html
<form action="http://www.example.com/profile.php">
    <p>Please select your favorite genre:
        <br />
        <input type="radio" name="genre" value="rock" /> Rock <br />
        <input type="radio" name="genre" value="pop" /> Pop <br />
        <input type="radio" name="genre" value="jazz" /> Jazz <br />
    </p>
</form>
```

<div class="displayed_code_example">
<form action="http://www.example.com/profile.php">
    <p>Please select your favorite genre:
        <br />
        <input type="radio" name="genre" value="rock" /> Rock <br />
        <input type="radio" name="genre" value="pop" /> Pop <br />
        <input type="radio" name="genre" value="jazz" /> Jazz <br />
    </p>
</form>
</div>
