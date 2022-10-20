import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen-contact',
  templateUrl: './main-screen-contact.component.html',
  styleUrls: ['./main-screen-contact.component.scss']
})
export class MainScreenContactComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    const nodemailer = require('nodemailer');
    const SMTP_CONFIG = require('./smtp.js')

    const transporter = nodemailer.createTransport({
      host: SMTP_CONFIG.host,
      port: SMTP_CONFIG.port,
      secure: false,
      auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
      },
      tls: {
        rejectUnauthorized: false
      }
    })

  async function run() {
    const mailSend = transporter.sendMail({
      text: 'Texto do Email',
      subject: 'Assunto do Email',
      from: 'Bruno Passos <brunopassosdeveloper@gmail.com>',
      to: ['brunopassosdeveloper@gmail.com','bruno.passos@outlook.com.br','bruno.leopold@hotmail.com']
    },
      console.log()
    )
    }
  }
}
