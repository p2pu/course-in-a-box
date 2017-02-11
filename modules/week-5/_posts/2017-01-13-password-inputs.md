---
title: Password Input Element
module: 5
---

# The Password Input Element

The `type="password"` for input elements creates a "password input box".

This attribute creates a single line text entry field where the characters are hidden with '*'s.

**NOTE:** You would never use this type of field to send sensitive data such as SSN's. For such situations, a site should create a web socket or use an Secure Socket Layer (SSL) connection with a server to guarantee secure delivery of data.

## Additional Optional Attributes

### size

You can use the `size` attribute to set the display (in character widths) for the text input box.

### maxlength

Just like with the plain text input element, you can use the `maxlength` attribute to limit the number of characters that a user can input.


```html
<form action="http://www.example.com/login.php">
    <p>Username:
        <input type="text" name="username" size="15" maxlength="30" />
	</p>
    <p>Password:
        <input type="password" name="password" size="15" maxlength="30" />
    </p>
</form>
```

<div class="displayed_code_example">
    <p>Type in the following boxes to see the element in action.
    <p>Username:
        <input type="text" name="username" size="15" maxlength="30" />
	</p>
    <p>Password:
        <input type="password" name="password" size="15" maxlength="30" />
    </p>
<!-- </div> -->
