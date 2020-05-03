import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

class HeaderApp extends Component {
    render() {
        return (
                <UncontrolledCarousel items={items} />
        )
    }
}

const items = [
    {
      src: require('../images/strawberryshortcake.jpg'),
      altText: 'Strawberry Shortcake',
      caption: 'Strawberry Shortcake',
      header: 'Strawberry Shortcake',
      key: '1'
    },
    {
      src: require('../images/creampuff.jpg'),
      altText: 'Chocolate Pistaccio Creampuff',
      caption: 'Chocolate Pistaccio Creampuff',
      header: 'Chocolate Pistaccio Creampuff',
      key: '2'
    },
    {
      src: require('../images/blueberrycheesecake.jpg'),
      altText: 'Strawberry Cheesecake',
      caption: 'Strawberry Cheesecake',
      header: 'Strawberry Cheesecake',
      key: '3'
    }
  ];

export default HeaderApp