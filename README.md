# IPhonePasscode.js
IPhonePasscode creates very easily a highly customizable and functional copy of the IPhone pin passcode<br>
MD5 hash your numerical password **twice**: <a href="https://www.md5hashgenerator.com"> md5hashgenerator.com </a><br>
**A back-end is required to validate the passcode**, see examples bellow
<br><br>

| Options | Description |
| --- | --- |
| doublemd5password <br> **Required** | MD5 a numerical password twice <br> Example: 1234 > 81dc9bdb52d04dc20036dbd8313ed055 > ec6a6536ca304edf844d1d248a4f08dc |
| length <br> **Required** | Length of password |
| redirect <br> **Required** | Back-end file or directory to redirect if password is right |
| background <br> **Required** | Button color |
| color <br> **Required** | Color of button text and title text |
| title | Text appearing above password pins <br>Default: Enter Password |
| title_color | Title text color<br>Default: Same as 'color' |
| pin_background | Filled pin background<br>Default: Same as 'color' |
| pin_border | Empty pin color<br>Default: Same as 'color' |
| animation | Button press keyframes animation<br>Default is same animation as the IPhone |
| animationDuration | Animation duration<br>Default: 300ms |
| animationType | linear, ease-in, ease-in-out... etc<br>Default:linear |

<p align="center">
  <code> 
    new IPhonePasscode('#targetDiv', { <strong>Options</strong> }); 
  </code>
</center>
<br><br>

### Example 1 with PHP
```html
<div class="index-password" id="iphonePasscode"></div>
```
```javascript
new IPhonePasscode('#iphonePasscode', {
                     doublemd5password: 'ec6a6536ca304edf844d1d248a4f08dc',
                     length: '4',
                     background: 'white',
                     color: 'black',
                     redirect: '../php/keychain.php'});
```
```php
if($_GET['pass'] == '1234') {
  session_start();
  $_SESSION['keychain'] = True;
  header('location: ../index.html');
}
```
- Password is 1234, white buttons, black text, php used for back-end with a keychain session variable
___

### Example 2 with Python Django
```html
<div class="index-password" id="iphonePasscode"></div>
```
```javascript
new IPhonePasscode('.index-password', {
                     doublemd5password: 'ec6a6536ca304edf844d1d248a4f08dc',
                     length: '4',
                     background: 'gray',
                     color: 'white',
                     animation: '100% { transform: rotate(360deg); }',
                     animationType: 'ease-out',
                     animationDuration: '0.8s',
                     title: 'Enter Password To Login',
                     redirect: '/checkpasscode/'});
```
```python
def login_func(request):
    if request.GET['pass'] is '1234':
        return redirect('/loggedin/')
```
- Password is 1234, gray buttons, white text, modified title, ease-out rotate animation for 0.8s, python django used for back-end
