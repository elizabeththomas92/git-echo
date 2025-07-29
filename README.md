# git-echo

> ⚡️ Visualize how a file change affects other components in your project.

`git-echo` is a CLI tool that watches your codebase and shows which files are impacted when you change a specific component — especially useful in frontend-heavy projects like React, Next.js, etc.

---

## 🚀 Features

- Detects file changes in your codebase
- Builds a dependency graph
- Shows upstream & downstream dependencies (files imported into or by the changed file)
- Helps identify all affected files when you modify a component

---

## 📦 Installation

Install globally (optional):

```bash
npm install -g git-echo

```

🎯 Recommended Setup (via package.json)
Add a custom script to your package.json:

```
"scripts": {
  "watch": "git-echo ."
}
```

Then run the tool with:

```
npm run watch
```

<img width="2212" height="451" alt="image" src="https://github.com/user-attachments/assets/9b80d667-93a8-4ba3-b1eb-bea0c391885f" />


