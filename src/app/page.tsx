import WiFiQrGenerator from "../components/custom/WifiQrGenerator";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold text-center">
        WiFi QR Code Generator
      </h2>
      <WiFiQrGenerator />
    </main>
  );
}
