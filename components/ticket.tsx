import Image from "next/image";

export default function Ticket() {
  return (
    <div
      id="ticket"
      className="grid grid-cols-[auto_auto] w-max group/ticket divide-x-[1px] divide-dashed divide-black"
    >
      <div
        className="bg-iw-red-1 corner-scoop rounded-r-xl py-4 w-max
            group-hover/ticket:rotate-[-2deg] transition-all duration-100 origin-bottom-right"
      >
        <div className="flex items-start p-4 gap-4">
          <Image
            width={1080}
            height={1080}
            className="w-min max-w-[50px] object-contain"
            alt="logo"
            src="/logo/03_Logo_Mark/03_Logo_Mark-01.png"
          />
          <span className="uppercase text-wrap font-medium text-8xl leading-[0.8] pointer-events-none select-none">
            One
            <br /> Week
            <br /> Free
          </span>
        </div>
      </div>
      <button
        className="bg-white h-full w-max overflow-hidden corner-scoop rounded-l-xl px-4 py-10 
            group-hover/ticket:rotate-[7deg] transition-all duration-100 origin-bottom-left"
      >
        <Image
          src={"/bar-code.png"}
          width={1080}
          height={1080}
          alt="bar-code"
          className="object-contain w-min h-min max-h-[250px] pointer-events-none"
        />
      </button>
    </div>
  );
}
