import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from "millify";
import DefaultImg from '../assets/images/house.jpg';



const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
    <Link passHref href={`/property/${externalID}`}>
        <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer' >
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : DefaultImg} width={400} height={260} alt='House' />
            </Box>
            <Box w='full'>
                <Flex paddingTop='2' alignItems='center' justifyContent='space-between' >
                    <Flex alignItems='center' >
                        <Box paddingRight='3' color='green.400'>
                            {isVerified && <GoVerified />}
                        </Box>
                        <Text fontWeight='bold' fontSize='lg'>AED {millify(price)} {rentFrequency && `/${rentFrequency}`} </Text>
                    </Flex>
                    <Box>
                        <Avatar size='sm' src={agency?.logo?.url} />
                    </Box>
                </Flex>
                <Flex alignItems='center' justifyContent='space-between' p='1' w='250px' color='blue.400'>
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                </Flex>
                <Text fontSize='lg' >
                    {title.lenght > 30 ? `${title.substring(0, 3)}...` : title}
                </Text>
            </Box>
        </Flex>
    </Link>
);


export default Property;