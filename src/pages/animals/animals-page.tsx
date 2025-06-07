import React from "react";
import Header from '../../components/page-components/header/header';
import Footer from '../../components/page-components/footer/footer';
import Content from '../../components/page-components/content/content';
import AnimalsList from '../../components/animals-components/animals-list/animals-list';
import { META } from '../../const/meta-const';
import { useAppSelector } from '../../hooks';
import { getLanguageCode } from '../../store/processes/user-process/user-selectors';


function AnimalsPage() {
  const languageCode = useAppSelector(getLanguageCode);

  document.title = META.TITLE.ANIMALS[languageCode];

  return (
    <>
      <Header />
      <Content>
        <AnimalsList />
      </Content>
      <Footer />
    </>
  );
}

export default AnimalsPage;
