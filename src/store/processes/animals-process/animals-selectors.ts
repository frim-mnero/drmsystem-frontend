import { NameSpace } from "../../../const/common-const";
import { StateType } from "../../../types/state-types";
import { AnimalsListType } from "../../../types/animal-types";

export const getAnimalsList = (state: StateType): AnimalsListType | null => state[NameSpace.Animals].animalsList;
