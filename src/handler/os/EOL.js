import os from 'os';
import { dispCurrentDir } from '../../helper/index.js';

export const getEOL = async () => {
  try {
    const eol = os.EOL;
    console.log(`Default system End-Of-Line (EOL): ${eol}`);
    dispCurrentDir();
  } catch (error) {
    console.error('Failed to retrieve EOL sequence:', error);
  }
};