import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(
    // {
    //         // This is needed, or else Vite will try to find image paths (which it wont be able to find because this will be called on the web, not directly)
    //         // For example <img src="/images/logo.png"> will not work without the code below
    //         template: {
    //             transformAssetUrls: {
    //                 includeAbsolute: false,
    //             },
    //         },
    //     }
      )
      ],
})
