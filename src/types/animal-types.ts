import { AnimalGenderCodes, AnimalTypeCodes, AnimalStatusCodes } from '../const/animals-const';

export type AnimalsProcessType = {
  animalsList: AnimalsListType | null
};

export type AnimalsListItemType = {
  id: number
  nickname: string,
  genderCode: AnimalGenderCodes,
  typeCode: AnimalTypeCodes,
  statusCode: AnimalStatusCodes,
  raised: number,
  debt: number
};

export type AnimalsListType = AnimalsListItemType[];
