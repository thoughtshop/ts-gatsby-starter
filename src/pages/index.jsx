import GlobalHeader from '@/components/globalHeader';
import GlobalFooter from '@/components/globalFooter';

// styles
import '../styles/app.scss';

// markup
const IndexPage = () => {
  return (
    <>
      <main>
        <GlobalHeader />
      </main>
      <GlobalFooter />
    </>
  );
};

export default IndexPage;
