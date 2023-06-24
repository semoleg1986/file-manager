import os from 'os';

export const getArchitecture = async () => {
  try {
    const architecture = os.arch();
    console.log(`CPU Architecture: ${architecture}`);
  } catch (error) {
    console.error('Failed to retrieve CPU architecture:', error);
  }
};

