import os from 'os';

export const getUsername = async () => {
  try {
    const userInfo = await os.userInfo();
    const username = userInfo.username;
    console.log(`Current User Name: ${username}`);
  } catch (error) {
    console.error('Failed to retrieve current user name:', error);
  }
};

