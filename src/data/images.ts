const createUrls = (items: string[]) => items.map(
    id => encodeURI(`https://images.unsplash.com/${id}?auto=format&fit=crop&w=500&q=60`)
);


export const images = createUrls([
    'photo-1633113088983-12fb3b2fe0ac',
    'photo-1488590528505-98d2b5aba04b',
    'photo-1518770660439-4636190af475',
    'photo-1485827404703-89b55fcc595e',
    'photo-1526374965328-7f61d4dc18c5',
]);


export const images3d = createUrls([
    'photo-1639614245569-bb156ca570c3',
    'photo-1639626111316-e7211cd0f710',
    'photo-1639596174739-578cb031cbb8',
    'photo-1639596161786-90d17ceb8e1b',
    'photo-1639550125248-27e46e925f7b',
    'photo-1639558360219-544c1ea2a4df',
]);
