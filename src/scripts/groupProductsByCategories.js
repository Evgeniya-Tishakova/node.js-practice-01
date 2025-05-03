import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const groupProductsByCategories = async () => {
  const catagory = await fs.readFile(PATH_DB, 'utf-8');
  const parseCatagory = JSON.parse(catagory);

  return parseCatagory.reduce((acm, { name, category }) => {
    if (!acm[category]) {
      acm[category] = [];
    }
    acm[category].push(name);
    return acm;
  }, {});
};

console.log(await groupProductsByCategories());
