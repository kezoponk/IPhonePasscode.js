# IPhonePasscode.js [![Dependency Status](https://david-dm.org/dwyl/esta.svg)](https://david-dm.org/dwyl/esta)
IPhonePasscode creates, with vanilla javascript, very easily a copy of the IPhone pin numpad where you have to enter X numbers to login<br>
MD5 hash your numerical password twice: <a href="https://www.md5hashgenerator.com"> md5hashgenerator.com </a><br><br>
> ``` 
> new IPhoneNumpad('target-div-id', {
> 'doublemd5password': '1234 > 81dc9bdb52d04dc20036dbd8313ed055 > ec6a6536ca304edf844d1d248a4f08dc',
> 'length': 'length of password',
> 'color': 'color of buttons; white, black, blue',
> 'redirect': 'back-end file or directory to redirect if password is right',
> 'text': 'Text appearing above password pins, default; Enter Password'
> });
> ```
<br>

```html
<div class="index-password" id="iphoneNumpad"></div>
```
```javascript
new IPhoneNumpad('iphoneNumpad', {
                  'doublemd5password': 'ec6a6536ca304edf844d1d248a4f08dc',
                  'length': '4',
                  'color': 'white',
                  'redirect': '../php/keychain.php',
                  'text': 'Enter Password'});
```
```php
if($_GET['pass'] == 'ec6a6536ca304edf844d1d248a4f08dc') {
  session_start();
  $_SESSION['keychain'] = True;
  header('location: ../index.html');
}
```
