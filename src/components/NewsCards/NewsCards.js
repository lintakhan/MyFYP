import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';
// import { render } from '@testing-library/react';
// import myimage from '../../images/tech.png';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faCoffee} from '@fortawesome/free-solid-svg-icons';
// import {FcAbout} from "react-icons/fc"; 
  
 

const infoCards = [
  { color: '#228B22', title: 'Types of News', text: '=>'},
  // { color: '#FF69B4', title: 'News by Categories', info: 'Business ,Entertainment ,<i class="fa-solid fa-user"></i>, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '	#CD5C5C', title: 'News by Categories', info: 'Business ,Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#B22222', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#FF4500', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, News...', text: 'Give me the news from CNN' },
]; 


const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>

              
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i> <div>
                {/* <img src="." alt="" /> */}
                {/* <p>vffjhfjh</p> */}

              </div> </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};


export default NewsCards;
