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

export const Character = ({name, house, dateOfBirth, ancestry, patronus, actor, image}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title={actor + " as " + name}
                subheader={dateOfBirth}
            />
            <CardMedia
                className={classes.media}
                image={image}
                title={name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {house}, {dateOfBirth}, {ancestry}, {patronus}

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