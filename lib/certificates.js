import certificates from "@/data/certificates.json";

const compact = (id) => String(id).toUpperCase().replace(/[^A-Z0-9]/g, "");

export function findCertificate(id) {
  const key = compact(id);
  return certificates.find((c) => compact(c.id) === key) ?? null;
}
