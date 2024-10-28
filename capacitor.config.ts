import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'test.capacitor.camera',
  appName: 'Test Capacitor Camera',
  webDir: 'www',
  plugins: {    
  },
  includePlugins: [    
    "@capacitor/camera"    
  ]
};

export default config;
