import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function MediaSkeleton(props) {
  const { loading = true } = props;

  return (
    <Grid container wrap="nowrap">
      {loading && (
        <Box sx={{ maxWidth: 1400, m: 2 }}>
          <Skeleton
            variant="rectangular"
            width={"77vw"}
            height={"50vh"}
          />
        </Box>
      )}
    </Grid>
  );
}

MediaSkeleton.propTypes = {
  loading: PropTypes.bool,
};

export default function Media(loading) {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <MediaSkeleton loading />
    </Box>
  );
}