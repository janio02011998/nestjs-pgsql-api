import { registerAs } from '@nestjs/config';

import { MailerOptions } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as path from 'path';

export default registerAs(
  'smtp',
  (): MailerOptions => ({
    template: {
      dir: path.resolve(__dirname, '..', '..', 'templates'),
      adapter: new HandlebarsAdapter({}),
      options: {
        extName: '.hbs',
        layoutsDir: path.resolve(__dirname, '..', '..', 'templates'),
      },
    },
    transport: {
      // For relay SMTP server set the host to smtp-relay.gmail.com
      // and for Gmail STMO server set it to smtp.gmail.com
      host: process.env.MAIL_HOST,
      // For SSL and TLS connection
      secure: true,
      port: 465,
      auth: {
        // Account gmail address
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    },
  }),
);

// export const mailerConfig: MailerOptions = {
//   template: {
//     dir: path.resolve(__dirname, '..', '..', 'templates'),
//     adapter: new HandlebarsAdapter({}),
//     options: {
//       extName: '.hbs',
//       layoutsDir: path.resolve(__dirname, '..', '..', 'templates'),
//     },
//   },
//    transport: {
//     // For relay SMTP server set the host to smtp-relay.gmail.com
//     // and for Gmail STMO server set it to smtp.gmail.com
//     host: configService.get('MAIL_HOST'),
//     // For SSL and TLS connection
//     secure: true,
//     port: 465,
//     auth: {
//       // Account gmail address
//       user: configService.get('MAIL_USER'),
//       pass: configService.get('MAIL_PASS')
//     },
//   },
// // transport: `smtps://janiocarvalhojr@gmail.com:janio@2024@smtp.domain.com`,
// };
