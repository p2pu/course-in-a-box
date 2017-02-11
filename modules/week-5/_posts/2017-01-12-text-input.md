---
title: Text Input Elements
module: 5
---

# The Plain Text Input Element

The most common, and basic, "input" element type is `type="text"`.

This creates a "text box" where users can type in information that is available to the browser.

NOTE: Technically, you can omit the "type" from the input element if you want a text box. But good style dictates that you should be explicit in your code so as to prevent errors.

## Example

This following code demonstrates how to create an input element of `type="text"`. Please notice the use of the `<p></p>` element to display information text in front of the text box.

```html
<form class="formClass" id="exampleForm" action="index.html" method="post">
    <p>
    Username:
    <input type="text" name="username" id="username_input" />
    </p>
</form>
```


<div class="displayed_code_example">
<form class="formClass" id="exampleForm" action="#" method="get">
    <p>Try the text box!</p>
    <p>
        Username:
        <input type="text" name="username" id="username_input" />
    </p>
</form>
</div>

## Additional Optional Attributes

### placeholder

The `placeholder` attribute can be used to place grey text in a text field. This text will disappear when the user focuses the element by clicking in it.

This text can be used to offer hints about the _type of text that is expected_ or to _encourage the user to type in the field_.

_Example Code_

```html
<p>
Placeholder Text:
<input type="text" name="username" id="username_input" placeholder="Type In Me!!" />
</p>
```


<div class="displayed_code_example">
    <p>
    Placeholder Text:
    <input type="text" name="username" id="username_input" placeholder="Type In Me!!"/>
    </p>
</div>

Notice how the text box has grey text (should work in most browsers), and that when you click in there it goes away.


### value

The `value` attribute can be used to "pre-fill" a text box. Unlike `placeholder`, when you click in the text box, the "pre-filled" text is not replaced. Instead, the user can edit it freely, remove it, or keep it.

This can be used to fill in "input" elements with data that would be used "most of the time".

```html
<p>
Pre-filled Text:
<input type="text" name="username" id="username_input" value="Pre-filled Text!"  />
</p>
```

<div class="displayed_code_example">
    Notice that when you click in the box, the text stays, and you can edit it.
    <p>
    Pre-filled Text:
    <input type="text" name="username" id="username_input" value="Pre-filled Text!"  />
    </p>
</div>




### maxlength

The 'maxlength' attribute is used to limit the number of characters a user may enter into a text field. As an example, a text field that expects a year, may be limited to `maxlength="4"` characters.

_Example Code_

```html
<p>
4 Character Limit:
<input type="text" name="username" id="username_input" maxlength="4" />
</p>
```

<div class="displayed_code_example">
    <p>
    4 Character Limit:
    <input type="text" name="username" id="username_input" maxlength="4" />
    </p>
</div>

Type in the below text box. You will find (at least in most browsers) that you cannot type more than 4 characters.

### autofocus

The `autofocus` attribute is used to set the "focus" of a browser to the specified form element after the page loads.

NOTE: Unlike most attributes, there is no "value" to assign. Therefore the attribute it passed in alone.

_Example Code_

```html
<p>
Auto-focused Field:
<input type="text" name="username" id="username_input" autofocus />
</p>
```

[If you follow this link to the example page, you will notice that this field is "focused".](https://montana-media-arts.github.io/341-work/lectureCode/week5/autofocusField/) Or rather, you can immediately start typing in the field.
