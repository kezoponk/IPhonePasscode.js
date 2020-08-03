<?php
if($_GET['pass'] == 'ec6a6536ca304edf844d1d248a4f08dc') {
  session_start();
  $_SESSION['keychain'] = True;
  header('location: ../index.html');
}
