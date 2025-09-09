# Mirkomil Portfolio (Static)

A single-page portfolio (static HTML + CSS) designed for free hosting on **GitHub Pages**. No build step.

## Deploy on GitHub Pages

- Create a **public** GitHub repo and upload these files.
- In GitHub: **Settings → Pages** → *Deploy from a branch* → `main` and `/ (root)`.
- Custom domain:
  - `CNAME` already contains `www.mirkomiloblokulov.com`.
  - In DNS, create **CNAME** for `www` → `yourusername.github.io` (replace with your GitHub username).
  - For apex `mirkomiloblokulov.com`, use registrar **URL forward → https://www.mirkomiloblokulov.com** (or ALIAS/ANAME if supported).

## File tree

```
.
├── CNAME
├── README.md
├── assets
│   ├── Mirkomil_Oblokulov_Revised_Resume.pdf
│   └── img
│       └── headshot.jpg
├── css
│   └── styles.css
└── index.html
```

© 2025 Mirkomil Oblokulov


---

## GitHub setup (private repo + public site)

- Repository **name**: `mirkomil`
- GitHub **username**: `oblokulov`
- You can keep the repo **Private** and still publish the site publicly with GitHub Pages.
- In **Settings → Pages**:
  - If “Deploy from a branch” is available, select `main` and root.
  - If not, choose **GitHub Actions**. A workflow file is included below.

### DNS for your custom domain
- Create a **CNAME** record: `www` → `oblokulov.github.io`
- For the apex `mirkomiloblokulov.com`, set a URL forward to `https://www.mirkomiloblokulov.com` (or use ALIAS/ANAME if supported).
