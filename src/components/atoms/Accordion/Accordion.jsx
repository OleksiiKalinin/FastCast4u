import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    border: '1px solid #DDD',
    borderTop: '1px dotted #DDD',
    boxShadow: 'none',
    background: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:first-child': {
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        borderTop: '1px solid #DDD'
    },
    '&:last-child': {
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        borderBottom: '1px solid #DDD'
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    },
    padding: '0px 16px'
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  return (
    <div>
      {
        props.children.map((child, i) => {
          return (
            <Accordion key={i} square expanded={expanded === `panel${i+1}`} onChange={handleChange(`panel${i+1}`)}>
              <AccordionSummary aria-controls={`panel${i+1}d-content`} id={`panel${i+1}d-header`}>
                <div style={{fontSize: '15px', fontWeight: 700, color: '#444'}}>{child.props.children[0]}</div>
              </AccordionSummary>
              <AccordionDetails >
                <div style={{paddingLeft: '16px', fontWeight: 400, color: '#555', lineHeight: 1.8}}>{child.props.children[1]}</div>
              </AccordionDetails>
            </Accordion>
          )
        })
      }
    </div>
  );
}