// https://www.breakingbadapi.com/api/characters/{id}
import "./Character.css";
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    makeStyles,
    Typography
} from "@material-ui/core";
import {Share} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
    },
    media: {
        width: '300px',
        height: '400px',
    }
}));

export const Character = ({name, birthday, img, status, nickname, portrayed}) => {

    const classes=useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title={portrayed + " as " + name}
                subheader={birthday}
            />
            <CardMedia
                className={classes.media}
                image={img}
                title={name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {nickname}, {status}

                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="share">
                    <Share/>
                </IconButton>
            </CardActions>
        </Card>
    )
}