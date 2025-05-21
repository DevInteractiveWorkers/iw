"use client";
import { useState } from "react";

const ReferralCode = () => {
  const [referralCode, setReferralCode] = useState("");
  const [usedCodes, setUsedCodes] = useState<string[]>([]);
  const [validCodes, setValidCodes] = useState<string[]>([]);
  const [currentCode, setCurrentCode] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  function generateRC() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let chain = "";
    for (let i = 0; i < 4; i++) {
      chain += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const code = "IW-" + chain + "-25";
    setReferralCode(code);
    setValidCodes((prev) => [code, ...prev]);
  }

  function useCode(code: string) {
    if (validCodes.includes(code)) {
      setUsedCodes((prev) => [code, ...prev]);
      setValidCodes((prev) => prev.filter((validCode) => validCode !== code));
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  }

  return (
    <>
      <div className="h-screen p-5 flex flex-col gap-5">
        <h1 className="mb-2 text-2xl font-bold">Referral Code</h1>
        <p>
          IW-referral-code:
          <strong> {currentCode}</strong>{" "}
          {isInvalid && (
            <span className="text-red-500 font-semibold">
              Invalid or already used code.
            </span>
          )}
        </p>
        <div className="flex gap-5">
          <div className="flex flex-col gap-5">
            <div className="px-5 py-2 bg-gray-300 rounded-lg border-slate-400 border cursor-text">
              <pre>{referralCode || "IW-XXXX-25"}</pre>
            </div>
            <Button text="Generate Referral Code" onClick={generateRC} />
            <List title={"Valid Codes"} list={validCodes} />
          </div>
          <div className="flex flex-col gap-5">
            <input
              required
              pattern="^IW-[A-Z0-9]{4}-25$"
              placeholder="IW-XXXX-25"
              value={currentCode}
              title="Format: IW-XXXX-25 (X = A-Z or 0-9)"
              className="px-5 py-2 bg-gray-300 rounded-lg border-slate-400 border outline-none"
              onChange={(e) => {
                isInvalid && setIsInvalid(false);
                setCurrentCode(e.target.value);
              }}
            />
            <Button text="Use Code" onClick={() => useCode(currentCode)} />
            <List title={"Used Codes"} list={usedCodes} />
          </div>
        </div>
      </div>
    </>
  );
};

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="p-5 bg-blue-500 hover:bg-blue-700 border border-blue-500 transition-all rounded-lg text-white active:bg-white active:text-blue-500"
    >
      <strong>{text}</strong>
    </button>
  );
};

const List = ({ title, list }: { title?: string; list: string[] }) => {
  return (
    <div className="block">
      {title && <strong>{title}</strong>}
      <ul>
        {list.map((element) => (
          <li>
            <pre>{element}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReferralCode;
