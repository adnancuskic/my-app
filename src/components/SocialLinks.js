function SocialLinks(props) {
  return (
    <ul className="social-list">
      {props.arrayOfSocialLinks.map((element) => {
        return (
          <li key={element.link}>
            <a
              href={element.link}
              className={`btn social-icon ${element.channel}`}
            >
              {element.channel}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
