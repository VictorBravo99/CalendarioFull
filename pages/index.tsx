import { useState } from "react";
import FullCalendar, { DatesSetArg, EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from '@fullcalendar/list';
import "@fullcalendar/daygrid/main.css";
import esLocale from '@fullcalendar/core/locales/es';
const IndexPage = () => {
 

  return (
      <FullCalendar
        locale= {esLocale}
        plugins={[dayGridPlugin]}
        
        datesSet={(arg: DatesSetArg) => {
          
          
        }}
              />
  );
};

export default IndexPage;