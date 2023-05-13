export async function GET(request: Request, response: Response) {
  try {
    const { data, error } = getData();
    if (error) throw new Error("Fail to get data");
    return new Response(data.json())
  } catch (error: any) {
    return error.json();
  }
}
