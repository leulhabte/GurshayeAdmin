import { makeStyles } from '@material-ui/core';
import Constants from '../../Constant'

const useStyles = makeStyles((theme) => ({
    grid:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
        background: Constants.light_blue,
        color: 'white',
        '&:hover':{
            background: Constants.light_blue_2
        }
    },
    iconBtn:{
        color: Constants.light_blue_2
    }
}));

export default useStyles;