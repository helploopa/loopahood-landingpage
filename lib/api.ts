const BASE_URL = "https://n8n.srv996951.hstgr.cloud";


export interface WaitlistPayload {
  name: string;
  email: string;
  zipcode: string;
}

export interface ApiResponse {
  success: boolean;
  error?: string;
}

export async function submitWaitlist(payload: WaitlistPayload): Promise<ApiResponse> {
  const response = await fetch(
    `${BASE_URL}/webhook/3b60f0d5-2478-45f1-b1bd-5a640ee27985`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    return { success: false, error: `Server error: ${response.status}` };
  }

  return { success: true };
}
