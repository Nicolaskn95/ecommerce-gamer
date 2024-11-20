import { useCallback } from "react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export default function useAPI() {
  const httpGet = useCallback(async function (path: string) {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const completeUrl = `${baseUrl}${uri}`;

    const response = await fetch(completeUrl);
    return extractData(response);
  }, []);

  const httpPost = useCallback(async function (path: string, body: any) {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const completeUrl = `${baseUrl}${uri}`;

    const response = await fetch(completeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return extractData(response);
  }, []);

  async function extractData(reponse: Response) {
    let content = "";
    try {
      content = await reponse.text();
      return JSON.parse(content);
    } catch (error) {
      return content;
    }
  }

  return { httpGet, httpPost };
}
