# Seudev's VSCode configs

[![Version](https://vsmarketplacebadge.apphb.com/version/Seudev.vscode-configs.png)](https://marketplace.visualstudio.com/items?itemName=Seudev.vscode-configs)
[![Installs](https://vsmarketplacebadge.apphb.com/installs-short/Seudev.vscode-configs.png)](https://marketplace.visualstudio.com/items?itemName=Seudev.vscode-configs)

The Seudev's Visual Studio Code configs

## Installation

Launch VS Code Quick Open (`Ctrl+P`), paste the following command, and press enter.

```
ext install Seudev.vscode-configs
```

## Configs

```json
{
  "workbench.editor.highlightModifiedTabs": true,
  "search.showLineNumbers": true,
  "scm.alwaysShowRepositories": true,
  "terminal.explorerKind": "both",
  "problems.showCurrentInStatus": true,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.minimap.showSlider": "always",
  "editor.quickSuggestions": {
    "comments": "on",
    "strings": "on"
  },
  "editor.suggest.preview": true,
  "editor.suggest.showStatusBar": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,
  "git.branchProtection": [
    "main",
    "master"
  ],
  "html.format.indentInnerHtml": true,
  "cSpell.language": "en",
  "cSpell.showAutocompleteSuggestions": true,
  "telemetry.telemetryLevel": "error",
  "gitlens.telemetry.enabled": false,
  "redhat.telemetry.enabled": false,
  "rest-client.enableTelemetry": false,
  "rest-client.previewOption": "exchange",
  "rest-client.logLevel": "verbose",
  "codesnap.shutterAction": "copy",
  "codesnap.transparentBackground": true,
  "gitHistory.includeRemoteBranches": true,
  "go.inlayHints.assignVariableTypes": true,
  "go.inlayHints.constantValues": true,
  "go.inlayHints.functionTypeParameters": true,
  "go.inlayHints.parameterNames": true,
  "go.inlayHints.rangeVariableTypes": true,
  "go.inlayHints.compositeLiteralFields": true,
  "go.lintTool": "golangci-lint",
  "cSpell.ignorePaths": [
    "package-lock.json",
    "node_modules",
    "vscode-extension",
    ".git/objects",
    ".vscode",
    ".vscode-insiders",
    ".devcontainer/devcontainer.json"
  ],
  "todo-tree.general.showActivityBarBadge": true,
  "todo-tree.tree.showCountsInTree": true,
  "todo-tree.highlights.useColourScheme": true,
  "workbench.editor.enablePreview": false,
  "workbench.startupEditor": "none",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[yaml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[xml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Licensing

**seudev/vscode-configs** is provided and distributed under the [Apache Software License 2.0](http://www.apache.org/licenses/LICENSE-2.0).

Refer to *LICENSE* for more information.
