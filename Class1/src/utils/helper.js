export function filterData(searchtxt, restaurentsList) {
  const result = restaurentsList.filter((restau) =>
    restau?.data?.name?.toLowerCase().includes(searchtxt.toLowerCase())
  );
  return result;
}
