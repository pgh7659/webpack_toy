const getNow = () => {
  const dateUtil = new Date();

  const year = dateUtil.getFullYear();
  const month = dateUtil.getMonth() + 1;
  const date = dateUtil.getDate();
  const day = dateUtil.getDay();
  const hour = dateUtil.getHours();
  const minutes = dateUtil.getMinutes();
  const seconds = dateUtil.getSeconds();

  const rootDiv = document.querySelector('div#root');
  rootDiv.innerHTML = `${year}년 ${month}월 ${date}일 ${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

setInterval(getNow, 1000);




