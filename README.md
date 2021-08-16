<img width="200" align="right" src="https://user-images.githubusercontent.com/40474222/112726901-00cb9700-8f20-11eb-8dd8-d73d9a8d3473.png">

# IPhonePasscode.js
IPhonePasscode creates very easily a highly customizable and functional copy of the IPhone pin passcode.<br>
MD5 hash your numerical password **twice**: <a href="https://www.md5hashgenerator.com"> md5hashgenerator.com </a><br>
**A back-end is required to validate the passcode**, see examples bellow.
<br>Password length is public & passed through a get parameter: a <a href="https://portswigger.net/web-security/csrf/tokens">csrf token</a> is recommended.
<br>Still not very safe even with csrf though... I don't recommend using this on anything big.
<br>

## Installation
Install from the command line:
```shell
$ npm install @kezoponk/iphonepasscode
```
Install via package.json:
```json
"@kezoponk/iphonepasscode": "1.0.7" 
```
Or download the dist/ipasscode.js manually
```html
<script type="text/javascript" src="ipasscode.js"></script>
```

## Usage

| Options | Description |
| --- | --- |
| doublemd5password <br> | MD5 a numerical password twice <br> Example: 1234 > 81dc9bdb52d04dc20036dbd8313ed055 > ec6a6536ca304edf844d1d248a4f08dc<br>**Leave empty if you wish to validate pin only in the specified redirect url/page** |
| length <br> **Required** | Length of password |
| redirect <br> **Required** | Back-end file or directory to redirect if password is right. Works with custom parameters! |
| title | Text appearing above password pins <br>Default: Enter Password |

<p align="center">
  <code>
    new IPhonePasscode('targetDiv', { <strong>Options</strong> });
  </code>
</p>

<br>

| CSS Classes for customization | 
| --- |
| ipasscode__press-animation  |
| ipasscode__button |
| ipasscode__button-big-number |
| ipasscode__button-small-letters |
| ipasscode__title |
| ipasscode__pinsdiv |
| ipasscode__pins |

**Use !important if nothing changes**

<br><br>

### Example - with PHP
```html
<div class="index-password" id="iphonePasscode"></div>
```
```javascript
new IPhonePasscode('#iphonePasscode', {
                     doublemd5password: 'ec6a6536ca304edf844d1d248a4f08dc',
                     length: '4',
                     redirect: '../php/keychain.php'
});
```
```php
if($_GET['pass'] == '1234') {
  session_start();
  $_SESSION['keychain'] = True;
  header('location: ../index.html');
}
```
- Password is 1234
- PHP used for back-end with a keychain session variable
<br>

### Example - with Python Django
```html
<div class="index-password" id="iphonePasscode"></div>
```
```javascript
new IPhonePasscode('.index-password', {
                     length: '4',
                     title: 'Enter Password To Login',
                     redirect: '/checkpasscode/'
});
```
```python
def login_func(request):
    if request.GET['pass'] is '1234':
        return redirect('/loggedin/')
    else:
        return redirect('/passcode-login/')
```
- Passcode is 1234
- Passcode not exposed on client side
- Modified title
- Python django used for back-end
