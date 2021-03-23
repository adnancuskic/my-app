import FollowButtonRow from "../components/FollowButtonRow";
import GenresRow from "../components/GenresRow";
import Header from "../components/Header";
import OriginRow from "../components/OriginRow";
import PopularCol from "../components/PopularCol";
import SocialLinks from "../components/SocialLinks";
import SubGenres from "../components/SubGenres";
import TitleWraper from "../components/TitleWraper";
import ToolTipWrapper from "../components/ToolTipWrapper";
import Visual from "../components/Visual";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProfilePage() {
  let { artists_uuid } = useParams();

  const [artist, setArtist] = useState(null);

  useEffect(() => {
    fetch(`https://run.mocky.io/v3/${artists_uuid}`)
      .then((response) => response.json())
      .then((data) => setArtist(data));
  }, [artists_uuid]);

  if (!artist) {
    return <div>Loading</div>;
  }

  return (
    <div className="container">
      <Header />
      <main className="main">
        <section className="section section-artist-detail trending claimed">
          <div className="page">
            <Visual profilePic={artist.data.image} />
            <div className="col-wrapper">
              <div className="col info">
                <div className="col-content">
                  <div className="info-wrapper">
                    <TitleWraper
                      name={artist.data.name}
                      booking={artist.data.booking_available}
                    />
                    <FollowButtonRow />
                    <OriginRow countryName={artist.data.country.name} />
                    <GenresRow generalGenre={artist.data.genre.name} />
                    <SubGenres arrayOfGenres={artist.data.subgenres} />
                  </div>
                  <div className="footer-detail">
                    <SocialLinks
                      arrayOfSocialLinks={artist.data.social_links}
                    />
                    <ToolTipWrapper />
                  </div>
                </div>
              </div>
              <div className="col stats">
                <div className="col-content">
                  <PopularCol popularity={artist.data.popularity} />
                </div>
              </div>
            </div>
            <button className="btn btn-scroll-down">Scroll down</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProfilePage;
