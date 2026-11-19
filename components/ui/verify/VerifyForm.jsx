"use client";

import { useActionState } from "react";
import { verifyCertificate } from "@/app/verify/actions";

export default function VerifyForm() {
  const [state, formAction, isPending] = useActionState(
    verifyCertificate,
    { id: "", certificate: null },
  );

  return <>
    <form action={formAction} className="flex flex-wrap gap-2 mb-2">
      <label htmlFor="certificate-id" className="sr-only">Certificate ID</label>
      <input
        id="certificate-id"
        name="id"
        defaultValue={state.id}
        placeholder="BAT26-XXXX-XXXX"
        required
        maxLength={40}
        autoComplete="off"
        spellCheck={false}
        className="
          flex-1 min-w-56 px-3 py-2 rounded-lg uppercase bg-neutral-light
          text-neutral-dark placeholder:text-neutral-dark-lighter
        "
      />
      <button
        type="submit"
        disabled={isPending}
        className="
          bg-neutral-light text-primary rounded-lg px-4 py-2
          hover:bg-secondary active:bg-secondary disabled:opacity-60
        "
      >
        {isPending ? "Checking..." : "Verify"}
      </button>
    </form>

    {!isPending && state.id && (state.certificate
      ? <ValidCertificate certificate={state.certificate} />
      : <p role="status" className="mt-6 p-4 rounded-lg border-2 border-red-400 font-medium">
          No certificate found for this ID. Check it for typos and try again.
        </p>
    )}
  </>;
}


function ValidCertificate({ certificate: c }) {
  const rows = [
    ["Awarded to", c.name],
    ["Certificate", c.title],
    ["Result", c.place],
    ["Event", c.event],
    ["Organized by", c.organizer],
    ["Held", c.held],
    ["Issued", c.issued],
    ["Certificate ID", c.id],
  ];

  return <div role="status" className="mt-6 p-4 rounded-lg border-2 border-secondary">
    <p className="font-bold text-secondary mb-3">✓ This certificate is valid</p>
    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
      {rows.filter(([, value]) => value).map(([label, value]) => <div key={label} className="contents">
        <dt className="text-neutral-light-darker">{label}</dt>
        <dd className="font-medium break-words">{value}</dd>
      </div>)}
    </dl>
  </div>;
}
