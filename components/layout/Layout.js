import Navbar from '../Navbar';
import { Container } from '@chakra-ui/react';
import Footer from '../Footer';
import dynamic from 'next/dynamic';
import VoxelDogLoader from '../ModelLoader';

const LazyVoxelDog = dynamic(() => import('../Model'), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Layout = ({ children }) => {
  console.log('Layout component rendering'); // Debugging statement

  return (
    <>
      <Navbar />
      <Container pt="100">
        <LazyVoxelDog />
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
