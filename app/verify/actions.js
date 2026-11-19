"use server";

import { findCertificate } from "@/lib/certificates";

export async function verifyCertificate(_previousState, formData) {
  const id = String(formData.get("id") ?? "").trim().slice(0, 40);
  return { id, certificate: id ? findCertificate(id) : null };
}
