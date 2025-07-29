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

or

npm install --save-dev git-echo

