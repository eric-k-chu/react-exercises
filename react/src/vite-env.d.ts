/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAX_GUESSES: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
