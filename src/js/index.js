import { createSelectElement } from './carrier';

const rootDiv = document.querySelector('div#root');
const addElement = (addElement, parentElement) => {
  if(!parentElement) parentElement = document.body;

  parentElement.append(addElement);
}

const getNow = (element) => {
  const dateUtil = new Date();

  const year = dateUtil.getFullYear();
  const month = dateUtil.getMonth() + 1;
  const date = dateUtil.getDate();
  const day = dateUtil.getDay();
  const hour = dateUtil.getHours();
  const minutes = dateUtil.getMinutes();
  const seconds = dateUtil.getSeconds();

  element.innerHTML = `${year}년 ${month}월 ${date}일 ${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

const pTag = document.createElement('p');
pTag.id = 'time';

addElement(pTag);
getNow(pTag);
setInterval(getNow, 1000);
document.body.append(createSelectElement());