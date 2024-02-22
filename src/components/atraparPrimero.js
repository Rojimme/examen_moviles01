
const BASE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const atraparPrimero = async () => {
  const queryParameters = '?offset=0&limit=151';
  const fullUrl = `${BASE_API_URL}${queryParameters}`;

  try {
    const apiResponse = await fetch(fullUrl);
    if (!apiResponse.ok) throw new Error('Response not ok');
    const jsonData = await apiResponse.json();
    return jsonData.results;
  } catch (fetchError) {
    console.error('Error al encontrar la generacion:', fetchError);
    return [];
  }
};

export const atraparSegundo = async () => {
  const queryParameters = '?offset=151&limit=100';
  const fullUrl = `${BASE_API_URL}${queryParameters}`;

  try {
    const apiResponse = await fetch(fullUrl);
    if (!apiResponse.ok) throw new Error('Response not ok');
    const jsonData = await apiResponse.json();
    return jsonData.results;
  } catch (fetchError) {
    console.error('Error al encontrar la generacion:', fetchError);
    return [];
  }
};

export const atraparTercero = async () => {
  const queryParameters = '?offset=251&limit=135';
  const fullUrl = `${BASE_API_URL}${queryParameters}`;

  try {
    const apiResponse = await fetch(fullUrl);
    if (!apiResponse.ok) throw new Error('Response not ok');
    const jsonData = await apiResponse.json();
    return jsonData.results;
  } catch (fetchError) {
    console.error('Error al encontrar la generacion:', fetchError);
    return [];
  }
};

export const atraparCuatro = async () => {
  const queryParameters = '?offset=386&limit=107';
  const fullUrl = `${BASE_API_URL}${queryParameters}`;

  try {
    const apiResponse = await fetch(fullUrl);
    if (!apiResponse.ok) throw new Error('Response not ok');
    const jsonData = await apiResponse.json();
    return jsonData.results;
  } catch (fetchError) {
    console.error('Error al encontrar la generacion:', fetchError);
    return [];
  }
};


export const atraparCinco = async () => {
  const queryParameters = '?offset=493&limit=156';
  const fullUrl = `${BASE_API_URL}${queryParameters}`;

  try {
    const apiResponse = await fetch(fullUrl);
    if (!apiResponse.ok) throw new Error('Response not ok');
    const jsonData = await apiResponse.json();
    return jsonData.results;
  } catch (fetchError) {
    console.error('Error al encontrar la generacion:', fetchError);
    return [];
  }
};

