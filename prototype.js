import o3 from 'goss_proto';

let isProto = o3['o3'];
const protoArray = [];

do {
   protoArray.push(isProto.name);
}
while (isProto = Object.getPrototypeOf(isProto))

console.log(protoArray);