import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';


export async function getUniqueCategories() {
        const fileData = fs.readFile(PATH_DB, 'utf-8');
        const products = JSON.parse(fileData);

        return products.reduce((acc, {category}) => {
            if(acc.includes(category)){
                return acc;
            }
        
        },[]);
    
};

console.log(await getUniqueCategories());