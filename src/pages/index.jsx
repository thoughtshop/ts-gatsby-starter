import GlobalNav from '../components/globalNav';
import GlobalFooter from '../components/globalFooter';

// styles
import '../styles/app.scss';

// markup
const IndexPage = () => {
  return (
    <>
      <main>
        <GlobalNav />
      </main>
      <GlobalFooter />
    </>
  );
};

export default IndexPage;
