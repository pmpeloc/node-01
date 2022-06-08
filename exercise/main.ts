import createClub from './create';
import { findAll, findByText, findOne } from './search';

const main = (): any => {
  const msg = createClub(3, 'Boca Jrs');
  createClub(4, 'River Plate');
  console.log(msg);
  const res = findAll();
  console.log(res);
  const filter = findByText('a');
  console.log(filter);
  const find = findOne(4);
  console.log(find);
};

main();
