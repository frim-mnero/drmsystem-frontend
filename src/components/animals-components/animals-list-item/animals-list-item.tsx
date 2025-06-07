import './animals-list-item.scss'
import React from "react";
import { AnimalsListItemType } from "../../../types/animal-types";
import { ANIMAL_GENDERS, ANIMAL_STATUSES, ANIMAL_TYPES } from "../../../const/animals-const";
import { CURRENCIES } from '../../../const/ui-const';
import { useAppSelector } from '../../../hooks';
import { getLanguageCode } from '../../../store/processes/user-process/user-selectors';

type AnimalListItemPropsType = {
  animal: AnimalsListItemType
}

function AnimalsListItem({ animal }: AnimalListItemPropsType) {
  const languageCode = useAppSelector(getLanguageCode);
  const isFundsRaised = animal.raised >= animal.debt;

  //Functions
  const showRaisedClassname = () => !isFundsRaised ? 'funds-not-collected' : 'funds-collected';
  const showDebtClassName = () => isFundsRaised ? 'animals-list-item-debt debt-is-paid' : 'animals-list-item-debt';

  return (
    <li className="animals-list-item">
      <div className="animals-list-item-nickname">{animal.nickname}</div>
      <div className="animals-list-item-gender">{ANIMAL_GENDERS[animal.genderCode][languageCode]}</div>
      <div className="animals-list-item-type">{ANIMAL_TYPES[animal.typeCode][languageCode]}</div>
      <div className="animals-list-item-status">{ANIMAL_STATUSES[animal.statusCode][languageCode]}</div>
      <div className="animals-list-item-raised">
        <span className={showRaisedClassname()}>{animal.raised}</span> {CURRENCIES.RUB[languageCode]}.
      </div>
      <div className={showDebtClassName()}>{animal.debt} {CURRENCIES.RUB[languageCode]}.</div>
    </li>
  );
}

export default AnimalsListItem;
