import './Login.css';  

function Login() {
  return (
    <div className="columns is-vcentered">
      <div className="login column is-4 ">
        <section className="section">
          <div className="has-text-centered">
            <a href="../../index.html">
              <img className="login-logo" src="source/img/Logo.png" />
            </a>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-right">
              <input id="user" className="input" type="text" />
              <span className="icon is-small is-right">
                <i className="fa fa-user"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Contraseña</label>
            <div className="control has-icons-right">
              <input id="password" className="input" type="password" />
              <span className="icon is-small is-right">
                <i className="fa fa-key"></i>
              </span>
            </div>
          </div>
          <div className="has-text-centered">
            <a
              id="login"
              className="button is-vcentered is-primary is-outlined"
            >
              Login
            </a>
          </div>
          <div className="has-text-centered">
            <a className="button is-text" href="singup.html">
              ¿No tienes una cuenta? Registrate
            </a>
          </div>
        </section>
      </div>
      <div id="particles-js" className="interactive-bg column is-8"></div>
    </div>
  );
}

export default Login;
