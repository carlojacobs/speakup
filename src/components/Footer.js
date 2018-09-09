import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return(
      <footer>
        <section className="copyright-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="logo">
                  <h2 className="demo-logo">Speak up</h2>
                  <a id="siteLink" href="http://www.carlojacobs.ga">carlojacobs.ga</a>
                </div>
                <div className="copyright">
                  <p>Copyright &copy; 2017. Carlo Jacobs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}
