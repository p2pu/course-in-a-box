---
title: Select Box (Dropdown Select Box)
module: 5
---

# The Select Box (aka. Dropdown Select)

A select box allows a user to select one option from a dropdown list.

Unlike the other form elements we have been looking at, this element has its own name and uses opening and closing tags: `<select>...</select>`.

Dropdown lists are very similar to radio buttons. However, these are more appropriate when a large amount of selections is possible (ie. "select a state").


## The Option Element

The option element (`<option>...</option>`) is used within select elements to indicate each possible option. Any text between the option tags will be displayed in the dropdown box.

As with other form types, the value="" attribute should be unique for each option element. This will be sent back with the select elements name attribute.

The `selected` attribute can be used to pre-select an option. If this attribute is omitted then the first option will be pre-selected.

```html
<form action="http://www.example.com/profile.php">
    <p>Select your home state: </p>
    <select name="home_state">
    	<option value="AL">Alabama</option>
    	<option value="AK">Alaska</option>
    	<option value="AZ">Arizona</option>
    	<option value="AR">Arkansas</option>
    	<option value="CA">California</option>
    	<option value="CO" selected>Colorado</option>
        <!-- ...rest removed form example code for space -->
    </select>
</form>
```

<div class="displayed_code_example">
<form action="http://www.example.com/profile.php">
<p>Select your home state: </p>
<select name="home_state">
    <option value="AL">Alabama</option>
    <option value="AK">Alaska</option>
    <option value="AZ">Arizona</option>
    <option value="AR">Arkansas</option>
    <option value="CA">California</option>
    <option value="CO" selected>Colorado</option>
    <option value="CT">Connecticut</option>
    <option value="DE">Delaware</option>
    <option value="DC">District Of Columbia</option>
    <option value="FL">Florida</option>
    <option value="GA">Georgia</option>
    <option value="HI">Hawaii</option>
    <option value="ID">Idaho</option>
    <option value="IL">Illinois</option>
    <option value="IN">Indiana</option>
    <option value="IA">Iowa</option>
    <option value="KS">Kansas</option>
    <option value="KY">Kentucky</option>
    <option value="LA">Louisiana</option>
    <option value="ME">Maine</option>
    <option value="MD">Maryland</option>
    <option value="MA">Massachusetts</option>
    <option value="MI">Michigan</option>
    <option value="MN">Minnesota</option>
    <option value="MS">Mississippi</option>
    <option value="MO">Missouri</option>
    <option value="MT">Montana</option>
    <option value="NE">Nebraska</option>
    <option value="NV">Nevada</option>
    <option value="NH">New Hampshire</option>
    <option value="NJ">New Jersey</option>
    <option value="NM">New Mexico</option>
    <option value="NY">New York</option>
    <option value="NC">North Carolina</option>
    <option value="ND">North Dakota</option>
    <option value="OH">Ohio</option>
    <option value="OK">Oklahoma</option>
    <option value="OR">Oregon</option>
    <option value="PA">Pennsylvania</option>
    <option value="RI">Rhode Island</option>
    <option value="SC">South Carolina</option>
    <option value="SD">South Dakota</option>
    <option value="TN">Tennessee</option>
    <option value="TX">Texas</option>
    <option value="UT">Utah</option>
    <option value="VT">Vermont</option>
    <option value="VA">Virginia</option>
    <option value="WA">Washington</option>
    <option value="WV">West Virginia</option>
    <option value="WI">Wisconsin</option>
    <option value="WY">Wyoming</option>
</select>
</form>
</div>
