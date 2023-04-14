import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { es } from "dayjs/locale/es";

dayjs.extend(relativeTime);
dayjs.locale("es");

export default function humanizeDate(dateString) {
  const fecha = new Date(dateString);
  const fechaFormateada = dayjs(fecha).fromNow();

  return fechaFormateada;
}
