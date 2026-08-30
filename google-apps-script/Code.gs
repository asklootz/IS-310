/**
 * Deploy this script as a Google Apps Script web app. Configure SPREADSHEET_ID
 * in Script Properties. Email is sent separately by EmailJS from the website.
 */
function doPost(event) {
  try {
    const submission = JSON.parse(event.postData.contents);
    validateSubmission(submission);

    const properties = PropertiesService.getScriptProperties();
    appendToSpreadsheet(submission, properties.getProperty('SPREADSHEET_ID'));

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, error: error.message });
  }
}

function validateSubmission(submission) {
  ['name', 'email', 'subject', 'message'].forEach(function (field) {
    if (!submission[field] || typeof submission[field] !== 'string') {
      throw new Error('Missing required field: ' + field);
    }
  });
}

function appendToSpreadsheet(submission, spreadsheetId) {
  if (!spreadsheetId) throw new Error('SPREADSHEET_ID is not configured');

  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
  sheet.appendRow([
    submission.timestamp || new Date().toISOString(),
    submission.name,
    submission.email,
    submission.subject,
    submission.message,
    submission.lang || '',
  ]);
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}