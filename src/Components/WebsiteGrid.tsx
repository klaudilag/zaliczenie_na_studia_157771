import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

interface Recipe {
    label: string;
    image: string;
    cuisineType: string[];
    calories: number;
    totalWeight: number;
}

interface Hit {
    recipe: Recipe;
}

interface RecordCardProps {
    item: Hit;
}
interface PassedStringProp {
    searchString: string;
}

const RecordCard: React.FC<RecordCardProps> = ({ item }) => {
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt={item.recipe.label} src={item.recipe.image} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {item.recipe.label}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {item.recipe.cuisineType.join(', ')}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Calories: {Math.round(item.recipe.calories)}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            {item.recipe.totalWeight.toFixed(2)} g
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export const WebsiteGrid: React.FC<PassedStringProp> = ({searchString}) => {
    const [items, setItems] = useState<Hit[]>([]);

    useEffect(() => {
        const fetchData = async () => {

            if (searchString === ""){
                return;
            }

            try {
                const response = await axios.get('https://api.edamam.com/search', {
                    params: {
                        q: searchString,
                        app_id: '3cf73f54',
                        app_key: 'ee93e6801015bc9c5d8cff7923501b79',
                        from: 0,
                        to: 9
                    }
                });
                setItems(response.data.hits);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [searchString]);

    return (
        <Container>
            <Grid container spacing={3}>
                {items.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <RecordCard item={item} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}