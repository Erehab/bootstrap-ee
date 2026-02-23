<?php

/**
 * @description Generates CSS from LESS files when source files change, using lessc compiler
 *
 * @usage [INCLUDE ONLY]
 *
 * @mod-transforms vars, psr12
 *
 * @mod-reviewed 2026-02-11T16:50:45+00:00
 *
 * @db-legacy None
 *
 * @db-writes NONE
 *
 * @db-reads NONE
 *
 * @dpr-reviewed 2026-01-28T00:00:00+00:00
 *
 * @reviewed 2026-02-11T16:50:45+00:00

 * @did-php-syntax-okay 2026-02-16
 * @did-dblegacy-mysql-none 2026-02-17
 * @did-dblegacy-ORM-none 2026-02-17
 * @did-dblegacy-PEAR-none 2026-02-17
 * @did-var-rename-done 2026-02-17
 */
function jbm_autoless()
{
    $bootswatch        = $_SERVER['DOCUMENT_ROOT'].'/ca/css/bootswatch.less';
    $outputLess        = $_SERVER['DOCUMENT_ROOT'].'/ca/css/output.less';
    $outputCss         = $_SERVER['DOCUMENT_ROOT'].'/ca/css/output.css';
    $outputCssRootPath = $_SERVER['DOCUMENT_ROOT'].'/ca/css/';

    if (file_exists($outputCss) && file_exists($bootswatch) && file_exists($outputLess)) {
        $outputCssModTime  = filemtime($outputCss);
        $bootswatchModTime = filemtime($bootswatch);
        $outputLessModTime = filemtime($outputLess);

        if ($bootswatchModTime > $outputCssModTime) {
            jbm_makeoutputcss($outputCssRootPath);
        }

        if ($outputLessModTime > $outputCssModTime) {
            jbm_makeoutputcss($outputCssRootPath);
        }
    } else {
        jbm_makeoutputcss($outputCssRootPath);
    }
}

function jbm_makeoutputcss($executeAt)
{
    $outputLess   = $_SERVER['DOCUMENT_ROOT'].'/ca/css/output.less';
    $outputCss    = $_SERVER['DOCUMENT_ROOT'].'/ca/css/output.css';
    $outputCssMap = $_SERVER['DOCUMENT_ROOT'].'/ca/css/output.css.map';

    $currentDir = getcwd();
    chdir($executeAt);
    echo exec("lessc {$outputLess} --math=always --source-map={$outputCssMap} {$outputCss}");
    chdir($currentDir);
}

jbm_autoless();
