import React from 'react';
import { theme, display } from '../../styles/theme';
import styled from '@emotion/styled'
import Socials from './Socials/Socials'
import Join from './Join/Join';
import { Container } from '../Containers/Container';

const StyledFooter = styled.footer`
      background-color:${theme.colors.bg.dark};
      color: ${theme.colors.text.dark};
      padding: ${theme.spacing.padding.large};
      color:${theme.colors.text.light};
      font-size:1.1rem;
      text-align: center;
`



const socialLinks = [
    {
      icon: 'fab fa-gitlab',
      name: 'GitLab',
      url: 'https://gitlab.com/mythicteam/mythictable/',
      displayUrl: 'Mythic Table on GitLab'
    },
    {
      icon: 'fab fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/mythictable',
      displayUrl: 'Mythic Table on Twitter'
    },
    {
      icon: 'fab fa-facebook',
      name: 'Facebook',
      url: 'https://facebook.com/mythictable',
      displayUrl: 'Mythic Table on Facebook'
    },
    {
      icon: 'fab fa-reddit',
      name: 'Reddit',
      url: 'https://www.reddit.com/r/mythictable/',
      displayUrl: 'Mythic Table on Reddit'
    },
    {
      icon: 'fab fa-tumblr',
      name: 'Tumblr',
      url: 'https://mythictable.tumblr.com/',
      displayUrl: 'Mythic Table on Tumblr'
    },
    {
      icon: 'fab fa-youtube',
      name: 'YouTube',
      url: 'https://www.youtube.com/c/mythictable',
      displayUrl: 'Mythic Table on Youtube'
    },
    {
      icon: 'fab fa-discord',
      name: 'Discord',
      url: 'https://discord.gg/c4bEWDQ',
      displayUrl: 'Mythic Table on Discord'
    },
    {
      icon: 'fas fa-envelope',
      name: 'Support',
      url: 'mailto:support@mythictable.com',
      displayUrl: 'Contact Us'
    },
  ]


  const Footer = ({}) => {
    return (
      <StyledFooter >
        <Container>
          <Socials hexWidth={50} hexBorderWidth={2} fontSize={18} arrOfIcons={socialLinks}/>
          <Join/>
        </Container>
  
      <p >&copy; Mythic Table. All rights reserved.</p>
      <p>
        Designed by: <a href="https://github.com/blaine-reid">Blaine Reid</a>
      </p>
        <p>
          Please read our <a href="/privacy/">Privacy Policy</a>.
        </p>
        <p>
          <a href="/sitemap">Site Map</a>.
        </p>
    </StyledFooter>
   
  );
};

export default Footer;
