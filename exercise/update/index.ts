import { IClub, clubes } from '../create';
import { IResponse } from '../delete';

const update = (id: number, name: string): IResponse => {
  const pos = clubes.findIndex((club: IClub) => club.id === id);
  if (pos === -1) {
    // -1 0
    return {
      msg: 'Club inválido',
      status: false,
    };
  } else {
    clubes[pos].name = name;
    return {
      msg: 'Club modificado exitosamente',
      status: true,
    };
  }
};

export default update;
