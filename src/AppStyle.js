import { makeStyles } from '@material-ui/core';
import Constants from './Constant'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: Constants.drawerWidth,
            flexShrink: 0
        }
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2)
    },
    toolbar: theme.mixins.toolbar,
    paper: {
        width: Constants.drawerWidth,
        backgroundColor: Constants.light_blue_2,
    },
    paper_label: {
        color: 'white'
    },
    heading_title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: '22px'
    },
    user_heading: {
        backgroundColor: Constants.light_blue,
        color: 'white'
    }
}));

export default useStyles;