- eslint might fail with "import module not found"
fixed by adding to vscode settings
```
"eslint.workingDirectories": [
    {
      "mode": "auto"
    }
  ]
```