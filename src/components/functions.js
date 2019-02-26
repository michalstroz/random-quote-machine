const htmlDecode = (input) => {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const createTwitterString = (content, author) => {
  return `https://twitter.com/intent/tweet?hashtags=quotes&text=${content}%0D%0A${author}`;
}

export {htmlDecode, createTwitterString}
