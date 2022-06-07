import createClub from './create';
import { findAll } from './search';

const main = (): any => {
  const msg = createClub(3, 'Boca Jrs');
  createClub(4, 'River Plate');
  console.log(msg);
  const res = findAll();
  console.log(res);
};

main();
