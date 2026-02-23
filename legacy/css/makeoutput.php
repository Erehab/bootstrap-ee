<?php
/**
 * @description LESS compilation utility - generates output.css from LESS sources
 *
 * @usage /ca/css/makeoutput.php
 *
 * @mod-transforms vars, psr12, visibility, interp
 *
 * @mod-reviewed 2026-02-11T16:50:44+00:00
 *
 * @deprecated
 *
 * @retire-reason Replaced by gen_outputcss.php which auto-compiles on include
 *
 * @retire-date 2026-02-11
 *
 * @reviewed 2026-02-11T16:50:44+00:00

 * @did-php-syntax-okay 2026-02-16
 * @did-dblegacy-mysql-none 2026-02-17
 * @did-dblegacy-ORM-none 2026-02-17
 * @did-dblegacy-PEAR-none 2026-02-17
 * @did-var-rename-done 2026-02-17
 */

include $_SERVER['DOCUMENT_ROOT'].'/vendor/autoload.php';
vanilla::retire();
load_tracy();

$showDebug = false;

function jbmAutoless(): void
{
    $bootstrapLess = $_SERVER['DOCUMENT_ROOT'].'/ca/css/bootswatch.less';
    $outputCss     = $_SERVER['DOCUMENT_ROOT'].'/ca/css/output.css';

    if (file_exists($outputCss) && file_exists($bootstrapLess)) {
        $outputCssModTime     = filemtime($outputCss);
        $bootstrapLessModTime = filemtime($bootstrapLess);

        if ($bootstrapLessModTime > $outputCssModTime) {
            jbmMakeOutputCss();
        }
    } else {
        jbmMakeOutputCss();
    }

    warning_msg('No Output.css Made');
}

function jbmMakeOutputCss(): void
{
    $outputLess   = $_SERVER['DOCUMENT_ROOT'].'/ca/css/output.less';
    $outputCss    = $_SERVER['DOCUMENT_ROOT'].'/ca/css/output.css';
    $outputCssMap = $_SERVER['DOCUMENT_ROOT'].'/ca/css/output.css.map';

    $start  = time();
    $cmd    = "lessc {$outputLess} -m=always --source-map={$outputCssMap} {$outputCss}";
    $result = exec($cmd);

    success_msg('New Output.css made');
    $end = $start - time();
    status_msg($end);
    exit();
}

if (isset($_REQUEST['remake'])) {
    $showDebug = true;
    jbmMakeOutputCss();
} else {
    jbmAutoless();
}
?>
<html>
<head>
  <title>less.php Make Output</title>
  <link rel="stylesheet" href="/ca/css/output.css">
</head>
<body>
<div class="container">
</div>
</body>
</html>