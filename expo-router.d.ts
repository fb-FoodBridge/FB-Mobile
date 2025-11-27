declare module 'expo-router' {
  import { ComponentType } from 'react';
  export function useRouter(): {
    push: (path: string) => void;
    replace: (path: string) => void;
    back: () => void;
  };
  export const Stack: ComponentType<any>;
}
