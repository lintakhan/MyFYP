import { makeStyles } from '@material-ui/core/styles';
import { withTheme } from 'styled-components';

export default makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    // position: 'fixed',
    left: 0,
    bottom: 0,
    color: 'white',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '84px',
    marginTop: '3%',
    marginLeft: '0px',
    // marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    borderStyle: 'solid',
    borderColor: '#000000',
    backgroundColor: "#000000"
  },
  link: {
    textDecoration: 'none',
    // color: 'rgba(21, 101, 192)',
    color: 'black',
    fontSize: '20px',

  },
  image: {
    marginLeft: 10,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '3%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'rgba(21, 101, 192)',
    margin: '0 12px',
    textAlign: 'center',
    height: '25vmin',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      width: '100%',
      height: 'initial',
      '&:nth-of-type(1)': {
        marginBottom: '12px',
      },
    },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logoContainer: {
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
    // backgroundColor: 'navy',
  },
  alanLogo: {
    // height: '27vmin',
    height: '36vmin',
    borderRadius: '0%',
    padding: '0 5%',
    margin: '1% 0',
    marginBottom: '5%',
    width: '44%',
    [theme.breakpoints.down('sm')]: {
      height: '35vmin',
    },
  },
  movingText: {
    alignItems: 'center',
    justifyContent: 'space-around',
    color: 'white',
  },
}));




