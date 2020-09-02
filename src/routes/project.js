import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

class Project extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h2 className="firstTitle" style={{ marginTop: "100px", fontSize: "40px", textAlign: "center", padding: "10px" }}>
                    Projects
                </h2>

                <Grid container spacing={3} justify="center" direction="row">
                    <Grid item alignItems="flex-start">
                        <Card style={{ width: "300px", height: "200px" }} >
                            <CardMedia
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="h2"> Lizard </Typography>
                                <Typography variant="body" color="textSecondary" component="p" display="inline">
                                    Lizards are a widespread groupfdfds fsdfa f
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color="primary" style={{ fontSize: "15px" }}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card style={{ width: "300px", height: "200px" }} >
                            <CardMedia
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body" color="textSecondary" component="p" display="inline">
                                    Lizards are a widespread groupfdfds fsdfa f
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color="primary" style={{ fontSize: "15px" }}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card style={{ width: "300px", height: "200px" }} >
                            <CardMedia
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body" color="textSecondary" component="p" display="inline">
                                    Lizards are a widespread groupfdfds fsdfa f
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color="primary" style={{ fontSize: "15px" }}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card style={{ width: "300px", height: "200px" }} >
                            <CardMedia
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body" color="textSecondary" component="p" display="inline">
                                    Lizards are a widespread groupfdfds fsdfa f
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color="primary" style={{ fontSize: "15px" }}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card style={{ width: "300px", height: "200px" }} >
                            <CardMedia
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body" color="textSecondary" component="p" display="inline">
                                    Lizards are a widespread groupfdfds fsdfa f
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color="primary" style={{ fontSize: "15px" }}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>



                </Grid>
                <br />
                <Footer />
            </div >
        )
    }
}

export default Project