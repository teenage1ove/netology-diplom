/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string
	// Добавьте другие переменные окружения при необходимости
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
