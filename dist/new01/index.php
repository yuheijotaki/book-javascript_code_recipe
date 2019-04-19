<?php
$json_string = file_get_contents('php://input'); ## 今回のキモ

// PHPで文字列をJSOnデータとして展開する
$obj = json_decode($json_string);

echo $obj->{"hello"};
