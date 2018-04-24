import { createMuiTheme } from 'material-ui/styles'
import green from 'material-ui/colors/green'

export default createMuiTheme({
  // https://material-ui-next.com/customization/themes/#the-other-variables
  // overrides
  palette: {
    secondary: {
      ...green,
      A200: green[500]
    }
  }
})

export const appBar = theme => ({
    appBar: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 'auto',
        left: '5%',
        right: '5%',
        height: 128,
        zIndex: 2,
        backgroundColor: 'white'
    },
    images: {
        position: 'relative',
    },
    pointerClick: {
        cursor: 'pointer'
    },
    navigation: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    imageMargin: {
        marginLeft: theme.spacing.unit * 2
    },
    appBarFull: {
        position: 'fixed',
        marginLeft: 0,
        [theme.breakpoints.up('md')]: {
           width: '100%'
        }
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
})

export const rootStyle = theme => ({
  root: {
    width: '100%',
    // marginBottom: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
      marginLeft: '5%',
      marginRight: '5%',
  },
  content: {
    margin: 'auto',
    // maxWidth: '900px',
    position: 'relative',
    overflowX: 'hidden',
    // backgroundColor: theme.palette.background.default,
    width: '100%',
    // padding: theme.spacing.unit * 3,
    height: '100%',
    marginTop: 150,
    // [theme.breakpoints.up('sm')]: {
    //   marginTop: 64
    // }
  }
})
