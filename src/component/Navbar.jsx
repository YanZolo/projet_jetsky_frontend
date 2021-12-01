import React, { useEffect, useRef, createRef, useState } from 'react';
import logo from '../images/newlogo.png'
import '../css/navbar.css'
import { gsap } from 'gsap';



export default function Navbar() {

  const items = [
    {
      name: (<img src={logo} className="logo-imag" alt="logo" />),
      color: "#295070",
      href: "/"
    },

    {
      name: "Avions",
      color: "#295070",
      href: "/Avions"
    },

    {
      name: "Destinations",
      color: "#295070",
      href: "/Destination"
    },

    {
      name: "Réservez votre vol",
      color: "#295070",
      href: "/Research"
    },

    {
      name: "À propos de nous",
      color: "#295070",
      href: "/Aproposdenous"
    },
    {
      name: "Notre politique",
      color: "#295070",
      href: "/Covid"
    }
  ];
  /*-----Menu------*/
  const Menu = ({ items }) => {
    const $root = useRef();
    const $indicator1 = useRef();
    const $indicator2 = useRef();
    const $items = useRef(items.map(createRef));
    const [active, setActive] = useState(0);

    const animate = () => {
      const menuOffset = $root.current.getBoundingClientRect();
      const activeItem = $items.current[active].current;
      const { width, height, top, left } = activeItem.getBoundingClientRect();

      const settings = {
        x: left - menuOffset.x,
        y: top - menuOffset.y,
        width: width,
        height: height,
        backgroundColor: items[active].color,
        ease: 'elastic.out(.7, .7)',
        duration: .8
      };

      gsap.to($indicator1.current, {
        ...settings
      });

      gsap.to($indicator2.current, {
        ...settings,
        duration: 1
      });

    };
    // debut de useEffect 
    useEffect(() => {
      animate();
      window.addEventListener('resize', animate);

      return () => {
        window.removeEventListener('resize', animate);
      };
    }, [active]);

    return (
      React.createElement("div", {
        ref: $root,
        className: "menu"
      },

        items.map((item, index) =>
          React.createElement("a", {
            key: item.name,
            ref: $items.current[index],
            className: `item ${active === index ? 'active' : ''}`,
            onMouseEnter: () => {
              setActive(index);
            },
            href: item.href
          }, item.name)),

        React.createElement("div", {
          ref: $indicator1,
          className: "indicator"
        }),

        React.createElement("div", {
          ref: $indicator2,
          className: "indicator"
        })));
  };

  return (
    React.createElement("div", { className: "nav" },
      React.createElement(Menu, { items: items }),
      // React.createElement("img", { scr: logo })
    )
  );
}
