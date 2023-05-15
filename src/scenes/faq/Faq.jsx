import React from 'react';
import  Accordion  from '@mui/material/Accordion';
import  AccordionSummary  from '@mui/material/AccordionSummary';
import  AccordionDetails  from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';

const Faq = () => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
  return (
    <Box m='20px'>
        <Header title='FAQ' subtitle='Frequently Asked Questions' />
        <Accordion defaultExpanded >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                    A Very Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, natus. Autem consequatur ex, necessitatibus nam assumenda perferendis porro quis magni dignissimos excepturi fugiat
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                    Second Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, natus. Autem consequatur ex, necessitatibus nam assumenda perferendis porro quis magni dignissimos excepturi fugiat
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                    Third Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, natus. Autem consequatur ex, necessitatibus nam assumenda perferendis porro quis magni dignissimos excepturi fugiat
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default Faq