async function getData(): Promise<any> {
  try {
    const data = await fetch("/api/github", { method: "GET" });
    return { data };
  } catch (error) {
    console.log("🚀 ~ file: getData.ts:5 ~ getData ~ error:", error);
    return { error };
  }
}
