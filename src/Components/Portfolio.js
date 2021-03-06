import React, { Component } from "react";

class Portfolio extends Component {
  renderMedia = file => {
    const filePath = `public/images/portfolio/${file}`;
    // videos are messed up
    // if (file.includes(".mp4")) {
    //   // if a video
    //   return (
    //     <video
    //       autoplay
    //       loop
    //       muted
    //       playsinline
    //       className="portfolioImage"
    //       src={filePath}
    //     />
    //   );
    // }

    return (
      <img
        src={filePath}
        alt="portfolio item"
        className="portfolioImage"
        style={{ height: 250 }}
      />
    );
  };

  render() {
    const projects = this.props.data.projects.map(project => {
      const { title, description, links, tech, image } = project;
      return (
        <div key={title}>
          <div className="portfolioItem">
            <h5>{title}</h5>
            <span className="flexMeUp">
              {this.renderMedia(image)}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    paddingTop: 30,
                    paddingBottom: 20
                  }}
                >
                  {tech.map(tech => (
                    <img
                      key={tech}
                      src={`public/images/tech/${tech}.png`}
                      style={{ height: 40, width: 40 }}
                      alt="tech item"
                    />
                  ))}
                  {links.github && (
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={"fab fa-github fa-2x"} />
                    </a>
                  )}
                  {links.hosted && (
                    <a
                      href={links.hosted}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={"fas fa-external-link-alt fa-2x"} />
                    </a>
                  )}
                </div>
                {/* Be careful with XSS if ever fetching */}
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </span>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work!</h1>
            <div id="portfolio-wrapper" className="portfolioContainer">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
