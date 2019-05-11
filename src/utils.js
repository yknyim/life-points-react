let lastId = 3;

export default function(prefix='id') {
    lastId++;
    return `${lastId}`;
}