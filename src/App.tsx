import './index.css'
import Link from "./Link.tsx";

function App() {
  const socials = [
    {
      text: 'GitHub',
      url: 'https://github.com/Blurri10',
    },
    {
      text: 'Frontend Mentor',
      url: 'https://www.frontendmentor.io/profile/Blurri10',
    },
    {
      text: 'Linkedin',
      url: 'https://www.linkedin.com/',
    },
    {
      text: 'Twitter',
      url: 'https://x.com/',
    },
    {
      text: 'Instagram',
      url: 'https://www.instagram.com/',
    },
  ]

  return (
    <div className="card">
      <div className="profile">
        <img src="src/assets/24d6f2e3573b6bbaaeafddf0be7a8fa2.jpg" alt="profile-pic"/>
      </div>
      <div className="name">Mohammed Basil</div>
      <div className="location">Somewhere, Nowhere</div>
      <div className="bio">"I made this in 20m"</div>
      {socials.map((social, index) => (
          <Link key={index} text={social.text} url={social.url}/>
      ))}
    </div>
  )
}

export default App;
