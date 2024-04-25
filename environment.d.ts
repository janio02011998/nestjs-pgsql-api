declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PGSQL_USERNAME: string;
      PGSQL_PASSWORD: string;
      PGSQL_DATABASE: string;
      PGSQL_HOST: string;
      PGSQL_PORT: number;
    }
  }
}

export {};
