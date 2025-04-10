import { VA } from "@/app/content/vas";
export const getCurrentDate = (): number[] => {
  const currentDate = new Date();
  const year = String(currentDate.getFullYear()).slice(-2); // Get the last two digits of the year.
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  // Format the date in yy-mm-dd format:
  const formattedDate = [parseInt(day), parseInt(month), parseInt(year)];

  return formattedDate;
};

export interface formData {
  fullName: string;
  country: string;
  company: string;
  professional: string;
  size: string;
  staff: string;
  email: string;
  phone: string;
  message: string;
}

export interface smallFormData {
  fullName: string;
  email: string;
  phone: string;
}

export interface GetHiredformData {
  fullName: string | undefined;
  location: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  professional: string | undefined;
  file: Buffer | any;
  fileName: string | undefined;
}

export async function sendMail(data: formData | smallFormData) {
  const res = await fetch("/api/mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.ok;
}

export async function sendAffiliateMail(data: smallFormData) {
  const res = await fetch("/api/affiliate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.ok;
}

export async function sendGetHiredMail(data: GetHiredformData) {
  const res = await fetch("/api/hire", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.ok;
}

export class VAHandler {
  vas: VA[];
  constructor(vas: VA[]) {
    this.vas = vas;
  }

  offset(vas: VA[], s: number, e: number): VA[] {
    return vas.slice(s, e);
  }

  handler(team: number, offset?: boolean): VA[] {
    if (team === -1) {
      if (offset) {
        return this.offset(this.vas, 0, 4);
      } else {
        return this.vas;
      }
    } else {
      if (offset) {
        return this.offset(
          this.vas.filter((va) => va.team === team),
          0,
          4
        );
      } else {
        return this.vas.filter((va) => va.team === team);
      }
    }
  }
}
