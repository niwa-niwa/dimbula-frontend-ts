import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import { signStyle } from "../styles/signStyle";
import NAMES from "../../../const/names";

const styles: any = { ...signStyle };
const useStyles = makeStyles(() => styles);

const SignLayout = ({ children }: { children: JSX.Element }) => {
  const classes: any = useStyles();

  return (
    <React.Fragment>
      <Box my={4}>
        <h1 className={classes.title}>{NAMES.TITLE}</h1>
      </Box>

      <Container className={classes.signin_container} maxWidth="sm">
        {children}
      </Container>
    </React.Fragment>
  );
};
export default SignLayout;
