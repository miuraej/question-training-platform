param(
  [string]$Version = "RC1",
  [string]$AppVersion = "0.9.0-rc1",
  [string]$DatabaseVersion = "ME2-QuestionDatabase v1.1"
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
$releaseRoot = Join-Path $repoRoot "Release"
$packageName = "ME2-Trainer_$Version"
$packageDir = Join-Path $releaseRoot $packageName
$zipPath = Join-Path $releaseRoot "$packageName.zip"

if (Test-Path $packageDir) {
  Remove-Item -LiteralPath $packageDir -Recurse -Force
}
New-Item -ItemType Directory -Force -Path $packageDir | Out-Null

$items = @(
  "index.html",
  "styles.css",
  "app.js",
  "manifest.json",
  "README.txt",
  "KNOWN_ISSUES.txt",
  "QA_RESULTS.txt",
  "data",
  "images"
)

foreach ($item in $items) {
  $src = Join-Path $repoRoot $item
  if (-not (Test-Path $src)) { continue }
  $dst = Join-Path $packageDir $item
  if ((Get-Item $src).PSIsContainer) {
    Copy-Item -LiteralPath $src -Destination $dst -Recurse -Force
  } else {
    Copy-Item -LiteralPath $src -Destination $dst -Force
  }
}

$buildDate = Get-Date -Format "yyyy-MM-dd HH:mm"
$readmePath = Join-Path $packageDir "README.txt"
@"
ME2 Trainer
============

Version
-------
Application Version: $AppVersion
Database Version: $DatabaseVersion
Build Date: $buildDate
Package: $packageName

推奨ブラウザ
------------
Chrome
Edge

使用方法
--------
1. ZIPファイルを展開してください。
2. 展開したフォルダ内の index.html を開いてください。
3. ブラウザは Chrome または Edge を推奨します。

注意事項
--------
このソフトウェアは試作版です。
問題文、選択肢、画像、正答、操作性に不具合がある可能性があります。
不具合を見つけた場合は、問題番号、画面の様子、使用ブラウザを添えて報告してください。

学習履歴について
----------------
学習履歴は使用しているブラウザ内に保存されます。
別のPCや別のブラウザでは履歴は共有されません。

配布内容
--------
この配布版には、学習に必要なHTML、CSS、JavaScript、問題データ、画像のみを含めています。
開発用ファイル、マスターDB、パッチ、ログ、作業ファイルは含めていません。
"@ | Set-Content -LiteralPath $readmePath -Encoding UTF8

if (Test-Path $zipPath) {
  Remove-Item -LiteralPath $zipPath -Force
}
Compress-Archive -Path (Join-Path $packageDir "*") -DestinationPath $zipPath -Force

Write-Output "Release package created: $packageDir"
Write-Output "ZIP created: $zipPath"
