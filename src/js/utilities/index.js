export const BASE_URL = 'https://bisonlou.herokuapp.com/api/v1/';

const formatDate = (rawDate) => {
  const longDateTime = new Date(rawDate);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

  const month = months[longDateTime.getMonth()];
  const day = days[longDateTime.getDay()];
  const year = longDateTime.getFullYear();
  let date = longDateTime.getDate();

  if (date < 10) {
    date = `0${date}`;
  }

  return `${day} ${date} ${month} ${year}`;
};

export const getHeaders = () => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: document.cookie,
  }
});

export const setCookie = (token) => {
  const bearer_token = `${'Bearer '}${token};`;
  document.cookie = `token=${bearer_token}`;
};

export default formatDate;
