
export const getCurrentDate = (): number[] => {
  const currentDate = new Date();
  const year = String(currentDate.getFullYear()).slice(-2); // Get the last two digits of the year.
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  // Format the date in yy-mm-dd format:
  const formattedDate = [parseInt(day),parseInt(month),parseInt(year)];

  return formattedDate;

};

export interface formData {
  fullName:string,
  country:string,
  company:string,
  professional:string,
  size:string,
  staff:string,
  email:string,
  phone:string,
  message:string
}

export interface GetHiredformData {
  fullName:string | undefined,
  location:string | undefined,
  email:string | undefined,
  phone:string | undefined,
  professional:string | undefined,
  file:Buffer | any,
  fileName:string | undefined
  }

export async function sendMail (data:formData) {
  
  
  const res = await fetch("/api/mail", {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  
  return res.ok
  
}

export async function sendGetHiredMail (data:GetHiredformData) {
  
  
  const res = await fetch("http://localhost:3000/api/hire", {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  
  return res.ok
  
}