import createClub from './create';
import deleteClub from './delete';
import { findAll, findByText, findOne } from './search';
import update from './update';

const main = (): any => {
  const msg = createClub(3, 'Boca Jrs');
  createClub(4, 'River Plate');
  console.log(msg);
  const filter = findByText('a');
  console.log(filter);
  const find = findOne(4);
  console.log(find);
  const resDelete = deleteClub(4); // 2
  console.log(resDelete); // 1
  const updateRes = update(3, 'Boca Jrs El Mas Grande');
  console.log(updateRes);
  const res = findAll();
  console.log(res);
};

main();
