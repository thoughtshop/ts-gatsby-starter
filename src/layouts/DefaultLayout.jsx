import GlobalHeader from '@/components/globalHeader';
import GlobalFooter from '@/components/globalFooter';

// styles
import '@/styles/app.scss';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <GlobalHeader />
      <main>{children}</main>
      <GlobalFooter />
    </>
  );
};

export default DefaultLayout;
