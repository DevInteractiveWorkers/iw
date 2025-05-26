import ReferralPageClient, {
  ParamsProps,
} from "../components/referral-page-client";

export default function Page(props: ParamsProps) {
  console.log("page", props);
  return <ReferralPageClient {...props} />;
}
