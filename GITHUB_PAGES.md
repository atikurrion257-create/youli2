# YOU LI — GitHub Pages Hosting

This repository is prepared for free GitHub Pages hosting. It uses local image assets, a GitHub Actions deployment workflow, and a `404.html` SPA fallback so routes such as `/products/` and `/request-a-quote/` continue to work after refresh.

## Fastest setup

1. Create a **new public repository** in the fresh GitHub account.
2. Upload the contents of this ZIP to the repository. Keep the `.github/workflows/deploy-pages.yml` file; enable “show hidden files” if your upload tool hides dotfiles.
3. Rename the default branch to `main` if necessary.
4. Open **Settings → Pages**.
5. Under **Build and deployment → Source**, select **GitHub Actions**.
6. Open the **Actions** tab and wait for **Deploy YOU LI to GitHub Pages** to finish.
7. Open the URL shown by the workflow.

## Choose the repository name

### Option A: account homepage

Name the repository exactly:

```text
YOUR-NEW-USERNAME.github.io
```

The site URL will be:

```text
https://YOUR-NEW-USERNAME.github.io/
```

### Option B: ordinary repository

Use any repository name, such as:

```text
youli
```

The site URL will be:

```text
https://YOUR-NEW-USERNAME.github.io/youli/
```

The workflow automatically detects which case is being used and sets the correct asset paths.

## If uploading a ZIP

GitHub does not accept a ZIP as a website repository by itself. Extract the ZIP first, then upload the **files and folders inside it**. The repository root must contain `package.json`, `vite.config.ts`, `client/`, and `.github/`.

Do not create an extra wrapper folder such as:

```text
repository/youli-recreated/package.json
```

The correct structure is:

```text
repository/package.json
repository/client/
repository/.github/workflows/deploy-pages.yml
```

## Important limitations

The request forms currently show a confirmation in the browser but do not send email. GitHub Pages is static hosting and cannot run the included Node server or a PHP mail handler. Connect the forms later to Formspree, EmailJS, Google Forms, or another form endpoint.

## Updating the site later

Edit the files in GitHub, commit to `main`, and the workflow will rebuild and redeploy automatically. You can also download this repository, edit it locally, and upload the changed files.
