import styled from "styled-components";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

const LogoIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  svg {
    width: 24px;
    height: 24px;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      color: #ccc;
    }
  }
`;

const socialLinks = [
  {
    icon: FaFacebook,
    url: "https://www.facebook.com/TTTaxi24/",
    title: "Facebook",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/tt_taxi_pl/",
    title: "Instagram",
  },
  {
    icon: FaTiktok,
    url: "https://www.tiktok.com/@tt_taxi_pl",
    title: "TikTok",
  },
];

function SocialLogos({ className }) {
  const handleRedirect = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <LogoIcons className={className}>
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <Icon
            key={index}
            onClick={() => handleRedirect(link.url)}
            title={link.title}
          />
        );
      })}
    </LogoIcons>
  );
}

export default SocialLogos;
