import {request} from "./generic.cervice.js";

const getSpecialty = (id) => request({ url: `specialties/${id}`, method: "get"});

const getSpecialtyNames = () => request({url: 'specialties/names', method: "get"})

const getSpecialties = () => request({ url: `specialties`, method: "get"});

export {
  getSpecialties, getSpecialty, getSpecialtyNames
}
