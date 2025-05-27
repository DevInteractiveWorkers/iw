import NavbarComponent from "../components/navbar";
import ReferralPageClient, {
  ParamsProps,
} from "../components/referral-page-client";

export default function Page(props: ParamsProps) {
  return (
    <div className="h-dvh relative flex flex-col">
      <div className="z-10">
        <NavbarComponent dark={true} />
      </div>
      <ReferralPageClient {...props} />
    </div>
  );
}
