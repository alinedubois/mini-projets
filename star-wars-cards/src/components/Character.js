// https://akabab.github.io/starwars-api/api/id/{id}.json
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


export const Character = ({name, height, homeworld, image, species}) =>{
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader className="header"
                        title={name}
                        subheader={species}
            />
            <CardMedia
                className={classes.media}
                image= {image}
                title={name}
            />

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {height}, {homeworld}

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