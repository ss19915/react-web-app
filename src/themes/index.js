import { THEME } from '../constants';
import layoutSetting from './layoutSetting';
import colors from './colors';

const theme = {
    [THEME.DARK]: {
        primaryColor: 'white',
        backgroundColor: 'black',
        ...layoutSetting,
    },
    [THEME.LIGHT]: {
        primaryColor: 'black',
        backgroundColor: 'white',
        ...layoutSetting,
    }
}

export default theme;