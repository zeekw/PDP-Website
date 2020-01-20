import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
// import '../styles/calendar.sass'
let CalendarComponent
export default function FullCalendar(props) {
  const [calendarLoaded, setCalendarLoaded] = useState(false)
  useEffect(() => {
    CalendarComponent = dynamic({
      modules: () => ({
        calendar: import('@fullcalendar/react'),
        dayGridPlugin: import('@fullcalendar/daygrid'),
        timeGridPlugin: import('@fullcalendar/timegrid')
      }),
      render: (props, { calendar: Calendar, ...plugins }) => (
        <Calendar {...props} plugins={Object.values(plugins)} ref={props.myRef} />
      ),
      ssr: false
    })
    setCalendarLoaded(true)
  })
  let showCalendar = (props) => {
    if ( !calendarLoaded ) return <div>Loading ...</div>
    return (
      <CalendarComponent {...props} />
    )
  }
  return (
    <div>
      {showCalendar(props)}
      <style jsx global>{`
        @import url(~@fullcalendar/core/main.css);
        @import url(~@fullcalendar/daygrid/main.css);
        #CalendarContainer {
          width: calc(100% - 40px);
          max-width: 700px;
          margin: 0 auto;
        }

        #CalendarContainer .fc-event {
          background-color: #f17267;
          border-color: #D8594E;
        }

        #CalendarContainer .fc-button-primary {
          background-color: #f17267;
          border-color: #D8594E;
        }

        #CalendarContainer .fc-content {
          white-space: normal;
          max-height: 50px;
          overflow: scroll;
        }

        #CalendarContainer .fc-day-grid-container {
          height: auto !important;
        }

        @media (max-width: 375px) {
          .fc-toolbar {
              display: block !important;
          }
          .fc-left {
              margin-bottom: 10px;
          }
        }

      `}</style>
    </div>
  )
}
