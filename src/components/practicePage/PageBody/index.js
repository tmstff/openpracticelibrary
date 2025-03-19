import React from "react";
import FullText from "./FullText";
import MediaGallery from "./MediaGallery";
import Resources from "./Resources";
import { Box, Typography, Button, Grid } from "@mui/material";

const PageBody = ({
  body: { whatIs, whyDo, howTo, allTags },
  fullText,
  howToRef,
  mediaGallery,
  mediaRef,
  practiceId,
  resourceRef,
  resources,
  title,
  whatIsRef,
  whyDoRef,
}) => {
  if (whatIs || whyDo || howTo) {
    return (
      <Box>
        {allTags && (
          <Box marginTop={2} marginBottom={2}>
            <Grid container spacing={1} justifyContent="left">
            {
              allTags.map((tag) => {
                return (
                    <Grid item xs={6} md={2}> 
                      <Button
                        color="grey"
                        disableElevation="true"
                        fullWidth
                        onClick={() => alert("Click")}
                        size="small"
                        variant="contained"
                      >{tag}</Button>
                    </Grid>
                  )
                }
              )
            }
            </Grid>
          </Box>
        )}
        {whatIs && (
          <>
            <Typography gutterBottom variant="h4" ref={whatIsRef}>
              What Is {title}?
            </Typography>
            <FullText source={whatIs} />
          </>
        )}
        {whyDo && (
          <>
            <Typography gutterBottom ref={whyDoRef} variant="h4">
              Why Do {title}?
            </Typography>
            <FullText source={whyDo} />
          </>
        )}
        {howTo && (
          <>
            <Typography gutterBottom ref={howToRef} variant="h4">
              How to do {title}?
            </Typography>
            <FullText source={howTo} />
          </>
        )}
        {mediaGallery && (
          <>
            <Typography gutterBottom ref={mediaRef} variant="h4">
              Look at {title}
            </Typography>
            <MediaGallery
              practiceId={practiceId}
              title={title}
              mediaGallery={mediaGallery}
              mediaRef={mediaRef}
            />
          </>
        )}

        {resources && (
          <>
            <Typography gutterBottom variant="h4" ref={resourceRef}>
              Links we love
            </Typography>
            <Resources
              practiceTitle={title}
              practiceId={practiceId}
              links={resources}
              resourceRef={resourceRef}
            />
          </>
        )}
      </Box>
    );
  } else {
    return <FullText source={fullText} />;
  }
};
export default PageBody;
