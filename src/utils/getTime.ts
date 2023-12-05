import dayjs from 'dayjs';
import { match } from 'ts-pattern';

function getTime(t: string) {
  const dayNow = dayjs().unix();
  const dayParam = dayjs(t).unix();
  const result = dayjs(dayNow - dayParam);

  return match(result)
    .with(result.second() < 60, () => `${result.second}초 전`)
    .with(result.minute() < 60, () => `${result.minute()}분 전`)
    .with(result.hour() < 24, () => `${result.minute()}시간 전`)
    .otherwise(() => `${result.day()}일 전`);
}

export default getTime;
