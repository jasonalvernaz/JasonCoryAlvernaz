import React, { useState } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

const SocialWrapper = styled.div`
  padding-top: 10vmin;
  padding-bottom: 20vmin;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, minmax(5rem, 15rem));
  justify-self: center;
  justify-items: center;
  h2 {
    grid-column: 1 / -1;
    margin-bottom: 0;
  }
  .arrow {
    fill: ${props =>
      props.theme.isDark ? props.theme.blue : props.theme.purple};
    height: 4rem;
    width: 4rem;
    transform: rotate(90deg);
  }
  .active {
    grid-column: 1 / -1;
    animation-name: bounce;
    animation-duration: 1.8s;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    animation-iteration-count: 3;
    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0px);
      }
      40% {
        transform: translateY(-15px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
  }
  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`

const Social = () => {
  const [links] = useState([
    {
      url: "https://www.linkedin.com/in/JasonAlvernaz",
      logo: "",
      text: "Connect",
    },
    {
      url: "https://www.instagram.com/jason.cory.code/",
      logo: "",
      text: "Follow",
    },
    {
      url: "https://www.youtube.com/channel/UC9Psp9-p9jgHfDBReAAcZ3w",
      logo: "",
      text: "Watch",
    },
    {
      url: "https://www.twitter.com/JasonAlvernaz",
      logo: "",
      text: "Tweet",
    },
  ])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  })

  return (
    <SocialWrapper>
      <h2>Let's Connect</h2>
      <div ref={ref} className={inView ? "active" : ""}>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
        >
          <g>
            <g>
              <path d="M95.9,46.2L65.4,15.7c-2.1-2.1-5.5-2.1-7.5,0c-2.1,2.1-2.1,5.5,0,7.5l21.5,21.5H7.8c-2.9,0-5.3,2.4-5.3,5.3    c0,2.9,2.4,5.3,5.3,5.3h71.5L57.9,76.8c-2.1,2.1-2.1,5.5,0,7.5c1,1,2.4,1.6,3.8,1.6s2.7-0.5,3.8-1.6l30.6-30.6    c1-1,1.6-2.4,1.6-3.8C97.5,48.6,96.9,47.2,95.9,46.2z"></path>
            </g>
          </g>
        </svg>
      </div>
      {links.map((link, i) => {
        return (
          <a key={i} target="_blank" rel="noopener noreferrer" href={link.url}>
            <img src={link.logo} alt={link.text} />
          </a>
        )
      })}
    </SocialWrapper>
  )
}

export default Social