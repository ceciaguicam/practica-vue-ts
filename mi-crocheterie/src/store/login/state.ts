

export interface ILoginState {
    token: null | string,
    email: null | string,
    password: null | string,
}

function state(): ILoginState {
    return {
      token: null,
      email: null,
      password: null
    };
  }

  export default state;