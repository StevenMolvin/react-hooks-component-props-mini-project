import blogData from "../data/blog";
const { image, about } = blogData;
function About() {
  return (
    <aside>
      <img
        src={image ? image : "https://via.placeholder.com/215"}
        alt={"blog logo"}
      />
      <p>{about}</p>
    </aside>
  );
}

export default About;
