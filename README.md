# IPhonePasscode.js ![stability-stable](https://img.shields.io/badge/stability-stable-green.svg) ![Dependency Status](https://david-dm.org/dwyl/esta.svg)
IPhonePasscode creates, with vanilla javascript, very easily a copy of the IPhone pin numpad where you have to enter X numbers to login<br>
MD5 hash your numerical password twice: <a href="https://www.md5hashgenerator.com"> md5hashgenerator.com </a><br><br>

| Options | Description |
| --- | --- |
| doublemd5password | MD5 a numerical password twice <br> Example: 1234 > 81dc9bdb52d04dc20036dbd8313ed055 > ec6a6536ca304edf844d1d248a4f08dc |
| length | Length of password |
| redirect | Back-end file or directory to redirect if password is right |
| color | Color of buttons <br>Alternatives: white, black, blue |
| text | Text appearing above password pins <br>Default: Enter Password |

<p align="center">
  <code> 
    new IPhoneNumpad('iphoneNumpad', { <strong>Options</strong> }); 
  </code>
</center>
<br><br>

### Examples
**Password is 1234, white passcode, php used for back-end with a keychain session variable**

```html
<div class="index-password" id="iphoneNumpad"></div>
```
```javascript
new IPhoneNumpad('iphoneNumpad', {
                  'doublemd5password': 'ec6a6536ca304edf844d1d248a4f08dc',
                  'length': '4',
                  'color': 'white',
                  'redirect': '../php/keychain.php',
                  'text': 'Enter Password To Login'});
```
```php
if($_GET['pass'] == 'ec6a6536ca304edf844d1d248a4f08dc') {
  session_start();
  $_SESSION['keychain'] = True;
  header('location: ../index.html');
}
```
