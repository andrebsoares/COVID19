import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Carregando...';
    }

    const card = (title, information, style, subtitle) => (
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, style)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{title}</Typography>
                <Typography variant="h5">
                    <CountUp start={0} end={information.value} duration={2.5} separator=" " />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString('pt-br',
                    {
                        year: 'numeric',
                        month: ('long' || 'short' || 'numeric'),
                        weekday: ('long' || 'short'),
                        day: 'numeric',
                    }
                )}</Typography>
                <Typography variant="body2">{subtitle}</Typography>
            </CardContent>
        </Grid>
    );

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="space-around">
                {card("Confirmados", confirmed, "styles.infected" , "Número de casos confirmados de COVID-19")}
                {card("Recuperados", recovered, "styles.recovered", "Número de recuperados de COVID-19")}
                {card("Mortes"     , deaths   , "styles.deaths"   , "Número de mortes por COVID-19")}
            </Grid>

        </div>
    )
}

export default Cards;