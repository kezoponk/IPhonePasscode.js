<?php
if($_GET['pass'] == 1234) {
  $_SESSION['keychain'] = True;
  header('location: ../index.html');
}
