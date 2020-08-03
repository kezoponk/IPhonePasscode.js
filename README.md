# IPhonePasscode.js
IPhonePasscode creates very easily a copy of the IPhone pin numpad where you have to enter X numbers to login<br>
MD5 hash your numerical password twice: <a href="https://www.md5hashgenerator.com"> md5hashgenerator.com </a><br><br>
> IPhoneNumpad('elementID'), { <br><br>
> 'doublemd5password': '1234 > 81dc9bdb52d04dc20036dbd8313ed055 > ec6a6536ca304edf844d1d248a4f08dc', <br>
> 'length': 'length of password', <br>
> 'color': 'color of buttons; white, black, blue', <br>
> 'redirect': 'back-end file or directory to redirect if password is right', <br>
> 'text': 'Text appearing above password pins, default; Enter Password' <br>
> });
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
<p align="center"> 
  Made with vanilla <br>
  <a href="https://java.com"> <img src="https://forthebadge.com/images/badges/made-with-javascript.svg"> </a>
</p>
