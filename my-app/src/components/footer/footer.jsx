import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="container">
            <div className="row">
              <section className="task">
                <div className="task__container">
                  <label className="check">
                    <input className="check__input" type="checkbox"/>
                    <span>
                      <a href="#">
                        <img src="./create_task.svg" alt="create"/>
                      </a>
                    </span>
                    <div className="check__text text">Create New Item</div>
                  </label>
                </div>
              </section>
            </div>
          </div>
        </footer>
    )
}

export default Footer;