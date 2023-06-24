import os from 'os';

export const getEOL = async () => {
  try {
    const eol = os.EOL;
    console.log(`Default system End-Of-Line (EOL): ${eol}`);
  } catch (error) {
    console.error('Failed to retrieve EOL sequence:', error);
  }
};