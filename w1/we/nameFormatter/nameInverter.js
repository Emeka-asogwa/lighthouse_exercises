const nameInverter = function(name) {
  if (name === undefined) return undefined;
  name = name.trim();
  let arrName = name.split(' ');

  if (name === '') {
    return '';
  }
  if (name.indexOf(' ') < 0 && name.indexOf('.') < 0) {
    return name;
  }
  if (arrName.length === 1) {
    return '';
  } else if (arrName.length === 2 && name.indexOf('.') < 0) {
    return `${arrName[1]}, ${arrName[0]}`;
  } else if (arrName.length === 2 && name.indexOf('.') >= 0) {
    return `${arrName[0]} ${arrName[1]}`;
  } else if (arrName.length === 3 && name.indexOf('.') >= 0) {
    return `${arrName[0]} ${arrName[2]}, ${arrName[1]}`;
  }


};

module.exports = nameInverter;