import { Grid, Box, Stack, Divider , Paper} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material/styles";
import { margin } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "rgb(55, 52, 52)",
  border: "none",
  boxShadow:"none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: theme.spacing(2),
  margin: "auto",
}));
const height = {
  height: "20vh",
  textAlign: "center",
  marginBotton: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  padding: "3px",
};
const content = {
  position: "relative",
  top: "34%"
}

function Footer() {
  return (
    <Box xm={12} md={12} style={height}>
      <Grid style={content}>
        <Stack direction="row" spacing={1}>
          <Item>
            <TwitterIcon></TwitterIcon>
          </Item>
          <Divider orientation="vertical" flexItem color="rgb(55, 52, 52)" />
          <Item>
            <LinkedInIcon></LinkedInIcon>
          </Item>
        </Stack>
      </Grid>
    </Box>
  );
}

export default Footer;
