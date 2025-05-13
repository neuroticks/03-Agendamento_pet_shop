import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// Plugins
dayjs.extend(utc);
dayjs.extend(timezone);

// Configurações globais
dayjs.locale('pt-br');
dayjs.tz.setDefault('America/Sao_Paulo');

// Debug: Verifica o timezone ativo
console.log('Timezone configurado:', dayjs.tz.guess()); // Deve retornar "America/Sao_Paulo"

export default dayjs;
