import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Box,
  Center,
  Image,
  HStack,
  VStack,
} from '@chakra-ui/react';
import './App.css';

export default function Landing({ blogRef, blogHandle, homeRef }) {
  return (
    <>
      {/* <div ref={homeRef}></div> */}
      <Box
        backgroundImage="url('https://ik.imagekit.io/e16xo45jw/Blog/christina-wocintechchat-com-9-ohfp-Dicg-unsplash_Ab-dVQu9_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662870339572')"
        backgroundPosition={'center'}
        backgroundSize="cover"
      >
        <HStack>
          <Box w={'350px'} pt={'155px'} ml={'90px'} pb={'250px'}>
            <Image src="https://ik.imagekit.io/e16xo45jw/Blog/jsct-logo-white_57YEipdMW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662871696512" />
          </Box>
          <Box pt={'250px'}>
            <button className="landing-btn" onClick={() => blogHandle()}>
              Let's explore!
            </button>
          </Box>
        </HStack>

        <div ref={blogRef}></div>
      </Box>
    </>
  );
}
