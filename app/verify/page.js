import Image from "next/image";
import mist_forest_img from "@/public/images/mist_forest1.png";
import VerifyForm from "@/components/ui/verify/VerifyForm";

export const metadata = {
  title: "Verify Certificate",
  robots: { index: false, follow: false },
};

export default function VerifyPage() {
  return <main className="pt-28 pb-20 px-4 relative min-h-screen">
    <div className="absolute inset-0 -z-1">
      <Image
        src={mist_forest_img}
        alt=""
        sizes="100vw"
        placeholder="blur"
        className="object-cover w-screen h-screen sticky top-0"
      />
    </div>

    <div className="w-full max-w-2xl mx-auto green-glass-container p-6 md:p-8">
      <h2 className="mb-2">Verify a Certificate</h2>
      <p className="mb-6">
        Enter the certificate ID printed on the certificate.
      </p>
      <VerifyForm />
    </div>
  </main>;
}
