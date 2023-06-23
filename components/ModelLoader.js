import { forwardRef } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

DogSpinner.displayName = 'DogSpinner'; // Set displayName property

export const DogContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 485]}
    h={[280, 480]}
    position="relative"
    justifyContent="center"
  >
    {children}
  </Box>
));

DogContainer.displayName = 'DogContainer'; // Set displayName property

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  );
};

Loader.displayName = 'Loader'; // Set displayName property

export default Loader;
