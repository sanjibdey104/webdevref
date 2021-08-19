export default function calcEstimatedReadTime(stringToRead) {
  const wordCount = stringToRead.match(/\w+/g).length;
  const avgReadRate = 200;
  const estimatedReadTime = Math.ceil(wordCount / avgReadRate);
  return estimatedReadTime;
}
