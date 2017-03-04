---
title: File Upload
module: 5
---

# The File Upload Element

The file upload element (`type="file"`), is used to allow a user to;

1. open a navigation window
2. select a file
3. upload it to the URL specified in the "`action=""`" attribute.

Most of the visual appearance for this type of box, as well as the subsequent 'file browser' will be dictated by the users browser & OS

NOTE: With this element, due to the nature of the data, you need to set the "method" attribute to "post" (`method="post"`).

```html
<form action="#" method="post">
    <p>Upload your song in MP3 format:</p>
    <input type="file" name="user-song" /><br />
    <input type="submit" value="Upload" />
</form>
```

<div class="displayed_code_example">
<form action="" method="post">
    <p>Upload your song in MP3 format:</p>
    <input type="file" name="user-song" /><br />
    <input type="submit" value="Upload" />
</form>
</div>
