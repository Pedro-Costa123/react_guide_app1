//Added this function because months in pt-PT starts with lower case
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export {capitalizeFirstLetter, };