import moment from 'moment/min/moment-with-locales';

export const DateTimePretty = (props) => {
    const transformDate = moment(props.data).fromNow()
    moment.locale('ru');
    return (
        <p className="date">{transformDate}</p>
    )
}
