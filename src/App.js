import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import axios from 'axios';
// import logo from './images/logo.png';
import fb from './images/fb.png';
import instagram from './images/instagram.png';
import { NewsCards, Modal } from './components';
import useStyles from './styles';
import TextAnimation from './TextAnimation';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.css';
// import Nav from 'react-bootstrap/Nav';


const App = () => {

  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();


  // return(
  //   <div>
  //     <h1>Hello</h1>
  //   </div>
  // );

  useEffect(() => {


    var ins = alanBtn({

      key: '31f2e6f0e22b8d54b6045f106350bf452e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, NEWS_API_URL, number }) => {
        if (command === 'back') {
          window.location.reload();
        }

        if (command === 'newHeadlines') {

          const loadNews = async (URLTOCAL) => {
            const ArticlesApi = await axios.get(URLTOCAL)
            setNewsArticles(ArticlesApi.data.articles);
            ins.callProjectApi("greetUse", {
              art: ArticlesApi.data.articles
            }, function (error, result) { });
            setActiveArticle(-1);
          };

          loadNews(NEWS_API_URL);
          ins.callProjectApi("greetUse", {
            art: ArticlesApi.data.articles
          }, function (error, result) { });

        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    })

  }, []);


  const loadNews = async (URLTOCAL) => {
    const ArticlesApi = await axios.get(URLTOCAL)
    setNewsArticles(ArticlesApi.data.articles);
    setActiveArticle(-1);
  };

  

  return (
    <div>

      {/* <section className="navbar-bg">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">AI Web Application</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </section>  */}

      return (

      

        {/* function TextLinkExample() {
  return ( */}
        {/* <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
        );



        <div className={classes.logoContainer}>
          {newsArticles.length ? (
            <div className={classes.infoContainer}>
              <div className={classes.card}><Typography variant="h5" component="h2"><br />You can also click the article and read it!</Typography></div>
              <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
            </div>
          ) : null}
          <img src="../logo2.png" className={classes.alanLogo} alt="logo" />
        </div>
        <div className='movingText'>
          {/* <h1 style={{color; "white"}} = "center">This app gives the latest news according to your choice!</h1> */}
          <h1 style={{ color: "white", textAlign: 'center' }}><span><TextAnimation /></span></h1>
        </div>
        <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        {!newsArticles.length ? (
          <div className={classes.footer}>
            <Typography variant="body1" component="h2" >
            {/* <span class="square bg-primary rounded-top"></span> */}
              {/* Contact US  */}
              {/* <a className={classes.link}>Contact us through</a> */}
              <h2 className='classes.link'>Contact us through</h2>
              {/* <a className={classes.link} href="https://www.facebook.com/ann.shahid.7"> Facebook</a> <img className={classes.image} src={fb} height="50px" alt="fb logo" />- */}
              {/* <a className={classes.link} href="https://www.instagram.com/fresh_ink111"> Instagram</a> */}
            </Typography>
            <a href="https://www.facebook.com/ann.shahid.7"><img className={classes.image} src={fb} height="50px" alt="fb logo" /></a>
            <a href="https://www.instagram.com/fresh_ink111"><img className={classes.image} src={instagram} height="50px" alt="insta logo" /></a>
          </div>
        ) : null}
    </div>
  );
}

export default App;
