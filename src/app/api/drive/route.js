import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const folderName = "carlo-biaggioli-2019";

  try {
    const response = await axios.get(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
      {
        params: { expression: `folder:${folderName}` },
        auth: { username: apiKey, password: apiSecret },
      }
    );

    const imageIds = response.data.resources.map((image) => image.public_id);

    return NextResponse.json(imageIds); // Return an array of public_id values
  } catch (error) {
    console.error(
      "Cloudinary API error:",
      error.response?.data || error.message
    );
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
