import {Box, HStack, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <Box p='20px 100px' bg='orange'>
            <HStack justifyContent={'left'}>
                <Text fontWeight={'bolder'} fontSize={'22px'} color='teal' justifyContent={'space-around'} mr='20px'>Task</Text>
                <Link to='/addTask' style={{fontWeight:'bold'}}><Text fontSize={'22px'} justifyContent={'space-evenly'} mr='20px'>Add Task</Text></Link>
                <Link style={{fontWeight:'bold'}} justifyContent={'space-around'}><Text fontSize={'22px'} justifyContent={'space-evenly'} mr='20px'>Add Sprint</Text></Link>
            </HStack>
        </Box>
    )
};
