
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getCurrentDate, smallFormData } from "@/app/components/lib/utils";

export async function POST(req: NextRequest): Promise<Response> {
    const data:smallFormData = await req.json()
    const transporter = nodemailer.createTransport({
        service:'gmail',
        secure: true,
        tls:{
            rejectUnauthorized: false
        },
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        }
    });
    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });
    const date = getCurrentDate()
    const mailData = {
        from: process.env.NODEMAILER_USER,
        to: "thesofoko@gmail.com",
        /* bcc:["info@interactiveworkers.com","ceo@interactiveworkers.com"], */
        subject: `Affiliate Program | ${data.fullName}`,
        html:`
        <html>
        <head>
            <link href="https://fonts.googleapis.com/css?family=Goudy+Bookletter+1911|Share+Tech" rel="stylesheet">
        </head>
        <body style="margin: auto;
            width: fit-content!important;">
            <div style="paddingimport { formData } from 'lib/utils';
: 10px;
            background: #E5B43C;
            border-radius: 17px;">
            <div style="background-color: #fff; padding: 20px; border-radius: 10px;">
            <img width= "550px" height="150px" style="text-align: center; border-radius: 30px; display: block; margin-left: auto; margin-right: auto;" src="https://images2.imgbox.com/bd/6d/iKxkgI9e_o.png"/>
            <h4 style="font-size:24px; font-weight: 600; width:100%; text-align:center; color:#1C1C1C;">
            ${data.fullName} is interested in our Affiliate Program!
            </h4>
                <table style="width: 100%;">
                    <tbody>
                        <tr>
                        <td style="background: #C1272D;
                            text-align: left;
                            vertical-align: middle;
                            font-size: 14px;
                            text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                            border: 1px solid #C1C3D1;
                            padding: 10px;
                            color: #FFFFFF;">
                        Date (DD/MM/YY)</td>
                        <td style="background: #FFFFFF;
                            text-align: left;
                            vertical-align: middle;
                            font-size: 14px;
                            text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                            border-bottom: 1px solid #C1C3D1;
                            padding: 10px;">
                        ${date[0]} / ${date[1]} / 20${date[2]}</td>
                        </tr>
                        
                        <tr>
                        <td style="background: #C1272D;
                            text-align: left;
                            vertical-align: middle;
                            font-size: 14px;
                            text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                            border: 1px solid #C1C3D1;
                            padding: 10px;
                            color: #FFFFFF;">
                        Name</td>
                        <td style="background: #FFFFFF;
                            text-align: left;
                            vertical-align: middle;
                            font-size: 14px;
                            text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                            border-bottom: 1px solid #C1C3D1;
                            padding: 10px;">
                        ${data.fullName}</td>
                        </tr>
                        
                        <tr>
                        <td style="background: #C1272D;
                            text-align: left;
                            vertical-align: middle;
                            font-size: 14px;
                            text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                            border: 1px solid #C1C3D1;
                            padding: 10px;
                            color: #FFFFFF;">
                        Email</td>
                        <td style="background: #FFFFFF;
                            text-align: left;
                            vertical-align: middle;
                            font-size: 14px;
                            text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                            border-bottom: 1px solid #C1C3D1;
                            padding: 10px;">
                         ${data.email}</td>
                        </tr>
                      
                        <tr>
                        <td style="background: #C1272D;
                            text-align: left;
                            vertical-align: middle;
                            font-size: 14px;
                            text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                            border: 1px solid #C1C3D1;
                            padding: 10px;
                            color: #FFFFFF;">
                        Phone</td>
                        <td style="background: #FFFFFF;
                            text-align: left;
                            vertical-align: middle;
                            font-size: 14px;
                            text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                            border-bottom: 1px solid #C1C3D1;
                            padding: 10px;">
                        ${data.phone}</td>
                        </tr>
                        
                       
                    </tbody>
                </table>
                <p style="text-align: center;">--------------------------</p>
                <p style="text-align: center; font-size:12px">Interactive Workers. All rights reserved. 20${date[2]}.<br/><br/>
                This email is for informational purposes only. Please do not reply to this email address, as it is not enabled to receive messages.</p>
            </div>
            </div> 
        </body>
    </html>`}
    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(info);
            }
        });
    });
    
    return NextResponse.json({ status: 200, revalidated: true, now: Date.now() })
    };


