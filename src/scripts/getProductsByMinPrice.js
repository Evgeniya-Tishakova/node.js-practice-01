import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const getProductsByMinPrice = async (num) => {
  try {
    const collection = await fs.readFile(PATH_DB, 'utf-8');
    const parsCollection = JSON.parse(collection);
    //--
    return parsCollection.filter(({ price }) => price >= num);
  } catch (error) {
    console.error(error);
  }
};
// getProductsByMinPrice(400).then(console.log);
console.log(await getProductsByMinPrice(400));
