<?php
$url = "https://qiita.com/ike04/feed";
$xml = file_get_contents($url);
header("Content-type: application/xml; charset=UTF-8");
print $xml;
?>