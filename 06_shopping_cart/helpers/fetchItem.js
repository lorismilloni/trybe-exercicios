const fetchItem = async (itemId) => {
  // seu código aqui
  if (!itemId) {
    return new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/items/${itemId}`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

