<?php
if($_GET['pass'] == 1234) {
  session_start();
  $_SESSION['keychain'] = True;
  header('location: ../index.html');
}
