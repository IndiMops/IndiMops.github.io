[CmdletBinding()]
param()

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$separatorChars = [char[]]@(
    [System.IO.Path]::DirectorySeparatorChar,
    [System.IO.Path]::AltDirectorySeparatorChar
)
$pathComparison = if (
    [System.Environment]::OSVersion.Platform -eq [System.PlatformID]::Win32NT
) {
    [System.StringComparison]::OrdinalIgnoreCase
}
else {
    [System.StringComparison]::Ordinal
}

$repoRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..')).Path.TrimEnd($separatorChars)
$distPath = [System.IO.Path]::GetFullPath((Join-Path $repoRoot 'dist')).TrimEnd($separatorChars)
$distParent = [System.IO.Path]::GetDirectoryName($distPath).TrimEnd($separatorChars)

if (-not [string]::Equals($distParent, $repoRoot, $pathComparison) -or
    -not [string]::Equals([System.IO.Path]::GetFileName($distPath), 'dist', $pathComparison)) {
    throw "Refusing to clean an unexpected output path: $distPath"
}

$cityDirectory = ([char]0x0441).ToString() + 'ity'

$siteInputs = @(
    'index.html'
    'about.html'
    'projects.html'
    'game.html'
    'manga.html'
    'support.html'
    '404.html'
    'en'
    'assets/css'
    'assets/js'
    'assets/favicon.ico'
    'assets/avatar.jpg'
    'assets/social baner.png'
    'assets/404.gif'
    'assets/fons/inter.woff2'
    'assets/fons/JapariSans.otf'
    'assets/social'
    'assets/game-cover'
    'assets/manga/Manga cover'
    "assets/$cityDirectory/01.jpg"
    'assets/video/01.mp4'
    '.well-known'
)

# Validate the complete allowlist before replacing a previously successful build.
foreach ($siteInput in $siteInputs) {
    $sourcePath = [System.IO.Path]::GetFullPath((Join-Path $repoRoot $siteInput))
    $sourcePrefix = $repoRoot + [System.IO.Path]::DirectorySeparatorChar
    if (-not $sourcePath.StartsWith($sourcePrefix, $pathComparison)) {
        throw "Source path escapes the repository: $siteInput"
    }
    if (-not (Test-Path -LiteralPath $sourcePath)) {
        throw "Required site input is missing: $siteInput"
    }
}

if (Test-Path -LiteralPath $distPath) {
    $distItem = Get-Item -LiteralPath $distPath -Force
    if (-not $distItem.PSIsContainer) {
        throw "Refusing to replace a non-directory output path: $distPath"
    }
    if (($distItem.Attributes -band [System.IO.FileAttributes]::ReparsePoint) -ne 0) {
        throw "Refusing to clean a linked output directory: $distPath"
    }

    $resolvedDist = (Resolve-Path -LiteralPath $distPath).Path.TrimEnd($separatorChars)
    if (-not [string]::Equals($resolvedDist, $distPath, $pathComparison)) {
        throw "Refusing to clean an output directory outside the repository: $resolvedDist"
    }

    Remove-Item -LiteralPath $distPath -Recurse -Force
}

New-Item -ItemType Directory -Path $distPath | Out-Null

function Copy-RequiredPath {
    param(
        [Parameter(Mandatory)]
        [string]$RelativePath
    )

    $sourcePath = [System.IO.Path]::GetFullPath((Join-Path $repoRoot $RelativePath))
    $sourcePrefix = $repoRoot + [System.IO.Path]::DirectorySeparatorChar
    if (-not $sourcePath.StartsWith($sourcePrefix, $pathComparison)) {
        throw "Source path escapes the repository: $RelativePath"
    }
    if (-not (Test-Path -LiteralPath $sourcePath)) {
        throw "Required site input is missing: $RelativePath"
    }

    $destinationPath = [System.IO.Path]::GetFullPath((Join-Path $distPath $RelativePath))
    $destinationPrefix = $distPath + [System.IO.Path]::DirectorySeparatorChar
    if (-not $destinationPath.StartsWith($destinationPrefix, $pathComparison)) {
        throw "Destination path escapes the output directory: $RelativePath"
    }

    $sourceItem = Get-Item -LiteralPath $sourcePath -Force
    if ($sourceItem.PSIsContainer) {
        New-Item -ItemType Directory -Path $destinationPath -Force | Out-Null
        Get-ChildItem -LiteralPath $sourcePath -Force | ForEach-Object {
            Copy-Item -LiteralPath $_.FullName -Destination $destinationPath -Recurse -Force
        }
        return
    }

    $destinationParent = [System.IO.Path]::GetDirectoryName($destinationPath)
    New-Item -ItemType Directory -Path $destinationParent -Force | Out-Null
    Copy-Item -LiteralPath $sourcePath -Destination $destinationPath -Force
}

foreach ($siteInput in $siteInputs) {
    Copy-RequiredPath -RelativePath $siteInput
}

[System.IO.File]::WriteAllText((Join-Path $distPath '.nojekyll'), '')

$builtFiles = Get-ChildItem -LiteralPath $distPath -Recurse -File -Force
$builtBytes = ($builtFiles | Measure-Object -Property Length -Sum).Sum
$builtMiB = [math]::Round($builtBytes / 1MB, 2)
Write-Host "Built $($builtFiles.Count) files in dist ($builtMiB MiB)."
