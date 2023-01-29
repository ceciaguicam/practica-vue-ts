

export interface ILoginState {
    token: null | string,

}

function state(): ILoginState {
    return {
      token: null
    };
  }

  export default state;