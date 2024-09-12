const generateUsers = (numberOfUsers: number) =>
  Array.from({ length: numberOfUsers }, (_, i) => ({
    imgUrl: `https://picsum.photos/seed/${i + 1}/200/300`,
    userName: `User ${i + 1}`,
    fallbackText: 'AV',
  }));

export { generateUsers };
