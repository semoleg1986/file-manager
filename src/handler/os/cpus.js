import os from 'os';

export const getCPUs = async () => {
  try {
    const cpus = os.cpus();
    const cpuCount = cpus.length;

    console.log(`Total number of CPUs: ${cpuCount}`);

    cpus.forEach((cpu, index) => {
      const { model, speed } = cpu;
      const clockRate = (speed / 1000).toFixed(2);

      console.log(`CPU ${index + 1}:`);
      console.log(`  Model: ${model}`);
      console.log(`  Clock Rate: ${clockRate} GHz`);
    });
  } catch (error) {
    console.error('Failed to retrieve CPU information:', error);
  }
};