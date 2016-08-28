<?php

// Init vars
$LOCAL_ROOT         = "/home/storage/a/00/42/hemersonvianna4/";
$LOCAL_REPO_NAME    = "build";
$PUBLIC_HTML        = "public_html";
$LOCAL_REPO         = "{$LOCAL_ROOT}/{$LOCAL_REPO_NAME}";
$PUBLIC_HTML_REPO  = "{$LOCAL_ROOT}/{$PUBLIC_HTML}";
$REMOTE_REPO        = "https://github.com/headquarters-solutions/hemersonvianna.github.io.git";
$BRANCH     = "gh-pages";

// Delete local repo if it exists
if (file_exists($LOCAL_REPO)) {
  shell_exec("rm -rf {$LOCAL_REPO}");
}

// Clone fresh repo from github using desired local repo name and checkout the desired branch
echo shell_exec("cd {$LOCAL_ROOT} && git clone {$REMOTE_REPO} {$LOCAL_REPO_NAME} && cd {$LOCAL_REPO} && git checkout {$BRANCH} && cp -r {$LOCAL_REPO}/* {$PUBLIC_HTML_REPO}");

die("done " . mktime());
