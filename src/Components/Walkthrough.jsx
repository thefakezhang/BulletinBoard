import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";


const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default () => {
	const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <ThemeProvider className ={classes.root} theme={darkTheme}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            EDITOR:
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            "deep fried meme is the best"
          </Typography>
          <Typography variant="body2" component="p">
            <ol>
              <li>
                You’re in charge of editing a subbed video to make it more
                presentable and enhance the viewing experience. Make sure to
                deliver your video in a .mp4 format; this means HARD subs. In
                addition, you are highly encouraged to make a ~20-30 second
                summary of the video itself(this is for twitter).
              </li>
              <br />
              <li>
                Go into the Aonahara spreadsheet “requires editors” tab to find
                a subbed video that requires editing. Once you’ve taken it,
                check the checkbox in the “taken” column and fill in your name.
              </li>
              .............
              <br />
              .............
              <br />
              .............
              <br />
            </ol>
          </Typography>
        </CardContent>
      </Card>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Click to expand - Expansion Panel 1
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Editors</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="h5" component="h2">
            EDITOR:
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            "deep fried meme is the best"
          </Typography>
          <Typography variant="body2" component="p">
            <ol>
              <li>
                You’re in charge of editing a subbed video to make it more
                presentable and enhance the viewing experience. Make sure to
                deliver your video in a .mp4 format; this means HARD subs. In
                addition, you are highly encouraged to make a ~20-30 second
                summary of the video itself(this is for twitter).
              </li>
              <br />
              <li>
                Go into the Aonahara spreadsheet “requires editors” tab to find
                a subbed video that requires editing. Once you’ve taken it,
                check the checkbox in the “taken” column and fill in your name.
              </li>
              <br />
              <li>
                Go find the corresponding editor request post in the Awounapara
                discord server in the <b>#editor-request</b> channel and react
                to it with a :thumbsup
              </li>
              <br />
              <li>
                Grab the video and start editing. Do whatever you deem
                necessary.
                <ul>
                  <li>
                    <b>
                      Make sure to include the intro and outro videos! If you’re
                      confused, look at the recent videos on our channel!
                    </b>
                  </li>
                  <li>
                    Remember that you can always talk to the subber and ask for
                    a different sub format if it suits you better
                  </li>
                </ul>
              </li>
              <br />
              <li>
                Once you’re done, upload it into the folder with the
                corresponding ID and name your video “edited”
                <ul>
                  <li>
                    If you have also made a short summary video for twitter,
                    name that “summary”
                  </li>
                </ul>
              </li>
              <br />
              <li>
                Go into the Aonohara spreadsheet and make a thumbnailer request
                and a QA request. In addition, go to the Awounapara discord
                server and make two posts in <b>#thumbnailer-request</b> and{" "}
                <b>#qa-request</b> with the following format:
                <br />
                <pre>
                  <code>
                    REQUESTING THUMBNAIL <br />
                    [entry ID in the spreadsheet] <br />
                    [basic description] <br />
                    (optional ping to all thumbnailers, do this at your own
                    risk)
                    <br />
                    <br />
                    REQUESTING QA <br />
                    [entry ID in the spreadsheet] <br />
                    [basic description] <br />
                    (optional ping to all QA, do this at your own risk)
                    <br />
                    <br />
                    Ex. Thumbnail request <br />
                    REQUESTING THUMBNAILER
                    <br />
                    ID-1 <br />
                    Description: Aqua fails to make love to Okayu
                    <br />
                    <br />
                    Ex. QA request <br />
                    REQUESTING QA
                    <br />
                    ID-1
                    <br />
                    Description: Aqua gets cucked by marine
                  </code>
                </pre>
              </li>
              <li>
                Unless a quality assurance member comes to you, you’re done! Go
                sleep or maybe find another video to edit.
              </li>
            </ol>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Editors</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="h5" component="h2">
            EDITOR:
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            "deep fried meme is the best"
          </Typography>
          <Typography variant="body2" component="p">
            <ol>
              <li>
                You’re in charge of editing a subbed video to make it more
                presentable and enhance the viewing experience. Make sure to
                deliver your video in a .mp4 format; this means HARD subs. In
                addition, you are highly encouraged to make a ~20-30 second
                summary of the video itself(this is for twitter).
              </li>
              <br />
              <li>
                Go into the Aonahara spreadsheet “requires editors” tab to find
                a subbed video that requires editing. Once you’ve taken it,
                check the checkbox in the “taken” column and fill in your name.
              </li>
              <br />
              <li>
                Go find the corresponding editor request post in the Awounapara
                discord server in the <b>#editor-request</b> channel and react
                to it with a :thumbsup
              </li>
              <br />
              <li>
                Grab the video and start editing. Do whatever you deem
                necessary.
                <ul>
                  <li>
                    <b>
                      Make sure to include the intro and outro videos! If you’re
                      confused, look at the recent videos on our channel!
                    </b>
                  </li>
                  <li>
                    Remember that you can always talk to the subber and ask for
                    a different sub format if it suits you better
                  </li>
                </ul>
              </li>
              <br />
              <li>
                Once you’re done, upload it into the folder with the
                corresponding ID and name your video “edited”
                <ul>
                  <li>
                    If you have also made a short summary video for twitter,
                    name that “summary”
                  </li>
                </ul>
              </li>
              <br />
              <li>
                Go into the Aonohara spreadsheet and make a thumbnailer request
                and a QA request. In addition, go to the Awounapara discord
                server and make two posts in <b>#thumbnailer-request</b> and{" "}
                <b>#qa-request</b> with the following format:
                <br />
                <pre>
                  <code>
                    REQUESTING THUMBNAIL <br />
                    [entry ID in the spreadsheet] <br />
                    [basic description] <br />
                    (optional ping to all thumbnailers, do this at your own
                    risk)
                    <br />
                    <br />
                    REQUESTING QA <br />
                    [entry ID in the spreadsheet] <br />
                    [basic description] <br />
                    (optional ping to all QA, do this at your own risk)
                    <br />
                    <br />
                    Ex. Thumbnail request <br />
                    REQUESTING THUMBNAILER
                    <br />
                    ID-1 <br />
                    Description: Aqua fails to make love to Okayu
                    <br />
                    <br />
                    Ex. QA request <br />
                    REQUESTING QA
                    <br />
                    ID-1
                    <br />
                    Description: Aqua gets cucked by marine
                  </code>
                </pre>
              </li>
              <li>
                Unless a quality assurance member comes to you, you’re done! Go
                sleep or maybe find another video to edit.
              </li>
            </ol>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </ThemeProvider>
  );
}