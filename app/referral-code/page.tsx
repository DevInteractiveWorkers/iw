import NavbarComponent from "../components/navbar";
import ReferralCodeComponent from "../components/referral-code-component";

const ReferralCode = () => {
  return (
    <div className="h-screen relative flex flex-col">
      <NavbarComponent dark={true} />
      <ReferralCodeComponent />
    </div>
  );
};

export default ReferralCode;
