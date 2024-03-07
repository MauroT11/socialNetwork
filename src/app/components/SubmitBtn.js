'use client'

import { useFormStatus } from "react-dom";

export default function Submit({loading, btn}) {
  const formStatus = useFormStatus();

  return (
    <button type="submit" disabled={formStatus.pending} className="bg-orange-400 text-white border-black border-[1.5px] rounded-lg py-1 px-2">
      {formStatus.pending ? `${loading}` : `${btn}`}
    </button>
  );
}