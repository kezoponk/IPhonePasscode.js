<img width="200" align="right" src="https://user-images.githubusercontent.com/40474222/112726901-00cb9700-8f20-11eb-8dd8-d73d9a8d3473.png">

# IPhonePasscode.js
IPhonePasscode creates very easily a highly customizable and functional copy of the IPhone pin passcode.<br>
MD5 hash your passcode: <a href="https://www.md5hashgenerator.com"> md5hashgenerator.com </a><br>
**A back-end is required to validate the passcode**, see examples bellow.

## Security note
**Don't use this on anything big unless:**
<br>Passcode is 11+ digits long.
<br>If passcode is 11- digits - leave md5passcode empty and use <a href="https://portswigger.net/web-security/csrf/tokens">csrf token</a>

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
| md5passcode |Leave empty if you wish to validate pin only in the specified redirect url/page - **Safer** |
| length <br> **Required** |Length of passcode |
| redirect <br> **Required** |Back-end file or directory to redirect if passcode is right. Works with custom parameters! |
| title |Text appearing above passcode pins <br>Default: Enter Password |

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

<br>

### Example - with PHP
```html
<div class="index-passcode" id="iphonePasscode"></div>
```
```javascript
new IPhonePasscode('#iphonePasscode', {
                     md5passcode: 'ec6a6536ca304edf844d1d248a4f08dc',
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
- Passcode is 1234
- PHP used for back-end with a keychain session variable
<br>

### Example - with Python Django
```html
<div class="index-passcode" id="iphonePasscode"></div>
```
```javascript
new IPhonePasscode('.index-passcode', {
                     length: '4',
                     title: 'Enter Passcode To Login',
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
- Passcode not exposed on client side, but reloads page each time 
- Modified title
- Python django used for back-end
