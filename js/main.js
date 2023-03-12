const COMMENTARIES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const USERNAMES = [
  'Colby',
  'Stunning-girl7436',
  'nicole003',
  'mrsSummer',
  'pickle-riiiick',
  'i-love-steaks',
  'mariannaShakhnovich',
  'TrixieMAttel',
  'your_dad_call_me_Katya',
  'HarryHotter',
  'sofa_for_free'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const photos = [];

const createComments = function (i) {
  const comments = [];
  for (let g = 0; g <= 5; g++) {
    const getRandomAvatar = getRandomInteger (1, 6);
    const getRandomCommentary = getRandomInteger (0, COMMENTARIES.length - 1);
    const getRandomName = getRandomInteger (0, USERNAMES.length - 1);
    comments.push ({
      commentId: +(String(i) + String(g)),
      avatar: `img/avatar-${getRandomAvatar}.svg`,
      message: COMMENTARIES[getRandomCommentary],
      name: USERNAMES[getRandomName]
    });
  }
  return comments;
};

const createUser = () => {
  const getRandomLikes = getRandomInteger (15, 200);
  for (let i = 1; i <= 25; i++) {
    const photoInfo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: 'Idk why I made this photo... do you like it?',
      likes: getRandomLikes,
      comments: createComments(i)
    };
    photos.push(photoInfo);
  }
  return photos;
};

createUser();
