/**
 * Returns an array of the offset values by subtracting the minimum 'from' value from each 'from' value.
 * @param  {...Array} jsonArrays - Variable number of JSON arrays.
 * @returns {Array} Array of offset values in the order of the arguments.
 */
export function calcOffsets(...jsonArrays) {
  //min value of 'from' property across all arrays first elements
  const output={start:'',end:'',offset:[]}
  const fromValues = jsonArrays.map(arr => arr.from);
  const validFroms = fromValues.filter(v => typeof v === 'number');
  const minFrom = validFroms.length > 0 ? Math.min(...validFroms) : 0;
  output.start = minFrom;
  //max value of 'to' property across all arrays last elements
  const toValues = jsonArrays.map(arr => arr.to);
  const validTos = toValues.filter(v => typeof v === 'number');
  const maxTo = validTos.length > 0 ? Math.max(...validTos) : 0;
  output.end = maxTo;
  output.offset = fromValues.map(v => (typeof v === 'number' ? v - minFrom : undefined));
  return output;
}

//extract header props
export function extractHeaderProps(jsonArray) {
  if (!Array.isArray(jsonArray)) return [];
  return jsonArray.map(obj => ({
    id: obj.id,
    name: obj.name
  }));
}

//generate color by index (yellow if odd, light blue if even)
export function getColorByIndex(index) {
  return index % 2 === 0 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 0, 0.8)';
}

//generate random color out of given set
export function getRandomColor() {
  const colors = ['rgba(255, 255, 0, 0.8)','rgba(255, 255, 255, 0.8)'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}


//JSON data handling functions
export function createEventLine(eventsList, name, description) {
  //find min from checking every eventsList elements from property 'from'
  const fromValues = eventsList.map(event => event.from).filter(v => typeof v === 'number');
  const min = fromValues.length > 0 ? Math.min(...fromValues) : 0;

  //find max from checking every eventsList elements from property 'to'
  const toValues = eventsList.map(event => event.to).filter(v => typeof v === 'number');
  const max = toValues.length > 0 ? Math.max(...toValues) : 0;
  
  return {
    "id": Math.random().toString(36).substring(2, 9),
    "name": name,
    "description": description,
    "type":"event",
    "from":min,
    "to":max,
    "data": eventsList
  };
}
