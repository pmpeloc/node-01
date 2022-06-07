// INTERFACES: moldes que representan estructuras de datos
// CLASE: molde para crear objetos

interface IClub {
  id: number;
  name: string;
}

interface IResponse extends IClub {
  msg: string;
}

const clubes: IClub[] = [];

const createClub = (id: number, name: string): IResponse => {
  clubes.push({ id, name });
  return { msg: 'Club successfuly created', name, id };
};

export default createClub;
