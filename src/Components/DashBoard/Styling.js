import { makeStyles } from '@material-ui/core';
import Constants from '../../Constant'

const useStyles = makeStyles((theme) => ({
    heading:{
        fontSize: '20px',
        marginTop: '3px'
    },
    prediction_box:{
        backgroundColor: Constants.light_blue_2,
        color: 'white'
    },
    prediction_box_2:{
        backgroundColor: Constants.light_blue,
        color: 'white'
    }, 
    prediction_box_3:{
        backgroundColor: Constants.green,
        color: 'white'
    },
    prediction_box_4:{
        backgroundColor: Constants.green_2,
        color: 'white'
    }, 
    equilizer:{
        fontSize: '4rem'
    },
    stat_typo:{
        fontSize: '26px'
    },
    footer:{
        backgroundColor: Constants.light_blue_2,
        color: 'white',
        padding: '0.7rem',
        display: 'flex',
        justifyContent: 'center'
    },
    footer_txt:{
        paddingTop: '2rem',
        fontSize: '20px'
    }
}));

export default useStyles;