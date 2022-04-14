import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
export default function ContentBook(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let { infoBook } = props;
  const renderChapter = () => {
    if (infoBook) {
      return infoBook.content?.map((item, index) => {
        return (
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange("panel" + index)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                {item.chapter}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.pages.map((page) => {
                  return (
                    <div className="page-form">
                      <div
                        className="page-content mt-4"
                        style={{
                          paddingBottom: "40px",
                          letterSpacing: "0.01rem",
                          lineHeight: "30px",
                        }}
                      >
                        <p>{page.pagecontent1}</p>
                        <p>{page.pagecontent2}</p>
                        <p>{page.pagecontent3}</p>
                        <p>{page.pagecontent4}</p>
                      </div>
                      <p
                        className="text-center font-weight-bold pb-3"
                        style={{ borderBottom: "0.5px solid #333" }}
                      >
                        {page.pagenumber}
                      </p>
                    </div>
                  );
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      });
    } else {
      return null;
    }
  };

  return (
    <div className="container">
      <h2 className="my-3">List Chapter</h2>
      <div className={classes.root}>{renderChapter()}</div>
    </div>
  );
}
