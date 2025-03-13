import { google } from "googleapis";

const FOLDER_ID = "1PmSOQ-K1NM8EwX-8x93TxucWyfjVjBny"; // Replace with your folder ID

export async function getPublicImages() {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT), // Load from env
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });

  const drive = google.drive({ version: "v3", auth });

  const response = await drive.files.list({
    q: `'${FOLDER_ID}'`,
    fields: "files(id, name, mimeType)",
  });


  return response.data.files.map((file) => ({
    id: file.id,
    name: file.name,
    url: `https://drive.google.com/uc?id=${file.id}`,
  }));
}
