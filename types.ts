// Fix: Define and export DragStyle, Page, and AppState types to resolve import errors across the application.
export interface DragStyle {
  id: number;
  name: string;
  keywords: string;
  energy: string;
  prompt: string;
}

export type Page = 'home' | 'camera' | 'favorites' | 'profile' | 'gallery';

export type AppState = 'start' | 'upload' | 'select_style' | 'processing' | 'result';
