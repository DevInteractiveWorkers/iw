
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { formData, getCurrentDate } from "@/app/components/lib/utils";

export async function POST(req: NextRequest): Promise<Response> {
    const data:formData | any = await req.json()
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

    const date = getCurrentDate()
    try {
        const mail = await transporter.sendMail({
            from: process.env.NODEMAILER_USER,
            to: "gm@interactiveworkers.com",
            bcc:["info@interactiveworkers.com","ceo@interactiveworkers.com"],
            subject: `${data.fullName} tried to contact you through interactiveworkers.com contact form`,
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
                <img width= "500px" height="180px" style="text-align: center; border-radius: 30px; display: block; margin-left: auto; margin-right: auto;" src="https://images2.imgbox.com/bd/6d/iKxkgI9e_o.png"/>
                <h4 style="font-weight: 400;">
                Someone tried to contact us!:
                </h4>
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                            <td style="background: #1C1C1C;
                                text-align: left;
                                vertical-align: middle;
                                font-size: 14px;
                                text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                                border: 1px solid #C1C3D1;
                                padding: 10px;
                                color: #FFFFFF;">
                            Date</td>
                            <td style="background: #FFFFFF;
                                text-align: left;
                                vertical-align: middle;
                                font-size: 14px;
                                text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                                border-bottom: 1px solid #C1C3D1;
                                padding: 10px;">
                            Day: ${date[0]} Month: ${date[1]} Year: 20${date[2]}</td>
                            </tr>
                            
                            <tr>
                            <td style="background: #1C1C1C;
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
                            <td style="background: #1C1C1C;
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
                            <td style="background: #1C1C1C;
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
                            
                            <tr>
                            <td style="background: #1C1C1C;
                                text-align: left;
                                vertical-align: middle;
                                font-size: 14px;
                                text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                                border: 1px solid #C1C3D1;
                                padding: 10px;
                                color: #FFFFFF;">
                            Country</td>
                            <td style="background: #FFFFFF;
                                text-align: left;
                                vertical-align: middle;
                                font-size: 14px;
                                text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                                border-bottom: 1px solid #C1C3D1;
                                padding: 10px;">
                            ${data.country}</td>
                            </tr>

                            <tr>
                            <td style="background: #1C1C1C;
                                text-align: left;
                                vertical-align: middle;
                                font-size: 14px;
                                text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                                border: 1px solid #C1C3D1;
                                padding: 10px;
                                color: #FFFFFF;">
                            Company name</td>
                            <td style="background: #FFFFFF;
                                text-align: left;
                                vertical-align: middle;
                                font-size: 14px;
                                text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                                border-bottom: 1px solid #C1C3D1;
                                padding: 10px;">
                            ${data.company}</td>
                            </tr>

                            <tr>
                            <td style="background: #1C1C1C;
                                text-align: left;
                                vertical-align: middle;
                                font-size: 14px;
                                text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                                border: 1px solid #C1C3D1;
                                padding: 10px;
                                color: #FFFFFF;">
                            Company Size</td>
                            <td style="background: #FFFFFF;
                                text-align: left;
                                vertical-align: middle;
                                font-size: 14px;
                                text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                                border-bottom: 1px solid #C1C3D1;
                                padding: 10px;">
                            ${data.size}</td>
                            </tr>

                            <tr>
                            <td style="background: #1C1C1C;
                                text-align: left;
                                vertical-align: middle;
                                font-size: 14px;
                                text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                                border: 1px solid #C1C3D1;
                                padding: 10px;
                                color: #FFFFFF;">
                            Number of staff required</td>
                            <td style="background: #FFFFFF;
                                text-align: left;
                                vertical-align: middle;
                                font-size: 14px;
                                text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                                border-bottom: 1px solid #C1C3D1;
                                padding: 10px;">
                            #${data.staff}</td>
                            </tr>

                            <tr>
                            <td style="background: #1C1C1C;
                                text-align: left;
                                vertical-align: middle;
                                font-size: 14px;
                                text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                                border: 1px solid #C1C3D1;
                                padding: 10px;
                                color: #FFFFFF;">
                            Professional</td>
                            <td style="background: #FFFFFF;
                                text-align: left;
                                vertical-align: middle;
                                font-size: 14px;
                                text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                                border-bottom: 1px solid #C1C3D1;
                                padding: 10px;">
                            #${data.professional}</td>
                            </tr>

                            <tr>
                            <td style="background: #1C1C1C;
                                text-align: left;
                                vertical-align: middle;
                                font-size: 14px;
                                text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                                border: 1px solid #C1C3D1;
                                padding: 10px;
                                color: #FFFFFF;">
                            Message</td>
                            <td style="background: #FFFFFF;
                                text-align: left;
                                vertical-align: middle;
                                font-size: 14px;
                                text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
                                border-bottom: 1px solid #C1C3D1;
                                padding: 10px;">
                            ${data.message}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="text-align: center;">--------------------------</p>
                    <p style="text-align: center; font-size:12px">Interactive Workers. All rights reserved. 20${date[2]}.<br/><br/>
                    This email is for informational purposes only. Please do not reply to this email address, as it is not enabled to receive messages.</p>
                </div>
                </div> 
            </body>
        </html>
            `
        }, ((err)=>{console.log(err);
        }))
    } catch (error) {
        return NextResponse.json({ status: 400, revalidated: true, now: Date.now() })
    }

    return NextResponse.json({ status: 200, revalidated: true, now: Date.now() })
  }

