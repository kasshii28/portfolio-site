import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_KEY); //SendGridのAPIキー

    //自分に届くメール
    const msgToManager = {
      to: "hk.kasshii@gmail.com",
      from: "hk.kasshii@gmail.com",
      subject: "ポートフォリオサイトからの問い合わせ",
      text:
        req.body.name +
        "様からお問合せがありました。" +
        "メッセージ：" +
        req.body.message +
        "アドレス：" +
        req.body.email,
      html: `
        <p>【名前】</p>
        <p>${req.body.name}</p>
        <p>【メールアドレス】</p>
        <p>${req.body.email}</p>
        <p>【メッセージ内容】</p>
        <p>${req.body.message}</p>
      `,
    };

    //相手に届くメール
    const msgToUser = {
      to: req.body.email,
      from: "hk.kasshii@gmail.com",
      subject: "お問合せありがとうございました。",
      text:
        "お問合せを受け付けました。回答をお待ちください。" + req.body.message,
      html: `
        <p>${req.body.name}様</p>
        <p>お問合せを受け付けました。回答をお待ちください。</p><br/>

        <p>【問い合わせ内容】</p>
        <p>${req.body.message}</p>
      `,
    };

    (async () => {
      try {
        await sgMail.send(msgToManager);
        await sgMail.send(msgToUser);
        res.status(200).json(msgToUser);
      } catch (error: any) {
        console.error(error);
        res.status(500).json(error);
      }
    })();
  }
}
