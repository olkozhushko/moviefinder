function getNormalDuration(num) {

  let hour = Math.floor(num / 60);
  let min = num % 60;

  return `${hour}h ${min}min`;
}

export default getNormalDuration;