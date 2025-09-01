export const extractDataForWeatherBox = (data) => {
  // 街
  const city = data.city;
  // 直近の天気情報
  const current = data.list[0];

  // 画像アイコン
  const icon = current.weather[0]['icon'];
  const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  // 日付
  const timestamp = current.dt;
  const time = new Date(timestamp * 1000);
  const dateTimeString =
    time.getFullYear() +
    '年' +
    (time.getMonth() + 1) +
    '月' +
    time.getDate() +
    '日' +
    time.getHours() +
    '時' +
    time.getMinutes() +
    '分';

  // 説明
  const description = current.weather[0].description;

  // 気温
  const tempMax = Math.round(current.main.temp_max);
  const tempMin = Math.round(current.main.temp_min);

  // 降水
  const rain = Math.round(parseFloat(current.pop) * 100);

  // 湿度
  const humid = current.main.humidity;

  // 風速
  const wind = current.wind.speed;

  const nextData = [];
  for(var i = 1; i < 4; i++){
    const d = data.list[i];
    const t = {};

    const timestamp = d.dt;
    const time = new Date(timestamp * 1000);
    const dateTimeString = 
    time.getDate() + "日" +
    time.getHours() + "時" ;
    t["dateTimeString"] = dateTimeString;

    const icon = d.weather[0]["icon"];
    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    t["iconURL"] = iconURL;

    const pop = Math.round(parseFloat(d.pop));
    t["pop"] = pop;

    const temp = Math.round(d.main["temp"]);
    t["temp"] = temp;

    nextData.push(t);
  }

  return {
    city,
    iconURL,
    dateTimeString,
    description,
    tempMax,
    tempMin,
    rain,
    humid,
    wind,
    nextData,
  };
};
