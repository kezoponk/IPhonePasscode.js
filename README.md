<img width="200" align="right" src="https://user-images.githubusercontent.com/40474222/112726901-00cb9700-8f20-11eb-8dd8-d73d9a8d3473.png">

# IPhonePasscode.js
IPhonePasscode creates very easily a highly customizable and functional copy of the IPhone pin passcode.<br/>
Use the main import for standard js, or import from `dist/react` for the included React component.


## Security note
**Don't use this on anything big unless:**
<br/>Passcode is 12+ digits long.
<br/>If passcode is 12- digits - leave md5passcode empty and either limit requests or use <a href="https://portswigger.net/web-security/csrf/tokens">csrf token</a>

<br/>

## Installation
Install from the command line:
```shell
$ npm install @kezoponk/iphonepasscode
```
Install via package.json:
```json
"@kezoponk/iphonepasscode": "1.1.1" 
```

<br/>

## Usage

MD5 hash your passcode: <a href="https://www.md5hashgenerator.com"> md5hashgenerator.com </a><br/>
**A back-end is required to validate the passcode**, see examples bellow.

| Option / Prop | Description |
| --- | --- |
| md5passcode |Leave empty if you wish to validate pin only in the specified redirect url/page - **safer** |
| length <br/> **Required** |Length of passcode |
| redirect <br/> **Required** |Back-end file or directory to redirect if passcode is right. Works with custom parameters! |
| title |Text appearing above passcode pins <br/>Default: "Enter Passcode" |

<br/>

| CSS classes for customization | 
| --- |
| ipasscode__press-animation  |
| ipasscode__button |
| ipasscode__button-big-number |
| ipasscode__button-small-letters |
| ipasscode__title |
| ipasscode__pinsdiv |
| ipasscode__pins |

**Use !important if nothing changes**

<br/>

### Example with standard JS and PHP backend
```html
<div id="iphonePasscode" />
```
```javascript
new IPhonePasscode(
  document.getElementById('iphonePasscode'), {
    md5passcode: 'ec6a6536ca304edf844d1d248a4f08dc',
    length: '4',
    redirect: 'keychain.php'
  }
);
```
```php
if($_GET['pass'] == md5('1234')) {
  session_start();
  $_SESSION['keychain'] = True;
  header('location: ../index.html');
}
```
- Passcode is 1234
- PHP used for back-end with a keychain session variable

<br/>

### Example with React
```jsx
<IPhonePasscode length={4} title="Enter Passcode To Login" redirect="/checkpasscode">
```
- Passcode not exposed on client side, causing it reload page on each try 
