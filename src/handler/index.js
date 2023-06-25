import * as dir from './dir/index.js';
import * as basic from './basic/index.js';
import * as hash from './hash/index.js';
import * as zip from './zip/index.js';



export const lsHandler = dir.lsHandler;
export const cdHandler = dir.cdHandler;
export const upHandler = dir.upHandler;
export const catHandler = basic.catHandler;
export const addHandler = basic.addHandler;
export const rmHandler = basic.rmHandler;
export const rnHandler = basic.rnHandler;
export const cpHandler = basic.cpHandler;
export const mvHandler = basic.mvHandler;
export const hashHandler = hash.hashHandler;
export const compressFile = zip.compressFile;
export const decompressFile = zip.decompressFile;
export const clearHandler = basic.clearHandler;
