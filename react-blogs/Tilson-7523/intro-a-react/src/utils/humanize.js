import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

await import("dayjs/locale/es-us")

dayjs.locale("es-us")
dayjs.extend(relativeTime)

const humanize = (date) => {
    const wrappedDate = dayjs(date);
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));
    
    const isCurrentYear = wrappedDate.year() === new Date().getFullYear();
    if(!isCurrentYear) {
        return wrappedDate.format("MMM DD, YYYY");
    }
    else if (daysDiff <= 30) {
        return wrappedDate.fromNow();
    } else {
        return wrappedDate.format("MMMM DD");
    }
}

export default humanize