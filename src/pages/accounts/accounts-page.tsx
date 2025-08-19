import React from "react";
import Header from "../../components/page-components/header/header";
import Content from "../../components/page-components/content/content";
import Footer from "../../components/page-components/footer/footer";
import AccountsList from "../../components/accounts-component/accounts-list/accounts-list";
import { useAppSelector } from "../../hooks";
import { getLanguageCode } from "../../store/processes/user-process/user-selectors";
import { META } from "../../const/meta-const";

function AccountsPage() {
  const languageCode = useAppSelector(getLanguageCode);
  
  document.title = META.TITLE.ACCOUNTS[languageCode];

  return (
    <>
      <Header />
      <Content>
        <AccountsList />
      </Content>
      <Footer />
    </>
  );
}

export default AccountsPage;
