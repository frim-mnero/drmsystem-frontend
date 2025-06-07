import './animals-list.scss';
import React, { useEffect } from 'react';
import AnimalsListItem from '../animals-list-item/animals-list-item';
import Message from '../../page-components/message/message';
import Loader from '../../page-components/loader/loader';
import { getAnimalsList } from '../../../store/processes/animals-process/animals-selectors';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { animalsListAction } from '../../../store/api-actions/animals-api-actions';
import { LoaderColors, LoaderSizes } from '../../../const/classnames-const';
import { ANIMALS_MESSAGES } from '../../../const/messages-const';
import { getLanguageCode } from '../../../store/processes/user-process/user-selectors';
import { MessageTextColors, MessageTextSizes } from '../../../const/common-const';

function AnimalsList() {
  const dispatch = useAppDispatch();
  const languageCode = useAppSelector(getLanguageCode);
  const animalsList = useAppSelector(getAnimalsList);
  
  //Effects
  useEffect(() => {
    if (animalsList) return;

    dispatch(animalsListAction());
  }, []);

  // Renders
  const renderAnimalsList = () =>(
    <ul className="animals-list">
      {animalsList && animalsList.map((animal) => (<AnimalsListItem animal={animal} key={animal.id} />))}
    </ul>
    
  );
  const renderAnimalsPageContent = () => {
    switch (true) {
      case animalsList === null:
        return <Loader size={LoaderSizes.Large} color={LoaderColors.Grey} />

      case animalsList !== null && animalsList.length === 0:
        return (
          <Message
            message={ANIMALS_MESSAGES.ANIMALS_LIST_IS_EMPTY[languageCode]}
            size={MessageTextSizes.Small}
            color={MessageTextColors.Light}
          />
        );
      
      default:
        return renderAnimalsList();
    }
  };

  return renderAnimalsPageContent()
}

export default AnimalsList;
