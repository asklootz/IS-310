# F5 Development Portfolio

A bilingual portfolio website for F5 Development, built as part of IS-310. It
introduces the team, presents projects and provides a contact form that sends an
email and stores each enquiry in Google Sheets.

## Features

- Norwegian and English content
- Light and dark themes
- Section-aware navigation with smooth scrolling
- Expandable project and team-member detail modals
- Background-scroll lock and Escape-key modal closing
- Contact form with EmailJS notifications and Google Sheets storage

## Technology

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4
- EmailJS for contact email delivery
- Google Apps Script and Google Sheets for form-submission storage
- GitHub Pages for deployment

## Local development

Prerequisites: Node.js 20 or later and npm.

```bash
npm install
cp .env.example .env
npm run dev
```

Vite starts on `http://localhost:8443` by default. Configure the contact-form
variables described below before submitting the form locally.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Run the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run format` | Format supported files with oxfmt. |
| `npm run deploy -- -m "message"` | Build and publish the site to GitHub Pages. |

## Deployment

The site is published to [GitHub Pages](https://asklootz.github.io/IS-310/).
Deploy the current branch with:

```bash
npm run deploy -- -m "Deploy React app to GitHub Pages"
```

The `predeploy` script runs `npm run build` before publishing.

## Contact form

The form sends the notification through EmailJS and submits each message to a
Google Apps Script web app for storage in Google Sheets. The EmailJS public key is
safe to expose in the site; restrict it to this website's domain in EmailJS.

1. Create a Google Sheet with columns for timestamp, name, email, subject, message,
	and language. Copy its ID from its URL.
2. In [script.google.com](https://script.google.com), create a new project, replace
	its `Code.gs` contents with [google-apps-script/Code.gs](google-apps-script/Code.gs),
	and save it.
3. In **Project Settings > Script Properties**, add `SPREADSHEET_ID`.
4. Deploy it as a **Web app**: execute as **Me**, with access set to **Anyone**.
	Copy the deployment URL ending in `/exec`.
5. In EmailJS, create an email service and a template. The template can use
	`{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`, and `{{timestamp}}`.
	Copy its service ID, template ID, and public key.
6. Copy [.env.example](.env.example) to `.env`, set the Apps Script URL and all
	three EmailJS values, then rebuild and deploy the site.

### Configuration

| Variable | Purpose |
| --- | --- |
| `VITE_CONTACT_FORM_ENDPOINT` | Google Apps Script web-app URL ending in `/exec`. |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service identifier. |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template identifier. |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS browser public key. |

The EmailJS template can use `{{name}}`, `{{email}}`, `{{subject}}`,
`{{message}}`, `{{timestamp}}`, and `{{lang}}`.

Do not add private credentials to variables prefixed with `VITE_`: Vite embeds
them in the client-side bundle. Keep the Spreadsheet ID in Apps Script Script
Properties, and keep `.env` untracked.

## Project structure

```text
src/
	App.tsx                 Application state and section composition
	components/             Shared display components
	data/                   Team, project, and translation data
	sections/               Page sections and modal interactions
	index.css               Theme and global styling
google-apps-script/
	Code.gs                 Google Sheets web-app endpoint
```
