import { makeStyles } from '@material-ui/core';
import Constants from '../../Constant'

const useStyles = makeStyles((theme) => ({
    appBar:{
        width: `calc(100% - ${Constants.drawerWidth}px)`,
        marginLeft: Constants.drawerWidth,
        backgroundColor: 'white',
        [theme.breakpoints.down('xs')]:{
            width: '100%'
        }
    },
    menu:{
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        },
        color: 'black'
    }
}));

export default useStyles;