# IPhonePasscode.js ![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)
IPhonePasscode creates, with vanilla javascript, very easily a copy of the IPhone pin numpad where you have to enter X numbers to login<br>
MD5 hash your numerical password twice: <a href="https://www.md5hashgenerator.com"> md5hashgenerator.com </a><br><br>

| Options | Description |
| --- | --- |
| doublemd5password | MD5 a numerical password twice <br> Example: 1234 > 81dc9bdb52d04dc20036dbd8313ed055 > ec6a6536ca304edf844d1d248a4f08dc |
| length | Length of password |
| redirect | Back-end file or directory to redirect if password is right |
| background | Button color |
| color | Text color |
| text | Text appearing above password pins <br>Default: Enter Password |
| animation | Button press keyframes animation<br>Default is same animation as the IPhone |
| animationDuration | Animation duration, entered in seconds<br>Default: 0.3 |
| animationType | linear, ease-in, ease-in-out... etc<br>Default:linear |

<p align="center">
  <code> 
    new IPhoneNumpad('iphoneNumpad', { <strong>Options</strong> }); 
  </code>
</center>
<br><br>

### Examples
```html
<div class="index-password" id="iphoneNumpad"></div>
```
```javascript
new IPhoneNumpad('iphoneNumpad', {
                  'doublemd5password': 'ec6a6536ca304edf844d1d248a4f08dc',
                  'length': '4',
                  'background': 'white',
                  'color': 'black',
                  'redirect': '../php/keychain.php',
                  'text': 'Enter Password To Login'});
```
```php
if($_GET['pass'] == '1234') {
  session_start();
  $_SESSION['keychain'] = True;
  header('location: ../index.html');
}
```
Password is 1234, white buttons, black text, php used for back-end with a keychain session variable
<br>
___

```html
<div class="index-password" id="iphoneNumpad"></div>
```
```javascript
new IPhoneNumpad('iphoneNumpad', {
                  'doublemd5password': 'ec6a6536ca304edf844d1d248a4f08dc',
                  'length': '10',
                  'background': 'gray',
                  'color': 'white',
                  'animation': '100% { transform: rotate(360deg); }',
                  'animationType': 'ease-out',
                  'animationDuration': '0.8',
                  'redirect': '/checkpasscode/'});
```
```python
def login_func(request):
    if request.GET['pass'] is '1234':
        return redirect('/loggedin/')
```
Password is 1234, gray buttons, white text, ease-out rotate animation for 0.8s, python django used for back-end

