import os from 'os';

export const getHomeDir = async () => {
  try {
    const homeDir = os.homedir();
    console.log(`Home Directory: ${homeDir}`);
  } catch (error) {
    console.error('Failed to retrieve home directory:', error);
  }
};