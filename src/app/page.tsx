"use server";
function getBaseUrl() {
  return process.env.APP_BASE_URL;
}

export default function Home() {
  const baseUrl = getBaseUrl();
  return (
    <div>
      <p>APP_BASE_URL: ${baseUrl}</p>
    </div>
  );
}
