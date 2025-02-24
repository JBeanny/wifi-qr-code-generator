"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

const WiFiQrGenerator = () => {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [encryption, setEncryption] = useState("WPA");
  const [qrValue, setQrValue] = useState("");

  const generateQRCode = () => {
    if (!ssid) {
      alert("Please enter a network name (SSID)");
      return;
    }
    const qrData = `WIFI:T:${encryption};S:${ssid};P:${password};H:false;;`;
    setQrValue(qrData);
  };

  const refresh = () => {
    setSsid("");
    setPassword("");
    setEncryption("");
    setQrValue("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
      <div className="flex justify-end">
        <RefreshCcw
          size={20}
          className="cursor-pointer hover:scale-90 duration-200 transition-all active:rotate-[270deg]"
          onClick={refresh}
        />
      </div>
      <h2 className="text-2xl font-semibold text-center">
        WiFi QR Code Generator
      </h2>
      <Input
        type="text"
        placeholder="Network Name (SSID)"
        value={ssid}
        onChange={(e) => setSsid(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password (leave blank for open network)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select
        className="w-full border p-2 rounded-md"
        value={encryption}
        onChange={(e) => setEncryption(e.target.value)}>
        <option value="WPA">WPA/WPA2</option>
        <option value="WEP">WEP</option>
        <option value="nopass">Open Network</option>
      </select>
      <Button onClick={generateQRCode} className="w-full">
        Generate QR Code
      </Button>
      {qrValue && (
        <div className="flex flex-col items-center space-y-4">
          <QRCodeCanvas value={qrValue} size={200} />
          <p className="text-sm text-gray-600">Scan to connect</p>
        </div>
      )}
    </div>
  );
};

export default WiFiQrGenerator;
