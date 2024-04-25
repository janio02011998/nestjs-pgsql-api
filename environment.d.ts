declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PGSQL_USERNAME: string;
      PGSQL_PASSWORD: string;
      PGSQL_DATABASE: string;
      PGSQL_HOST: string;
      PGSQL_PORT: number;

      MAIL_HOST: string;
      MAIL_USER: string;
      MAIL_PASS: string;
    }
  }
}

export {};
