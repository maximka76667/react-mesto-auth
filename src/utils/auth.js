class Auth {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  register(data) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "password": data.password,
        "email": data.email
      })
    })
  }

  login(data) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "password": data.password,
        "email": data.email
      })
    })
  }

  getEmail() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${this._token}`
      }
    })
  }
}

const auth = new Auth({
  baseUrl: 'https://auth.nomoreparties.co'
})

export default auth;