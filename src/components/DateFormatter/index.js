import {parseISO, format} from "date-fns"


const DateFormatter = ({dateString}) => {
  const date = parseISO(dateString)
  return <time dateTime={date}>{format(date, "LLLL	d, yyyy")}</time>
}

export default DateFormatter
