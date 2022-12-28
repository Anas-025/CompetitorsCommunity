import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Sardar Vallabhbhai National Institute of Technology"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="250px"
        image="/photography-contest.webp"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Enter our photography contest for a chance to win cash, equipment, and
          more! All levels welcome. Simply capture the theme and enter today!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Rules:</Typography>
          <Typography paragraph>
            1. Only original photographs taken by the entrant will be accepted.
            Entrants must be the sole owner of the copyright for the photographs
            they submit.
          </Typography>
          <Typography paragraph>
            2. Photographs must not violate any laws or infringe upon the rights
            of any third parties.
          </Typography>
          <Typography paragraph>
            3. Entrants must provide a valid email address and contact
            information in order to enter the contest.
          </Typography>
          <Typography paragraph>
            4. Photographs must be submitted in a specified format (e.g. JPEG,
            PNG) and size.
          </Typography>
          <Typography paragraph>
            5. Entrants may be required to pay a fee to enter the contest.
          </Typography>
          <Typography paragraph>
            6. Entrants must agree to allow the organizers to use their
            photographs for promotional purposes if they are selected as a
            winner.
          </Typography>
          <Typography paragraph>
            7. The judges' decisions are final and no correspondence will be
            entered into regarding the results of the contest.
          </Typography>
          <Typography paragraph>
            8. The organizers reserve the right to disqualify any entrant who
            does not comply with the rules or who engages in dishonest or
            unethical behavior.
          </Typography>
          <Typography paragraph>
            9. The contest is void where prohibited by law.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
