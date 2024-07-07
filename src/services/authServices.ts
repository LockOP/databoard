import axios from "axios";
const api_endpoint = process.env.NEXT_PUBLIC_API_URL;

if (!api_endpoint) {
  console.error("API URL not found");
}

export async function syncUser(payload: {
  email: string;
  name?: string | null;
  imageUrl?: string | null;
}): Promise<{ message: string; _id: string }> {
  try {
    const response = await axios({
      url: `${api_endpoint}/api/auth/syncUser`,
      method: "POST",
      data: payload,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
