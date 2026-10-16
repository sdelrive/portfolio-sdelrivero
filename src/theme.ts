export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

// index.html aplica el tema guardado antes de que cargue React (así no parpadea);
// acá se lee ese valor para arrancar con el mismo tema.
export const getInitialTheme = (): Theme =>
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';

export const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // sin almacenamiento disponible (modo privado, etc.): el tema no se recuerda
  }
};
