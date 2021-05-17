// https://api.themoviedb.org/3/movie/{movie_id}?api_key=9a85ac8036d128316c05ce13556ac979&language=fr-FR
// http://image.tmdb.org/t/p/w200/{poster_path}

import "./Movie.css";
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
        maxWidth: 400,
    },
    media: {
        width: '400px',
        height: '500px',
    }
}));

export const Movie = ({adult, title, overview, poster_path, release_date}) => {

    const classes=useStyles();

    return(
        <Card className={classes.root}>
            <CardHeader className="header"
                title={title}
                subheader={release_date}
            />
            <CardMedia
                className={classes.media}
                image= {`http://image.tmdb.org/t/p/w200/${poster_path}`}
                title={title}
            />
            <CardActions disableSpacing>
                <IconButton aria-label="share">
                    <Share/>
                </IconButton>
            </CardActions>
        </Card>
    )
}