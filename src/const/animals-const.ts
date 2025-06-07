import { LanguageCodes } from './languages-const';

export enum AnimalGenderCodes {
  Male = 'MALE',
  Famale = 'FEMALE',
  Unknown = 'UNKNOWN'
};

export enum AnimalTypeCodes {
  Dog = 'DOG',
  Cat = 'CAT'
};

export enum AnimalStatusCodes {
  Adopted = 'ADOPTED',
  Stray = 'STRAY',
  InShelter = 'IN_SHELTER',
  InFoster = 'IN_FOSTER',
  InClinic = 'IN_CLINIC'
};

export const ANIMAL_GENDERS = {
  MALE: {
    [LanguageCodes.Russian]: 'М',
    [LanguageCodes.English]: 'М'
  },
  FEMALE: {
    [LanguageCodes.Russian]: 'Ж',
    [LanguageCodes.English]: 'F'
  },
  UNKNOWN: {
    [LanguageCodes.Russian]: 'Н',
    [LanguageCodes.English]: 'U'
  }
}

export const ANIMAL_TYPES = {
  DOG: {
    [LanguageCodes.Russian]: 'Собака',
    [LanguageCodes.English]: 'Dog'
  },
  CAT: {
    [LanguageCodes.Russian]: 'Кошка',
    [LanguageCodes.English]: 'Cat'
  }
}

export const ANIMAL_STATUSES = {
  ADOPTED: {
    [LanguageCodes.Russian]: 'Добавлено',
    [LanguageCodes.English]: 'Adopted'
  },
  STRAY: {
    [LanguageCodes.Russian]: 'Бездомный',
    [LanguageCodes.English]: 'Stray'
  },
  IN_SHELTER: {
    [LanguageCodes.Russian]: 'В приюте',
    [LanguageCodes.English]: 'In shelter'
  },
  IN_FOSTER: {
    [LanguageCodes.Russian]: 'Пристроен',
    [LanguageCodes.English]: 'In foster'
  },
  IN_CLINIC: {
    [LanguageCodes.Russian]: 'В клинике',
    [LanguageCodes.English]: 'In clinic'
  }
}
