export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (password, email) => {
  return fetch(
    `${BASE_URL}/signup`,
    {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ password, email })
    }
  )
    .then((res) => {
      try {
        if (res.status === 201) {
          return res.json();
        }
      } catch (e) {
        return (e)
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const authorize = (password, email) => {
  return fetch(
    `${BASE_URL}/signin`,
    {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ password, email })
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        return (data);
      } else {
        return;
      }

    })
    .catch((err) => console.log(err));
}

export const getContent = (token) => {
  return fetch(
    `${BASE_URL}/users/me`,
    {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      }
    })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return (res)
    })
}
