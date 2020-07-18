# IPhoneNumpad
IPhoneNumpad creates very easily a copy of the IPhone pin numpad where you have to enter X numbers to login
MD5 hash your numerical password twice: https://www.md5hashgenerator.com/
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
if($_GET['pass'] == 1234) {
  session_start();
  $_SESSION['keychain'] = True;
  header('location: ../index.html');
}
```
