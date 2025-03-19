"use server";
async function getBaseUrl() {
  return process.env.APP_BASE_URL;
}

export default async function Home() {
  const baseUrl = await getBaseUrl();
  return (
    <div>
      <p>APP_BASE_URL: ${baseUrl}</p>
    </div>
  );
}
