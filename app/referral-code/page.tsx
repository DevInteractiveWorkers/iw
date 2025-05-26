import { getReferralById } from "@/lib/getReferralCode";
import ReferralCodeClient from "../components/referral-code-client";
import NotFound from "../not-found";
import Loader from "../components/loader";
import NavbarComponent from "../components/navbar";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

export default async function ReferralCodePage({ searchParams }: Props) {
  const code = searchParams.c;
  const referral = searchParams.r;

  console.log(referral);

  if (!code) return <NotFound />;

  const fetchedData = await getReferralById(code!);

  if (!fetchedData || !fetchedData.available) return <NotFound />;

  return (
    <div className="h-dvh relative flex flex-col">
      <div className="z-10">
        <NavbarComponent dark={true} />
      </div>
      <p>{referral}</p>
      <ReferralCodeClient code={code} data={fetchedData.data} />
    </div>
  );
}
