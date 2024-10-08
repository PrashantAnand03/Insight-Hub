import PropTypes from "prop-types";
import image from "../assets/news.png"; // Default image if no image is provided

const NewsItems = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-black text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "360px", cursor: "pointer" }}
    >
      <img
        src={src || image} // Use default image if src is not provided
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt={title || "News"}
      />
      <div className="card-body">
        <h5 className="card-title">{title || "No Title"}</h5>
        {description && description.trim() ? (
          <p className="card-text text-secondary">
            {description.slice(0, 80) + "..."}
          </p>
        ) : (
          <p className="card-text text-secondary">
            {"Stay informed with the latest updates. Want to know more? Click on 'Read More for full details.'".slice(
              0,80) + "..."}
          </p>
        )}

        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

NewsItems.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  url: PropTypes.string,
};

export default NewsItems;
