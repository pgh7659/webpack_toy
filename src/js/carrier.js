const carriers = [
  {name: 'SKT', value: 'SKT'},
  {name: 'KT', value: 'KT'},
  {name: 'LGU+', value: 'LGT'},
  {name: 'SKT 알뜰폰', value: 'SKTMVNO'},
  {name: 'KT 알뜰폰', value: 'KTMVNO'},
  {name: 'LGU+ 알뜰폰', value: 'LGTMVNO'},
];

const createOptionsElementByArray = array => (array || []).map(object => `<option value=${object.value}>${object.name}</option>`)
                                                          .join('');

export const createSelectElement = () => {
  let carrierSelectElement = document.createElement('select');
  carrierSelectElement.innerHTML = createOptionsElementByArray(carriers);

  return carrierSelectElement;
}

