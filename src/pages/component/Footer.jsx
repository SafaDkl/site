import { Grid } from "@mui/material";

const height = {
  height: "30px",
  textAlign: "center",
  margin:"1rem"
};

function Footer() {
  return (
    <footer style={height}>
      <Grid>
        <Grid>
          <Grid>
            <Grid>
              <a
                href="https://www.safacode.com/"
                target="_blank"
                rel="nofollow noreferrer nofollow"
              >
                <img height={"30px"} src="https://www.safacode.com/content/images/2022/03/logo1.small.png" alt="SafaCode.com"></img>
              </a>              
            </Grid>
          </Grid>
        </Grid>
        <Grid id="social">

        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
