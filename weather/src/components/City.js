// https://goweather.herokuapp.com/weather/{City}
import "./City.css";
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia, CircularProgress,
    IconButton,
    makeStyles,
    Typography
} from "@material-ui/core";
import ShareIcon from '@material-ui/icons/Share';
import {WeatherImage} from "./WeatherImage";
import {useEffect, useState} from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },


}));

export const City = ({name}) => {
    const classes = useStyles();

    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setIsLoading(true);

        fetch('https://goweather.herokuapp.com/weather/' + name)
            .then(res => res.json())
            .then(res => setWeather(res))
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false));

    }, [name]);


    return (
        <>
            {isLoading === true ? <CircularProgress/> :

                <Card className={classes.root}>
                    <CardHeader
                        title={name}
                        subheader={new Date().toLocaleDateString()}
                    />
                    <CardMedia
                        className={classes.media}
                        title={name}
                    >
                        <WeatherImage description={weather?.description}/>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {weather?.temperature}, {weather?.wind}, {weather?.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="share">
                            <ShareIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            }
        </>
    )
}
