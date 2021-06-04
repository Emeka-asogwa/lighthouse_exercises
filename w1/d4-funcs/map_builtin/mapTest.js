const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const  newLighthouse = lighthouses.map(names => names.length);


// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]
console.log("output:",newLighthouse, Array.isArray(newLighthouse));
