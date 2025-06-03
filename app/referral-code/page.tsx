import { TextInput } from "flowbite-react";
import { ParticlesComponent } from "../components/particles";
import NavbarComponent from "../components/navbar";
import ReferralCodeForm from "../components/form/referral-code";

export default function ReferralCodes() {
  return (
    <div className="h-screen relative flex flex-col bg-iw-red-3">
      <div className="z-10">
        <NavbarComponent />
      </div>
      <div className="p-2 h-full w-full flex justify-center items-center bg-gradient-to-b md:from-iw-red-3 md:via-transparent md:to-iw-red-3 z-10">
        <ReferralCodeForm />
      </div>
      <ParticlesComponent id="particles" />
    </div>
  );
}
