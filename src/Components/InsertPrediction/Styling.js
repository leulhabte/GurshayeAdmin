import { makeStyles } from '@material-ui/core';
import Constants from '../../Constant'

const useStyles = makeStyles((theme) => ({
    heading:{
        fontSize: '20px',
        marginTop: '3px'
    },
    submit:{
        backgroundColor: Constants.light_blue_2,
        color: 'white',
        height: '3rem',
        '&:hover':{
            backgroundColor: Constants.light_blue
        }
    }
}));

export default useStyles;